Rails.application.routes.draw do
  get 'beers', to: 'beers#index'
  get '/logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#show'
  resources :users, only: %i[new create]
  resources :sessions, only: %i[new create]
  resources :reviews, only: %i[create]

  root to: 'beers#index'
  get '*path', to: 'beers#index'
end
