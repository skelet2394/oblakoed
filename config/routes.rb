Rails.application.routes.draw do

  resources :todo

  get 'todo/index'

  put 'todo/update'

  post 'todo/create'

  root 'todo#index'
end
