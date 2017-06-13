export const getMadeInvitations = () => (
  fetch(
    'http://localhost:3000///api/invitations?sent=sent',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  // ).then(response => console.log(response.json()))
  ).then((response) => response.json())
);

export const getReceivedInvitations = () => (
  fetch(
    'http://localhost:3000///api/invitations?sent=received',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);

export const showInvitation = (invitation) => (
  fetch(
    `http://localhost:3000///api/invitations/${invitation.id}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);

export const makeInvitation = (invitation) => (
  fetch(
    'http://localhost:3000///api/invitations',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        invitation: invitation
      })
    }
  ).then((response) => response.json())
);

export const deleteSentInvitation = (invitation_id) => (
  fetch(
    `http://localhost:3000///api/invitations/${invitation_id}?sent=sent`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json())
);

export const deleteReceivedInvitation = (invitation_id) => (
  fetch(
    `http://localhost:3000///api/invitations/${invitation_id}?sent=received`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  // ).then(response => console.log(response.json()))
  ).then((response) => response.json())
);
