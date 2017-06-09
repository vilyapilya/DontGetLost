@invitations.each do |invitation|
  json.set! invitation.id do
    json.id invitation.id
    json.inviter_id invitation.inviter_id
    json.invitee_id invitation.invitee_id
    json.group_id invitation.group_id
  end
end
