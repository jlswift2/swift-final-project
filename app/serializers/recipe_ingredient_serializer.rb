class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :measurement, :ingredient

  belongs_to :ingredient
end
