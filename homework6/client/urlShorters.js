import { addUrlRequest } from "./api.js";

const updateUrlList = (data) => {
    const urlList = document.getElementById('url-list');
    const li = document.createElement('li');
    li.textContent = `${data.url}: ${data.code}`;
    urlList.appendChild(li);
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            url: document.getElementById('url').value,
        };

        addUrlRequest(data)
            .then(response => response.json())
            .then(({ data }) => updateUrlList(data))
            .catch(e => console.error(e.message));
    });
});
