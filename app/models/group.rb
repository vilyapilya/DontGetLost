# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  group_name :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ActiveRecord::Base
  validates :creator, presence: true

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :invitations,
    class_name: :Invitation,
    primary_key: :id,
    foreign_key: :group_id

  has_many :members,
    class_name: :GroupMember,
    primary_key: :id,
    foreign_key: :group_id
end
