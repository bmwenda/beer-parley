class SessionsController < ApplicationController
  def new; end

  def create
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password])
      session[:user_id] = @user.id
      render json: { user: @user }, status: :ok
    else
      render json: { error: 'Username or password is invalid' }, status: :unauthorized
    end
  end

  def destroy
    session[user_id] = nil
    redirect_to root_path
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
