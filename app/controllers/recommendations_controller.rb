class RecommendationsController < ApplicationController
  def index
    return [] if current_user.nil?

    @beers = SimilarityScore.recommendations(current_user.id)

    respond_to do |format|
      format.html
      format.json { render :index, status: :ok }
    end
  end
end
