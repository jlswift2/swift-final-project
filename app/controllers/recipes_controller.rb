class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def show
        recipe = Recipe.find_by(id: params[:recipeId])
        render json: recipe, status: :ok
    end

    def user_recipes_limited
        # user = User.find_by(id: params[:id])
        # recipes = user.recipes.last(3).reverse
        recipes = Recipe.where(user_id: params[:id]).last(3).reverse
        render json: recipes, status: :ok
    end

    def user_recipes_all
        # user = User.find_by(id: params[:id])
        # recipes = user.recipes.reverse
        recipes = Recipe.where(user_id: params[:id])
        render json: recipes, status: :ok
    end

    def create
        recipe_ingredients = params[:ingredients]
        recipe_tags = params[:tags]
        recipe = Recipe.create!(
            name: params[:name],
            description: params[:description],
            steps: params[:steps],
            prep_time: params[:prep_time],
            total_time: params[:total_time],
            user_id: session[:user_id]
        )
        
        recipe_ingredients.each do |ing|
            ingred = Ingredient.find_by(name: ing[:ingredient])
            if ingred
                RecipeIngredient.create!(
                    quantity: ing[:quantity], 
                    measurement: ing[:measurement],
                    ingredient_id: ingred[:id],
                    recipe_id: recipe[:id]
                ) 
            else
                new_ingredient = Ingredient.create!(name: ing[:ingredient])
                RecipeIngredient.create!(
                    quantity: ing[:quantity], 
                    measurement: ing[:measurement],
                    ingredient_id: new_ingredient[:id],
                    recipe_id: recipe[:id]
                )
            end
        end

        recipe_tags.each do |tag|
            already = Tag.find_by(title: tag)
            if already
                RecipeTag.create!(
                    recipe_id: recipe[:id],
                    tag_id: already[:id]
                )
            else
                new_tag = Tag.create!(title: tag)
                RecipeTag.create!(
                    recipe_id: recipe[:id],
                    tag_id: new_tag[:id]
                )
            end
        end

        render json: recipe, status: :created
    end

    def delete
        recipe = Recipe.find_by(id: params[:recipeId])
        if recipe
            recipe.destroy
            render json: {}, status: :ok
        else
            render json: { error: "recipe not found" }, status: :not_found
        end
    end

    def update
        recipe=Recipe.find_by(id: params[:recipeId])
        recipe.update!(
            name: params[:name],
            description: params[:description],
            steps: params[:steps],
            prep_time: params[:prep_time],
            total_time: params[:total_time],
            user_id: session[:user_id]
            )
        
        recipe.recipe_ingredients.each do |o|
            o.destroy
        end
        recipe_ingredients = params[:ingredients]
        recipe_ingredients.each do |ing|
            ingred = Ingredient.find_by(name: ing[:ingredient])
            if ingred
                RecipeIngredient.create!(
                    quantity: ing[:quantity], 
                    measurement: ing[:measurement],
                    ingredient_id: ingred[:id],
                    recipe_id: recipe[:id]
                ) 
            else
                new_ingredient = Ingredient.create!(name: ing[:ingredient])
                RecipeIngredient.create!(
                    quantity: ing[:quantity], 
                    measurement: ing[:measurement],
                    ingredient_id: new_ingredient[:id],
                    recipe_id: recipe[:id]
                )
            end
        end

        recipe.recipe_tags.each do |o|
            o.destroy
        end
        recipe_tags = params[:tags]
        recipe_tags.each do |tag|
            already = Tag.find_by(title: tag)
            if already
                RecipeTag.create!(
                    recipe_id: recipe[:id],
                    tag_id: already[:id]
                )
            else
                new_tag = Tag.create!(title: tag)
                RecipeTag.create!(
                    recipe_id: recipe[:id],
                    tag_id: new_tag[:id]
                )
            end
        end
        render json: recipe, status: :ok
    end

    private

    def render_unprocessable_entity(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found(exception)
        render json: { error: "Recipe cannot be found"}, status: :not_found
    end

end
