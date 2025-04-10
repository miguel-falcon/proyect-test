function cargarDatos(){
    // Function to fetch and display users
    const fetchAndDisplayUsers = async () => {
        const userList = document.getElementById('userList');

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

            // Iterate over the users and add them to the list
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.id} - ${user.userId} - ${user.title}`;
                userList.appendChild(li);
            });
        } catch (error) {
            // Log any errors to the console
            console.error('Error fetching users:', error);
        }
    };

    // Call the function to fetch and display users
    fetchAndDisplayUsers();
}