Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:show, :index, :create, :destroy, :update]
    resources :invitations, only: [:index, :show, :create, :destroy]
    resources :groupmembers, only: [:create, :destroy]
    get 'verify' => 'sessions#verify_session_token'
  end




end
