class Api::InvitationsController < ApplicationController

  def index
    @invitations = current_user.invitations
    # @invitations = Invitation.all
    render "api/invitations/index"
  end

  def show
    @invitation = Invitation.find(params[:id])
    @members = @invitation.group.members
    render "api/invitations/show"
  end

  def create
    @invitation = Invitation.new(invitation_params)
    if @invitation.save
      render "api/invitations/show"
    else
      render json: ["Error happened while rendering invitations"], status: 422
    end
  end

  def destroy
    @invitation = Invitation.find(params[:id])
    if @invitation.destroy
      render "api/invitations/index"
    else
      render json: ["Error happened while deleting invitation"], status: 422
    end
  end

  def invitations_params
    params.require(:invitation).permit(:inviter_id, :invitee_id, :group_id)
  end
end
