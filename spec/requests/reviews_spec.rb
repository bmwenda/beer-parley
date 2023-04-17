require 'rails_helper'

RSpec.describe 'Reviews', type: :request do
  describe 'POST /reviews' do
    let(:current_user) { create(:user) }
    let(:params) do
      {
        beer: {
          name: 'Some beer',
          description: 'Best one ever',
          image_url: 'http://example.com'
        },
        review: {
          description: 'Amazing!',
          user_rating: '5'
        }
      }
    end

    context 'when user is not logged in' do
      it 'returns 401 status code' do
        post reviews_path, params: params

        expect(response).to have_http_status(401)
      end
    end

    context 'when user is logged in' do
      before do
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(current_user)
      end

      context 'when params are valid' do
        it 'returns 201 status code' do
          post reviews_path, params: params

          expect(response).to have_http_status(201)
        end
      end

      context 'when params are invalid' do
        @invalid_params = {
          beer: {
            name: 'A name'
          },
          review: {
            description: 'Amazing!'
          }
        }

        it 'returns 400 status code' do
          post reviews_path, params: @invalid_params

          expect(response).to have_http_status(400)
        end
      end
    end
  end

  describe 'GET /reviews' do
    before do
      create(:review)
    end

    it 'returns reviews' do
      get reviews_path

      expect(response).to have_http_status(200)
    end
  end
end
