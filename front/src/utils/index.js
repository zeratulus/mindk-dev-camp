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

//Friends visibility predefined list

const PV_PUBLIC = {
    id: '123e023c-852e-4346-8809-4f9fad733820',
    title: 'Public'
}
const PV_FRIENDS = {
    id: '4be2daa3-cb16-422b-a37a-327c7b447370',
    title: 'Friends'
}
const PV_PRIVATE = {
    id: 'd2f5a7c3-82c9-4459-8550-fb3de28dbc41',
    title: 'Private'
}

function getVisibilityList() {
    return [PV_PUBLIC, PV_FRIENDS, PV_PRIVATE]
}

export {
    getUserFromStorage,
    getVisibilityList,
    PV_PUBLIC,
    PV_FRIENDS,
    PV_PRIVATE,
}