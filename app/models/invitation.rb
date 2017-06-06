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

  belongs_to :group,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: :Group

  belongs_to :invitee,
  primary_key: :id,
  foreign_key: :invitee_id,
  class_name: :User

  belongs_to :inviter, :class_name => "User"

end
