class Api::UsersController < ApplicationController

  # def index
  #   search = params[:search]
  #   group_id = params[:group_id]
  #   @all_users = []
  #   users = User.where("LOWER(username) LIKE LOWER(?)", "%#{search}%")
  #   users.each do |u|
  #     @all_users << u.groups.where.not(group_id: group_id) && u.memberships.where.not(group_id: group_id)
  #   end
  #   @all_users
  #   # debugger;
  # end


  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    @user = User.find_by(username: user_params[:username])

    if @user
      @user.update_attribute(image_url: user_params[:image_url])
      if user_params.latitude != @user.latitude
        @user.update_attribute(latitude: user_params[:latitude])
      end
      if user_params.longitude != @user.longitude
        @user.update_attribute(latitude: user_params[:longitude])
      end
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def user_params
    params.require(:user).permit(:username, :password, :image_url, :latitude, :longitude)
  end
end
