class Event < ActiveRecord::Base
  attr_accessible :title, :eventTime, :location, :current, :max, :creator, :description, :userid, :eventid

end
