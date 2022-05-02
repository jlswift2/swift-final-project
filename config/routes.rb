Rails.application.routes.draw do
  
  post "/signup", to: 'users#create'
  get "/me", to: "users#show"
  
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

  get "/user/:id/recipes", to: "recipes#user_recipes"
  get "/recipes/:recipeId", to: "recipes#show"
end
