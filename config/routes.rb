Rails.application.routes.draw do
  get 'beers', to: 'beers#index'
  get '/logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#show'
  get '/recommendations', to: 'recommendations#index'
  resources :users, only: %i[show create]
  resources :sessions, only: %i[show create]
  resources :reviews, only: %i[index create]

  root to: 'beers#index'
  get '*path', to: 'beers#index'
end
