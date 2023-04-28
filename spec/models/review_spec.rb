require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user).class_name('User') }
    it { is_expected.to belong_to(:beer).class_name('Beer') }
    it { is_expected.to have_many(:comments).class_name('Comment') }
    it { is_expected.to have_many(:review_likes).class_name('ReviewLike') }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:description) }
    it { is_expected.to validate_presence_of(:user_rating) }
  end

  describe '.add_review' do
    let(:user) { create(:user) }
    let(:review_attributes) { { description: 'Great!', user_rating: 5 } }
    let(:beer_attributes) do
      {
        name: 'Some beer',
        description: 'Best one ever',
        image_url: 'http://example.com'
      }
    end

    context 'when params are valid' do
      it 'adds a review successfully' do
        review = Review.add_review(
          user_id: user.id,
          review_attributes: review_attributes,
          beer_attributes: beer_attributes
        )

        expect(review).to be_truthy
        expect(review.description).to eq(review_attributes[:description])
      end

      it 'triggers recommendations job' do
        expect(GenerateRecommendationsJob).to receive(:perform_later)

        Review.add_review(
          user_id: user.id,
          review_attributes: review_attributes,
          beer_attributes: beer_attributes
        )
      end
    end

    context 'when params are invalid' do
      it 'returns a falsey value' do
        review = Review.add_review(
          user_id: user.id,
          review_attributes: review_attributes.delete(:description),
          beer_attributes: beer_attributes
        )

        expect(review).to be_falsey
      end
    end
  end
end
