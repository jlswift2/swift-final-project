Rails.application.routes.draw do
  
  post "/signup", to: 'users#create'
  get "/me", to: "users#show"
  get "/friends/:friendId", to: "users#find_friend"
  
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

  get "/user/:id/recipes", to: "recipes#user_recipes_limited"
  get "/user/:id/recipes/all", to: "recipes#user_recipes_all"
  get "/recipes/:recipeId", to: "recipes#show"
  post "/recipes/new", to: "recipes#create"
  delete "recipes/:recipeId", to: "recipes#delete"
  patch "recipes/:recipeId", to: "recipes#update"

  get "/user/:id/follows", to: "follows#user_follows"
end
