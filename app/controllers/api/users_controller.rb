class Api::UsersController < ApplicationController
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
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def user_params

    params.require(:user).permit(:username, :password, :image_url)
  end
end
