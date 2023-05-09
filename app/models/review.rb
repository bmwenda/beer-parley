class Review < ApplicationRecord
  belongs_to :user
  belongs_to :beer
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :review_likes, dependent: :destroy

  validates :description, :user_rating, presence: true

  paginates_per 9

  def self.add_review(user_id:, review_attributes:, beer_attributes:)
    ActiveRecord::Base.transaction do
      beer = Beer.find_or_create_by!(beer_attributes)
      @review = Review.create!(review_attributes.merge({ user_id: user_id, beer_id: beer.id }))
    end
    GenerateRecommendationsJob.perform_later(user_id)
    @review
  rescue StandardError => e
    Rails.logger.error e
    nil
  end
end
