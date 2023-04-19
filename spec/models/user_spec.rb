require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:beers).class_name('Beer') }
    it { is_expected.to have_many(:reviews).class_name('Review') }
    it { is_expected.to have_many(:comments).class_name('Comment') }
    it { is_expected.to have_one(:beer_profile).class_name('BeerProfile') }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:first_name) }

    it 'validates invalid email format' do
      subject.email = 'invalid_email'
      subject.first_name = 'Name'

      expect(subject.valid?).to be false
    end

    it 'validates valid email format' do
      subject.email = 'valid@email.com'
      subject.first_name = 'Name'
      subject.password = 'pswd'

      expect(subject.valid?).to be true
    end

    it 'validates uniqueness of email' do
      User.create(first_name: 'person_1', email: 'valid@email.com', password: 'pwd')
      person2 = User.new(first_name: 'person_2', email: 'valid@email.com', password: 'other')

      expect(person2.valid?).to be false
      expect(person2.errors.messages).not_to be_blank
      expect(person2.errors.messages[:email]).to include('has already been taken')
    end
  end
end
