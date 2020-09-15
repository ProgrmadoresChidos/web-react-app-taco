export const saveUser = (user, save) => {
    removeUser();
    if (!!user && !save) {
        sessionStorage.setItem('user', JSON.stringify(user));
    } else if (!!user && save) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getUser = () => {
    if (localStorage.getItem('user')) {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null;
    } else if (sessionStorage.getItem('user')) {
        const user = sessionStorage.getItem('user')
        return user ? JSON.parse(user) : null;
    }
    return null;
}

export const removeUser = () => {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
}