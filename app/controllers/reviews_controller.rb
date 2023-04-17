class ReviewsController < ApplicationController
  before_action :authorize

  def create
    @review = Review.add_review(
      user_id: current_user.id,
      review_attributes: review_params[:review],
      beer_attributes: review_params[:beer]
    )

    if @review
      render json: { review: @review }, status: :created
    else
      render json: { error: 'Review failed to save' }, status: :bad_request
    end
  end

  private

  def review_params
    params.permit(
      review: %i[description user_rating],
      beer: %i[name tagline first_brewed description image_url abv ibu srm volume]
    )
  end
end
