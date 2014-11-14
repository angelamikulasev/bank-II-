class SessionsController < ApplicationController

	def new

	end

	def create
		user = User.authenticate params[:session][:username], params[:session][:password]

		if user.present?
			session[:user_id] = user.id
			redirect_to root_path, notice: 'You have successfully logged in'
		else 
			render :new
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to root_path, notice: 'You have successfully logged out'
	end

end