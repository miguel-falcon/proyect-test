function cargarDatos() {
    const fetchAndDisplayCountries = async () => {
        const userList = document.getElementById('countriesList');
        const userIdValue = document.getElementById('nameCountries').value.toLowerCase();

        if (!userList) {
            console.error('Error: Element  not found.');
            return;
        }

        try {
            // Fetch data from the Rest Countries API
            const response = await fetch('controllers/UserController.php');

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const countries = await response.json();

            // Clear the list before appending new items
            userList.innerHTML = '';

            // Filter countries based on the userIdValue (match country name or common name)
            const filteredCountries = countries.filter(country =>
                country.name.common.toLowerCase().includes(userIdValue)
            );

            // Check if there are any matches
            if (filteredCountries.length > 0) {
                // Iterate over the filtered countries and add them to the list
                filteredCountries.forEach(country => {
                    const li = document.createElement('li');
                    li.textContent = `${country.name.common} - Population: ${country.population}`;
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
            console.error('Error fetching countries:', error);
        }
    };

    // Call the function to fetch and display countries
    fetchAndDisplayCountries();
}