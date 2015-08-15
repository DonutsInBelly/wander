class EventController < ApplicationController
  def new
  end

  def create
    render plain: params[:event].inspect
  end
end
