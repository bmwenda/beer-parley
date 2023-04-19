class Review < ApplicationRecord
  belongs_to :user
  belongs_to :beer
  has_many :comments

  validates :description, :user_rating, presence: true

  def self.add_review(user:, review_attributes:, beer_attributes:)
    ActiveRecord::Base.transaction do
      beer = Beer.find_or_create_by!(beer_attributes)
      @review = Review.create!(review_attributes.merge({ user_id: user.id, beer_id: beer.id }))
    end
    GenerateRecommendationsJob.perform_later(user)
    @review
  rescue StandardError => e
    Rails.logger.error e
    nil
  end
end
