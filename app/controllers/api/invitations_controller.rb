class Api::InvitationsController < ApplicationController

  def create
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
    params.require(:invitations).permit(:inviter_id, :invited_id, :group_id)
  end
end
