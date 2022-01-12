import { createContext } from 'react';

const UserContext = createContext({
    isLogged: false,
    currentComponent: 'add_post',
    firstName: 'Guest',
    lastName: '',
    email: '',
});
export default UserContext;