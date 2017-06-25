export async function register (user) {
  return await fetch(
    'http://10.0.2.2:3000/api/users',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    }
  )
};

export const login = (user) => (
  fetch(
    'http://10.0.2.2:3000/api/session',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    }
  )
);

export const logout = () => (
  fetch(
    'http://10.0.2.2:3000/api/session',
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
);

export const updateUser = (user) => (
  fetch(
    `http://10.0.2.2:3000/api/users/${user.id}`,
    {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    }
  )
)
