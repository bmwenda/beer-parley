module Authorization
  extend ActiveSupport::Concern

  included do
    before_action :current_user
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
