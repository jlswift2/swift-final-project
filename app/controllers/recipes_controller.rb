class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def show
        recipe = Recipe.find_by(id: params[:recipeId])
        render json: recipe, status: :ok
    end

    def user_recipes_limited
        user = User.find_by(id: params[:id])
        recipes = user.recipes.last(3).reverse
        render json: recipes, status: :ok
    end

    def user_recipes_all
        user = User.find_by(id: params[:id])
        recipes = user.recipes.reverse
        render json: recipes, status: :ok
    end

    private

    def render_unprocessable_entity(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found(exception)
        render json: { error: "Recipe cannot be found"}, status: :not_found
    end

end
