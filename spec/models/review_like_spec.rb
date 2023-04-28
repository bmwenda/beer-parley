require 'rails_helper'

RSpec.describe ReviewLike, type: :model do
  describe 'validations' do
    let(:user) { create(:user) }
    let(:review) { create(:review, user: user) }

    it 'validates uniqueness of user_id and review_id' do
      create(:review_like, user: user, review: review)

      review_like = ReviewLike.new(user_id: user.id, review_id: review.id)

      expect(review_like.valid?).to be false
      expect(review_like.errors.messages).not_to be_blank
      expect(review_like.errors.messages[:review_id]).to include('has already been taken')
    end
  end
end
