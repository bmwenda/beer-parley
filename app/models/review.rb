class Review < ApplicationRecord
  belongs_to :user
  belongs_to :beer
  has_many :comments

  validates :description, :user_rating, presence: true

  def self.add_review(user_id:, review_attributes:, beer_attributes:)
    ActiveRecord::Base.transaction do
      beer = Beer.find_or_create_by!(beer_attributes)
      Review.create!(review_attributes.merge({ user_id: user_id, beer_id: beer.id }))
    end
  rescue StandardError => e
    Rails.logger.error e
    nil
  end
end
