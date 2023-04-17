class ApplicationController < ActionController::Base
  include Authorization
  skip_before_action :verify_authenticity_token

  def authorize
    render json: { error: 'Unauthorized' }, status: :unauthorized if current_user.nil?
  end
end
