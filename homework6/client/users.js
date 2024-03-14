import { createUserRequest } from "./api.js";

const updateUserList = (user) => {
    const usersList = document.getElementById('users-list');
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', `/urls/${user.name}`);
    anchor.textContent = user.name;
    li.appendChild(anchor);
    usersList.appendChild(li);
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            password: document.getElementById('password').value,
        };

        createUserRequest(data)
            .then(response => response.json())
            .then(({ data }) => updateUserList(data))
            .catch((e) => console.error(e.message));
    });
});
