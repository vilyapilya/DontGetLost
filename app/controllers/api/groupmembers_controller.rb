class Api::GroupmembersController < ApplicationController
  def create
    @group_member = GroupMember.new(groupmember_params)
    @group_member.user_id = current_user.id
    @group = Group.find(groupmember_params[:group_id])

    if @group && @group_member.save
      render "api/groups/show"
    else
      render json: ["Error when joining group"]
    end
  end

  def destroy
    @group_member = GroupMember.find(params[:id])
    if @group_member.destroy
      render "api/groups/index"
    end
  end

  private
  def groupmember_params
    params.require(:groupmember).permit(:group_id)
  end
end
