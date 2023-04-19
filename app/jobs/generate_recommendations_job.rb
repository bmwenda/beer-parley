class GenerateRecommendationsJob < ApplicationJob
  queue_as :default

  def perform(user)
    Recommendations::BeerRecommendations.create_recommendations(user)
  end
end
