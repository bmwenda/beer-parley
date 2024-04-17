class ReviewsController < ApplicationController
  before_action :authorize, only: %i[create]

  def index
    @reviews = Review.page(params[:page])

    respond_to do |format|
      format.html
      format.json { render :index, status: :ok }
    end
  end

  def create
    @review = Review.add_review(
      user_id: current_user.id,
      review_attributes: review_params[:review],
      beer_attributes: review_params[:beer],
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
      beer: %i[name tagline first_brewed description image_url abv ibu srm volume],
    )
  end
end
