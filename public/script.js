function cargarDatos() {
    const fetchAndDisplayUsers = async () => {
        const userList = document.getElementById('userList');
        const userIdValue = document.getElementById('userId').value;

        // Check if the userList element exists
        if (!userList) {
            console.error('Error: Element with ID "userList" not found.');
            return;
        }

        try {
            // Fetch data from the PHP controller
            const response = await fetch('controllers/UserController.php');

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const users = await response.json();

            // Clear the list before appending new items
            userList.innerHTML = '';

            // Filter users based on the userIdValue
            const filteredUsers = users.filter(user => user.userId == userIdValue);

            // Check if there are any matches
            if (filteredUsers.length > 0) {
                // Iterate over the filtered users and add them to the list
                filteredUsers.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `${user.id} - ${user.userId} - ${user.title}`;
                    li.className = 'list-group-item'; // Optional: Add Bootstrap styling
                    userList.appendChild(li);
                });
            } else {
                // Show a message if no matches are found
                const li = document.createElement('li');
                li.textContent = 'No hay coincidencias';
                li.className = 'list-group-item text-danger'; // Optional: Add Bootstrap styling
                userList.appendChild(li);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Call the function to fetch and display users
    fetchAndDisplayUsers();
}