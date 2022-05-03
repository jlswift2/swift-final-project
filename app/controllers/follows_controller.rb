class FollowsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    def user_follows
        user = User.find_by(id: params[:id])
        followees = user.followees
        render json: followees, status: :ok
    end

    private

    def render_unprocessable_entity(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found(exception)
        render json: { error: "Recipe cannot be found"}, status: :not_found
    end
end
