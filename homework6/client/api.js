export const createUserRequest = async (data) => {
    return await fetch('/users/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
};

export const addUrlRequest = async (data) => {
    return await fetch('/urls/add', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
};