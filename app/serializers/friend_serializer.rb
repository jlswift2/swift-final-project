class FriendSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :friend_code, :profile_image
  has_many :recipes
end
