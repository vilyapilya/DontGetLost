export const createMembership = (groupMember) => (
  fetch(
    'http://localhost:3000///api/groupmembers',
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
    `http://localhost:3000///api/groupmembers/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);
