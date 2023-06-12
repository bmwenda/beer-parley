class GoogleLogin
  attr_reader :jwt

  def initialize(jwt)
    @jwt = jwt
  end

  def user_attributes
    payload = Google::Auth::IDTokens.verify_oidc(
      jwt,
      aud: Rails.application.credentials.dig(:google_sign_in, :client_id),
    )
    @user_attributes ||= payload.slice('sub', 'email', 'picture', 'given_name', 'family_name')
  rescue VerificationError => e
    Rails.logger.error e
    nil
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
end
