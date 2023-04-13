require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:beers).class_name('Beer') }
    it { is_expected.to have_many(:reviews).class_name('Review') }
    it { is_expected.to have_many(:comments).class_name('Comment') }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:first_name) }

    it 'validates invalid email format' do
      subject.email = "invalid_email"
      subject.first_name = "Name"

      expect(subject.valid?).to be false
    end

    it 'validates valid email format' do
      subject.email = "valid@email.com"
      subject.first_name = "Name"

      expect(subject.valid?).to be
    end
  end
end
