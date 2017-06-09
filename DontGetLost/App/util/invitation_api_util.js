export const getMadeInvitations = (sent) => (
  fetch(
    'http://10.0.2.2:3000/api/invitations',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sent: sent
      })
    }
  ).then((response) => response.json())
);

export const getReceivedInvitations = (sent) => (
  fetch(
    'http://10.0.2.2:3000/api/invitations',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sent: sent
      })
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

export const deleteSentInvitation = (invitation) => (
  fetch(
    `http://10.0.2.2:3000/api/invitations/${invitation.id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        invitation: invitation,
        sent: sent
      })
    }
  ).then((response) => response.json())
);

export const deleteReceivedInvitation = (invitation, sent) => (
  fetch(
    `http://10.0.2.2:3000/api/invitations/${invitation.id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        invitation: invitation,
        sent: sent
      })
    }
  ).then((response) => response.json())
);
