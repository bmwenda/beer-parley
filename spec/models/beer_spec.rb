require 'rails_helper'

RSpec.describe Beer, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:reviews).class_name('Review') }
    it { is_expected.to have_many(:users).class_name('User') }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:description) }
    it { is_expected.to validate_presence_of(:image_url) }
  end
end
