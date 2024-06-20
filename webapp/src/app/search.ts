async function fetchData() {
    const response = await fetch('http://127.0.0.1:5000/searchPage');
    const data = await response.json();
    console.log(data);
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.innerText = data.message;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
