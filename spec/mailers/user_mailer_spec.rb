require "rails_helper"

RSpec.describe UserMailer, type: :mailer do
  let(:user) { create(:user) }
  let(:welcome_email) { UserMailer.with(user: user).welcome_email }

  it 'renders mail headers correctly' do
    expect(welcome_email.subject).to eq('Welcome to beer-parley')
    expect(welcome_email.to).to eq([user.email])
    expect(welcome_email.from).to eq(['from@example.com'])
  end

  it 'renders the body' do
    expect(welcome_email.body.encoded).to match('Welcome to beer-parley!')
  end
end
