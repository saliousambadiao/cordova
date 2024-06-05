document.addEventListener('DOMContentLoaded', (event) => {
    function ajouterTache() {
        console.log('ajouterTache called');
        const ajoutDiv = document.getElementById('ajoutTache');
        ajoutDiv.innerHTML = ''; // Clear any existing content

        // Create input element
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Entrez le nom de la tache';
        input.id = 'nouvelleTacheInput';
        ajoutDiv.appendChild(input);

        // Add event listener to input
        input.addEventListener('input', function() {
            handleInputChange(input, ajoutDiv);
        });
    }

    function handleInputChange(input, ajoutDiv) {
        const addButton = document.getElementById('addButton');
        if (input.value.trim() !== '') {
            if (!addButton) {
                // Create button element
                const button = document.createElement('button');
                button.textContent = 'Ajouter';
                button.id = 'addButton';
                ajoutDiv.appendChild(button);

                // Add event listener to button
                button.addEventListener('click', function() {
                    ajouterTacheALaListe(input.value.trim(), ajoutDiv);
                });
            }
        } else {
            if (addButton) {
                ajoutDiv.removeChild(addButton);
            }
        }
    }

    function ajouterTacheALaListe(tacheName, ajoutDiv) {
        if (tacheName !== '') {
            const tacheList = document.getElementById('tacheList');
            const listItem = document.createElement('li');
            listItem.textContent = tacheName;
            listItem.className = 'tacheItem';
            tacheList.appendChild(listItem);

            // Clear input and button
            document.getElementById('nouvelleTacheInput').value = '';
            ajoutDiv.innerHTML = '';

            // Add swipe event listeners
            $(listItem).on("swipeleft", function() {
                moveToCompleted(this);
            });

            $(listItem).on("swiperight", function() {
                removeTask(this);
            });
        }
    }

    function moveToCompleted(taskItem) {
        const completedList = document.getElementById('completedTacheList');
        completedList.appendChild(taskItem);
        $(taskItem).off("swiperight swipeleft");
    }

    function removeTask(taskItem) {
        taskItem.remove();
    }

    // Expose functions to the global scope
    window.ajouterTache = ajouterTache;
    window.handleInputChange = handleInputChange;
    window.ajouterTacheALaListe = ajouterTacheALaListe;
});
