class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :group_name, null: false
      t.integer :creator_id, null: false
      t.timestamps null: false
    end
  end
end
