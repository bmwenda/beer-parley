Rails.application.routes.draw do
  get 'site/index'
  resources :users, only: %i[new create]
  root to: 'application#index'
end
