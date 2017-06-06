class Api::InvitationsController < ApplicationController

  def create
    debugger;
    @invitation = Invitation.create(invitation_params)
    if @invitation.safe
      render "api/invitaions"
    else
      render json: ["Error happened while rendering invitations"], status: 422
    end
  end

  def destroy
    @invitation = Invitation.find(params[:id])
    if @invitation.destroy
      render "api/invitaions"
    else
      render json: ["Error happened while deleting invitation"], status: 422
    end
  end

  def invitations_params
    params.require(:invitations).permit(:inviter_id, :invitee_id, :group_id)
  end
end

Invitation.create({inviter_id: 1, invitee_id: 2, group_id: 1})
