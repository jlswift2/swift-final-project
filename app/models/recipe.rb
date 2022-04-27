class Recipe < ApplicationRecord
  belongs_to :user
  has many :recipe_tags
  has_many :tags, through: :recipe_tags
end
