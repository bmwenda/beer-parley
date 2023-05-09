class SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      respond_to do |format|
        format.html
        format.json { render :show, status: :ok }
      end
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  def new; end

  def create
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password])
      session[:user_id] = @user.id
      respond_to do |format|
        format.html
        format.json { render :create, status: :ok }
      end
    else
      render json: { error: 'Username or password is invalid' }, status: :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    respond_to do |format|
      format.html {  redirect_to root_path }
      format.json { render json: { message: 'Logged out' }, status: :no_content }
    end
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
