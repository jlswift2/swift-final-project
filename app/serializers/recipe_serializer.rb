class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :steps, :prep_time, :total_time, :user_id
  
  has_many :tags
end
