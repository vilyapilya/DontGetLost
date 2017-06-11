class Api::InvitationsController < ApplicationController
# before_action :require_logged_in!

  def index
    if params[:sent] == "sent"
      # @invitations = User.find(7).invitations_sent
      @invitations = current_user.invitations_sent
      render "api/invitations/index"
    elsif params[:sent] == "received"
      @invitations = User.find(1).invitations_received
      # @invitations = current_user.invitations_received
      render "api/invitations/index"
    else
      render json: ["Error finding invitations"]
    end
  end

  # def sentindex
  #   @invitations = current_user.invitations_sent
  #   # @invitations = Invitation.all
  #   render "api/invitations/index"
  # end
  #
  # def receivedindex
  #   @invitations = current_user.invitations_received
  #   render "api/invitations/index"
  # end

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

  # def sentdestroy
  #   @invitation = Invitation.find(params[:id])
  #   @invitations = current_user.invitations_sent
  #   if @invitation.destroy
  #     render "api/invitations/index"
  #   else
  #     render json: ["Error happened while deleting invitation"], status: 422
  #   end
  # end
  #
  # def receiveddestroy
  #   @invitation = Invitation.find(params[:id])
  #   @invitations = current_user.invitations_received
  #   if @invitation.destroy
  #     render "api/invitations/index"
  #   else
  #     render json: ["Error happened while deleting invitation"], status: 422
  #   end
  # end

  def invitations_params
    params.require(:invitation).permit(:inviter_id, :invitee_id, :group_id)
  end
end
