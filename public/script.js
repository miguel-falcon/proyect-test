document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');

    // Hacemos una solicitud al controlador PHP
    fetch('/controllers/UserController.php')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});