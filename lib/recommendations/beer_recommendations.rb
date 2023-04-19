require 'matrix'

module Recommendations
  class BeerRecommendations
    # Calculates how similar each beer is compared to user's profile
    # See cosine similaty documentation: https://en.wikipedia.org/wiki/Cosine_similarity
    class << self
      def create_recommendations(user)
        Beer.find_each do |beer|
          score = similarity_score(user, beer)
          SimilarityScore.create!(user_id: user.id, beer_id: beer.id, score: score)
        end
      rescue StandardError => e
        Rails.logger.error e
      end

      private

      def similarity_score(user, beer)
        beer_vector = Vector[
          beer.rating_score,
          beer.price_score,
          beer.abv_score,
          beer.ibu_score
        ]

        dot_product = user.beer_profile_vector.dot(beer_vector)
        magnitude_product = user.beer_profile_vector.magnitude * beer_vector.magnitude
        return 0 if magnitude_product.zero?

        (dot_product / magnitude_product) * 100
      end
    end
  end
end
