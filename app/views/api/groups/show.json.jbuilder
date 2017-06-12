json.id @group.id
json.creator_id @group.creator_id
json.group_name @group.group_name
json.members @group.members.map(&:username)
json.members_lat @group.members.map(&:latitude)
json.members_long @group.members.map(&:longitude)
