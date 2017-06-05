class Api::GroupsController < ApplicationController

  def show
    @group = Group.find(params[:id])
  end

  def index
    @groups = current_user.groups
  end

  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user.id
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 401
    end
  end

  def destroy
    @group = Group.find(params[:id])
    if current_user.id == @group.creator_id
      @group.destroy
      render :show
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  private
  def group_params
    params.require(:group).permit(:group_name)
  end
end
