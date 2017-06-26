class Api::SessionsController < ApplicationController
  def create
   @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combo"], status: 401
    end
  end

 def destroy
   @user = current_user
   if @user
     sign_out
     render json: {}
   else
     render json: ["Nobody signed in"], status: 404
   end
 end

 def verify_session_token
    @user = User.find_by(session_token: params[:session][:session_token])
    # debugger
    if @user
      # render json: 'Valid session token', status: 200
      render "api/users/show", status: 200
    else
      render json: 'Verification failed :(', status: 422
    end
  end

end
