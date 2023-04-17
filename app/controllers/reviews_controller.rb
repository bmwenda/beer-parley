class ReviewsController < ApplicationController
  def create
    puts("current_user: #{current_user}")
  end

  private

  def review_params
    params.permit(
      review: %i[description rating],
      beer: %i[name tagline first_brewed description image_url abv ibu srm volume]
    )
  end
end
