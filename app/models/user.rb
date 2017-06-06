# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :username, uniqueness: true

  attr_reader :password
  after_initialize :guarantee_session_token

  # has_many :invitations_sent,
  #   class_name: :Invitation,
  #   primary_key: :id,
  #   foreign_key: :inviter_id
  #
  # has_many :invitees,
  #   through: :invitations_sent,
  #   source: :invitee_id
  #
  # has_many :invitations_received,
  #   class_name: :Invitation,
  #   primary_key: :id,
  #   foreign_key: :invitee_id
  #
  # has_many :inviters,
  #   through: :invitations_received,
  #   source: :inviter_id

  has_many :created_groups,
    class_name: :Group,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :memberships,
    class_name: :GroupMember,
    primary_key: :id,
    foreign_key: :user_id

  has_many :groups,
    source: :memberships,
    through: :group


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_token
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def guarantee_session_token
    self.session_token ||= generate_session_token
  end

end
