class User < ActiveRecord::Base
  attr_accessible :username, :first, :last, :password, :id, :isadmin, :email, :phone
  
end
