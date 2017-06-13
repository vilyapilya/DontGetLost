export async function register (user) {
  return await fetch(
    'https://dontgetlost.herokuapp.com//api/users',
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
    'https://dontgetlost.herokuapp.com//api/session',
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
    'https://dontgetlost.herokuapp.com//api/session',
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
    `https://dontgetlost.herokuapp.com//api/users/${user.id}`,
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
