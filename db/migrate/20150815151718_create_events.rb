class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      title:string
      eventTime:datetime
      location:string
      current:integer
      max:integer
      creator:string
      description:text
      userid:integer
      eventid:integer
      
      t.timestamps null: false
    end
  end
end
