class SimilarityScore < ApplicationRecord
  belongs_to :user
  belongs_to :beer

  scope :recommendations, lambda { |user_id|
                            Beer
                              .joins(:similarity_scores)
                              .where(similarity_scores: { user_id: user_id })
                              .order(score: :desc)
                              .uniq
                          }
end
