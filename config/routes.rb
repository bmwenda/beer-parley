Rails.application.routes.draw do
  get 'beers', to: 'beers#index'
  get '/logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#show'
  get '/recommendations', to: 'recommendations#index'
  post '/google_sign_in/callback', to: 'sessions#google_sign_in'
  resources :users, only: %i[show create]
  resources :sessions, only: %i[show create]
  resources :reviews, only: %i[index create]
  resources :review_likes, only: %i[create destroy]

  root to: 'beers#index'
  get '*path', to: 'beers#index'
end
