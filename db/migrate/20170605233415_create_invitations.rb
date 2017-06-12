class CreateInvitations < ActiveRecord::Migration[5.1]
  def change
    create_table :invitations do |t|
      t.integer :invitee_id, null: false
      t.integer :inviter_id, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
  end
end
