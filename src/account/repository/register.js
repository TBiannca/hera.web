export const register = user => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:5172/auth/register`, requestOptions)
        .then(handleResponse)
}


const handleResponse = response => {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        
        if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}