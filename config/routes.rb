Rails.application.routes.draw do
  
  root :to => 'pages#home'

  resources :accounts
  resources :users
  resources :transactions

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'


end
