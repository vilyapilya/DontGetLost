export async function register (user) {
  return await fetch(
<<<<<<< HEAD
    'https://dontgetlost.herokuapp.com/api/users',
=======
    'https://dontgetlost.herokuapp.com//api/users',
>>>>>>> 38f19a92fc59da2ce2d0f80ac300f0327e061c94
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
<<<<<<< HEAD
    'https://dontgetlost.herokuapp.com/api/session',
=======
    'https://dontgetlost.herokuapp.com//api/session',
>>>>>>> 38f19a92fc59da2ce2d0f80ac300f0327e061c94
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
<<<<<<< HEAD
    'https://dontgetlost.herokuapp.com/api/session',
=======
    'https://dontgetlost.herokuapp.com//api/session',
>>>>>>> 38f19a92fc59da2ce2d0f80ac300f0327e061c94
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
