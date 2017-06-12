class Api::InvitationsController < ApplicationController
before_action :require_logged_in!

  def index
    if params[:sent] == "sent"
      # @invitations = User.find(7).invitations_sent
      @invitations = current_user.invitations_sent
      render "api/invitations/index"
    elsif params[:sent] == "received"
      # @invitations = User.find(1).invitations_received
      @invitations = current_user.invitations_received
      render "api/invitations/index"
    else
      render json: ["Error finding invitations"]
    end
  end

  def show
    @invitation = Invitation.find(params[:id])
    @members = @invitation.group.members
    render "api/invitations/show"
  end

  def create
    @invitation = Invitation.new()
    @invitation.group_id = invitations_params[:group_id]
    @invitation.inviter_id = current_user.id
    @invitation.invitee_id = User.find_by(username: invitations_params[:invitee_username]).id

    if @invitation.save
      @group = Group.find(invitations_params[:group_id])
      render "api/groups/show"
    else
      render json: ["Error happened while rendering invitations"], status: 422
    end
  end

  def destroy
    @invitation = Invitation.find(params[:id])
    if @invitation.destroy
      if params[:sent] == "sent"
        # @invitations = User.find(7).invitations_sent
        @invitations = current_user.invitations_sent
        render "api/invitations/index"
      elsif params[:sent] == "received"
        @invitations = User.find(1).invitations_received
        # @invitations = current_user.invitations_received
        render "api/invitations/index"
      end
    else
      render json: ["Error happened while deleting invitation"], status: 422
    end
  end

  def invitations_params
    params.require(:invitation).permit(:inviter_id, :invitee_id, :group_id, :invitee_username)
  end
end
