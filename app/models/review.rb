class Review < ApplicationRecord
  belongs_to :user
  belongs_to :beer
  has_many :comments

  validates :description, :user_rating, presence: true
end
