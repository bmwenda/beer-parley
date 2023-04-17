class ApplicationController < ActionController::Base
  include Authorization
  skip_before_action :verify_authenticity_token
end
