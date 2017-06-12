json.set! @invitation.id do
  json.inviter @invitation.inviter.username
  # json.group_name @invitation.invitee.group.name
  json.members @members do |member|
    json.username member.username
  end
end
