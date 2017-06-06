# == Schema Information
#
# Table name: invitations
#
#  id         :integer          not null, primary key
#  inviter_id :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Invitation < ActiveRecord::Base
  validates :inviter_id, :invitee_id, :group_id, presence: true

  belongs_to :group_id
  belongs_to :invitee_id, :class_name => "User"
  belongs_to :inviter_id, :class_name => "User"

end
