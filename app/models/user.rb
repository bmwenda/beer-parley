require 'matrix'

class User < ApplicationRecord
  has_secure_password
  has_secure_password :recovery_password, validations: false

  has_one :beer_profile, dependent: :destroy
  has_many :comments
  has_many :reviews
  has_many :similarity_scores, dependent: :destroy
  has_many :beers, through: :reviews, dependent: :destroy

  validates :first_name, :email, presence: true
  validates :email, format: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/, uniqueness: true

  def beer_profile_vector
    Vector[
      beer_profile.rating_score,
      beer_profile.price_score,
      beer_profile.abv_score,
      beer_profile.ibu_score
    ]
  end
end
