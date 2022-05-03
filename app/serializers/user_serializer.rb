class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :friend_code, :profile_image

  include Rails.application.routes.url_helpers

  def profile_image
    return unless object.profile_image.attached?

    object.profile_image.blob.attributes
      .slice('filename', 'byte_size', 'id')
      .merge(url: profile_image_url(object.profile_image))
  end

  def profile_image_url(image)
    rails_blob_path(image, only_path: true)
  end


end
