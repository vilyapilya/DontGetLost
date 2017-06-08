export const getUser = () => (
  fetch(
    // 'http://localhost:3000/api/users',
    // 'http://192.168.3.43:3000/api/users',
    'http://10.0.2.2:3000/api/users',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
);

export const register = (user) => (
  fetch(
    // 'http://localhost:3000/api/users',
    'http://192.168.3.43.3000/api/users',
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

export const login = (user) => (
  fetch(
    'http://localhost:3000/api/session',
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
    'http://localhost:3000/api/session',
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
);
