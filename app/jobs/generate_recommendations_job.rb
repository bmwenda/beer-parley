class GenerateRecommendationsJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    user = User.find(user_id)
    Recommendations::BeerRecommendations.create_recommendations(user)
  rescue ActiveRecord::RecordNotFound => e
    Rails.logger.error e
  end
end
