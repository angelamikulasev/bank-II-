Rails.application.routes.draw do
  
  root :to => 'pages#home'

  resources :accounts
  resources :users
  resources :transactions

  resources :sessions, only: [:new, :create, :destroy]
end
