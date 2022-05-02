class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def show
        user = User.find_by(id: params[:id])
        recipes = user.recipes
        render json: recipes, status: :ok
    end

    private

    def render_unprocessable_entity(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
