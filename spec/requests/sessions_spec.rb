require 'rails_helper'

RSpec.describe 'Sessions', type: :request do
  describe 'POST /sessions' do
    let!(:user) { create(:user) }

    context 'when credentials are valid' do
      before do
        @valid_login_params = {
          first_name: user.first_name,
          email: user.email,
          password: user.password
        }
      end

      it 'creates user successfully' do
        post sessions_path, params: @valid_login_params, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(200)
      end
    end

    context 'when credentials are invalid' do
      before do
        @invalid_login_params = {
          first_name: user.first_name,
          password: 'invalid_password'
        }
      end

      it 'responds with 401 status code' do
        post sessions_path, params: @invalid_login_params, headers: { 'ACCEPT' => 'application/json' }

        expect(response).to have_http_status(401)
      end
    end
  end
end
