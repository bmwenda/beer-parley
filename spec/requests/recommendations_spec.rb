require 'rails_helper'

RSpec.describe 'Recommendations', type: :request do
  describe 'GET /index' do
    context 'when user is not authorized' do
      it 'returns a 200 status code' do
        get recommendations_path

        expect(response).to have_http_status(200)
      end
    end

    context 'when user is authorized' do
      it 'returns a 200 status code' do
        get recommendations_path

        expect(response).to have_http_status(200)
      end
    end
  end
end
