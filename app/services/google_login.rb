class GoogleLogin
  attr_reader :jwt

  def initialize(jwt)
    @jwt = jwt
  end

  def user_attributes
    payload = decode_payload(jwt.split('.')[1])
    return unless !token_expired?(payload['exp']) && valid_issuer?(payload['iss']) && valid_aud?(payload['aud'])

    @user_attributes ||= payload.slice('sub', 'email', 'picture', 'given_name', 'family_name')
  end

  def user
    return if user_attributes.blank?

    User.find_by(email: user_attributes['email']) || create_user
  end

  private

  def create_user
    User.create!(
      first_name: user_attributes['given_name'],
      last_name: user_attributes['family_name'],
      email: user_attributes['email'],
      google_id: user_attributes['sub'],
      avatar_url: user_attributes['picture'],
    )
  rescue ActiveRecord::RecordInvalid => e
    Rails.logger.error e
    nil
  end

  def decode_payload(str)
    JSON.parse(Base64.decode64(str))
  end

  def token_expired?(exp)
    Time.zone.now.to_i > exp
  end

  def valid_issuer?(iss)
    iss.match(/google.com$/)
  end

  def valid_aud?(aud)
    aud == Rails.application.credentials.dig(:google_sign_in, :client_id)
  end
end
