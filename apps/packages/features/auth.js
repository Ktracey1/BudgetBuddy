fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'testuser',
        password: 'test123',
        expiresInMins: 60,
    }),
    credentials: 'include' // Include cookies (e.g., accessToken) in the request
})
    .then(res => res.json())
    .then(console.log);