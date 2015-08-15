class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      username:string
      first:string
      last:string
      password:string
      id:integer
      isadmin:boolean
      email:string
      phone:string

      t.timestamps null: false
    end
  end
end
