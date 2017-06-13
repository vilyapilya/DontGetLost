export const getGroup = (id) => (
  fetch(

    `https://dontgetlost.herokuapp.com/api/groups/${id}`,

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

    'https://dontgetlost.herokuapp.com/api/groups',

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
    'https://dontgetlost.herokuapp.com/api/groups',

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
    `https://dontgetlost.herokuapp.com/api/groups/${id}`,

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

    `https://dontgetlost.herokuapp.com/api/groups/${group.id}`,
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
