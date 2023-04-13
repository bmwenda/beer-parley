class User < ApplicationRecord
  has_many :comments
  has_many :reviews
  has_many :beers, through: :reviews

  validates :first_name, :email, presence: true
  validates :email, format: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
end
