class Beer < ApplicationRecord
  has_many :reviews
  has_many :similarity_scores, dependent: :destroy
  has_many :users, through: :reviews, dependent: :destroy

  validates :name, :description, :image_url, presence: true
end
