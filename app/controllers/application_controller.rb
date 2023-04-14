class ApplicationController < ActionController::Base
  def index
    render status: 200, json: { status: :ok }
  end
end
