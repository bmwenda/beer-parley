class Beer < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, :description, :image_url, presence: true
end
