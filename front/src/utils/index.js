function getUserFromStorage() {
    let loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser) {
        return JSON.parse(loggedInUser);
    } else {
        return {
            isLogged: false,
            data: {
                id: '',
                firstName: 'Guest',
                lastName: '',
                email: '',
                phone: '',
            }
        }
    }
}

export {
    getUserFromStorage
}