Rails.application.routes.draw do
  resources :recipes, only: [:index, :show, :create]
  
  post "/signup", to: 'users#create'
  get "/me", to: "users#show"
  
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

  # get "/recipes/:id", to: "recipes#user_recipes"
end
