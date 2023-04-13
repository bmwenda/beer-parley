require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user).class_name('User') }
    it { is_expected.to belong_to(:review).class_name('Review') }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:body) }
  end
end
