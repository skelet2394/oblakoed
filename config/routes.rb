Rails.application.routes.draw do
  resources :todo

  root 'todo#index'

  get 'todo/index'

  put 'todo/update'

  post 'todo/create'

end
