class ReviewLikesController < ApplicationController
  before_action :authorize, only: %i[create destroy]

  def create
    @review_like = ReviewLike.new(
      user_id: current_user.id,
      review_id: review_likes_params[:review_id],
    )

    if @review_like.save
      render json: { review: @review_like }, status: :created
    else
      render json: { error: @review_like.errors.full_messages.to_sentence }, status: :bad_request
    end
  end

  def destroy
    @review_like = ReviewLike.find(review_likes_params[:id])
    @review_like.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: e.message }, status: :not_found
  end

  private

  def review_likes_params
    params.permit(:id, :review_id)
  end
end
