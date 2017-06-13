export const createMembership = (groupMember) => (
  fetch(
<<<<<<< HEAD
    'https://dontgetlost.herokuapp.com/api/groupmembers',
=======
    'https://dontgetlost.herokuapp.com//api/groupmembers',
>>>>>>> 38f19a92fc59da2ce2d0f80ac300f0327e061c94
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        groupMember: groupMember
      })
    }
  ).then((response) => response.json())
);

export const deleteMembership = (id) => (
  fetch(
<<<<<<< HEAD
    `https://dontgetlost.herokuapp.com/api/groupmembers/${id}`,
=======
    `https://dontgetlost.herokuapp.com//api/groupmembers/${id}`,
>>>>>>> 38f19a92fc59da2ce2d0f80ac300f0327e061c94
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);
