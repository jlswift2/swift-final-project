class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
  def create
      user = User.create(user_params)
      if user.valid?
          user.friend_code = SecureRandom.hex(5)
          user.save
          render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def find_friend
    friend = User.find_by(id: params[:friendId])
    render json: friend, include: ['recipes', 'recipes.tags'], status: :ok
  end
  
  private
  
  def user_params
    params.permit(:username, :password, :password_confirmation, :email, :first_name, :last_name, :profile_image)
  end

  def render_unprocessable_entity(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(exception)
      render json: { error: "Recipe cannot be found"}, status: :not_found
  end

end
