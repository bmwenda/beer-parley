Rails.application.routes.draw do
  # match "*path", to: "sessions#new", via: :all
  # get 'site/index'
  # get 'signup', to: 'users#new', as: 'signup'
  # get 'login', to: 'sessions#new', as: 'login'
  # get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'beers', to: 'beers#index'
  resources :users, only: %i[new create]
  resources :sessions, only: %i[new create]

  root to: 'beers#index'
  get '*path', to: 'beers#index'
end
