const API = process.env.VUE_APP_API;

export const loginRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication failed');
                }
            })
            .then((result) => {
                resolve(result.data.user_token);
            })
            .catch((error) => {
                reject(error.message);
            });
    });
}

export const signupRequest = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Registration failed');
                }
            })
            .then((result) => {
                resolve(result.data.user_token);
            })
            .catch((error) => {
                reject(error.message);
            });
    });
}

export const logoutRequest = () => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then((response) => {
                if (response.ok) {
                    localStorage.removeItem('myAppToken')
                    resolve('Logout Successful')
                    return response.json();
                }
            })
            .catch((error) => {
                reject(error.message);
            });
    })
}

export const getProductsRequest = () => {
    return new Promise((resolve, reject) => {
        fetch(`${API}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('myAppToken')}`
            },
        })
            .then(response => response.json())
            .then(result => resolve('SET_PRODUCTS', result.data))
            .catch(error => {
                resolve('AUTH_ERROR', '')
                reject(error.message)
            })
    })
}