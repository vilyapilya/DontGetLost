class Invitation < ActiveRecord::Base
  validates :inviter_id, :invited_id, :group_id, presence: true

  belongs_to :group_id
  belongs_to :invited_id, :class_name => "User"
  belongs_to :inviter_id, :class_name => "User"

end
