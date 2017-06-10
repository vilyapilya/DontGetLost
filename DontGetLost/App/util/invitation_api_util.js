export const getMadeInvitations = () => (
  fetch(
    'http://10.0.2.2:3000/api/invitations?sent=sent',
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
    'http://10.0.2.2:3000/api/invitations?sent=received',
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
    `http://10.0.2.2:3000/api/invitations/${invitation.id}`,
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
    'http://10.0.2.2:3000/api/invitations',
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
    `http://10.0.2.2:3000/api/invitations/${invitation_id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        invitation_id: invitation_id,
      })
    }
  ).then((response) => response.json())
);

export const deleteReceivedInvitation = (invitation) => (
  fetch(
    `http://10.0.2.2:3000/api/invitations/${invitation.id}?sent=sent`,
    {
      method: 'DELETE',
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
