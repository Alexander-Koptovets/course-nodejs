export const generateHash = (length) => {
    const validCharacters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
    }

    return result;
};