require 'rails_helper'

RSpec.describe 'ReviewLikes', type: :request do
  let(:current_user) { create(:user) }
  let(:review) { create(:review, user: current_user) }

  describe 'POST /create' do
    let(:params) do
      {
        review_id: review.id,
      }
    end

    context 'when user is not logged in' do
      it 'returns 401 status code' do
        post review_likes_path, params: params

        expect(response).to have_http_status(401)
      end
    end

    context 'when user is logged in' do
      before do
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(current_user)
      end

      context 'when params are valid' do
        it 'returns 201 status code' do
          post review_likes_path, params: params

          expect(response).to have_http_status(201)
        end
      end

      context 'when params are invalid' do
        @invalid_params = {
          invalid: 1,
        }

        it 'returns 400 status code' do
          post review_likes_path, params: @invalid_params

          expect(response).to have_http_status(400)
        end
      end

      context 'when record exists' do
        it 'returns 201 status code' do
          post review_likes_path, params: params
          expect(response).to have_http_status(201)

          post review_likes_path, params: params
          expect(response).to have_http_status(400)
        end
      end
    end
  end

  describe 'DELETE /review_likes/:id' do
    context 'when user is not logged in' do
      it 'returns 401 status code' do
        delete review_like_path(1)

        expect(response).to have_http_status(401)
      end
    end

    context 'when user is logged in' do
      before do
        allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(current_user)
      end

      it 'returns 404 if record is not found' do
        delete review_like_path(1)

        expect(response).to have_http_status(404)
      end

      it 'returns 204 with a successful destroy' do
        review_like = create(:review_like, user: current_user, review: review)
        delete review_like_path(review_like.id)

        expect(response).to have_http_status(204)
      end
    end
  end
end
