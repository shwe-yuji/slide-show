Rails.application.routes.draw do
  root 'home#index'
  resources :images, only: [:create, :destroy]
end
