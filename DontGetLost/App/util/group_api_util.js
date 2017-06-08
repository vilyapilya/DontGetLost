export const getGroup = id => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  })
);

export const getGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/groups'
  })
);

export const createGroup = (group) => (
  fetch(
    'http://10.0.2.2:3000/api/groups',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        group: group
      })
    }
  )
);


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
