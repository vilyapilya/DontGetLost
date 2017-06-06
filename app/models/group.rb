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
    class_name: :Group_Member,
    primary_key: :id,
    foreign_key: :group_id
end
