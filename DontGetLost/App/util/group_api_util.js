export const getGroup = (id) => (
  fetch(
    `http://10.0.2.2:3000/api/groups/${id}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);

export const getGroups = () => (
  fetch(
    'http://10.0.2.2:3000/api/groups',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
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
  ).then((response) => response.json())
);

export const deleteGroup = (id) => (
  fetch(
    `http://10.0.2.2:3000/api/groups/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);

export const updateGroup = (group) => (
  fetch(
    `http://10.0.2.2:3000/api/groups/${group.id}`,
    {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        group: group
      })
    }
  ).then((response) => response.json())
);
