class UsersController < ApplicationController
  def show; end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html
        format.json { render :show, status: :created }
      else
        format.json { render json: { error: @user.errors.full_messages.to_sentence }, status: :bad_request }
      end
    end
  end

  private

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation
    )
  end
end
