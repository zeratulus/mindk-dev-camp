import { createContext } from 'react';

const UserContext = createContext({
    isLogged: false,
    data: {
        id: '',
        firstName: 'Guest',
        lastName: '',
        email: '',
        phone: '',
    }
});
export default UserContext;