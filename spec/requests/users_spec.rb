require 'rails_helper'

RSpec.describe 'Users', type: :request do
  describe 'POST /users' do
    context 'when params are valid' do
      valid_user_params = {
        first_name: 'Test',
        email: 'test@email.com',
        password: '1234'
      }

      it 'creates user successfully' do
        post users_path, params: valid_user_params, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(201)
      end

      it 'enqueues a welcome email' do
        expect {
          post users_path, params: valid_user_params, headers: { 'ACCEPT' => 'application/json' }
      }.to have_enqueued_job(ActionMailer::MailDeliveryJob)
      end
    end

    context 'when params are invalid' do
      invalid_user_params = {
        first_name: 'Test',
        password: '1234'
      }

      it 'responds with 400 status code' do
        post users_path, params: invalid_user_params, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(400)
      end
    end
  end
end
