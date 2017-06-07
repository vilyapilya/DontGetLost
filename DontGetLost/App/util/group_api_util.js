export const getGroup = id => (
  $.ajax({
    method: 'GET',
    url: `api/groups`
  })
);

export const getGroups = groups => (
  $.ajax({
    method: 'GET',
    url: 'api/groups',
    data: groups
  })
);

export const createGroup = group => {
  return $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: group,
  });
};


export const deleteGroup = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}`
  })
);

export const updateGroup = group => {
  return $.ajax({
    method: 'PATCH',
    url: `api/groups/${group.id}`,
    data: group
  });
};
