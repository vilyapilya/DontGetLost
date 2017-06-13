export const joinGroup = (group_id) => (
  fetch(
    'https://dontgetlost.herokuapp.com//api/groupmembers',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        group_id: group_id
      })
    }
  ).then((response) => response.json())
);

export const leaveGroup = (membership_id) => (
  fetch(
    `https://dontgetlost.herokuapp.com//api/groupmembers/${membership_id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);
