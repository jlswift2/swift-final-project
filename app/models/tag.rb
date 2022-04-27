class Tag < ApplicationRecord
    has_many :recipe_tags
    has many :recipes, through: :recipe_tags
end
