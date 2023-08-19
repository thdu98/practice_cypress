// Initialize a counter
let count = 0;

// Listen for a click event on a button
document.querySelector('button').addEventListener('click', () => {
    const numElement = document.querySelector('[data-testid="num"]');
    count += 1;

    setTimeout(() => {
        displayNumber(count);
    }, 1000);
});

function displayNumber(count) {
    const numElement = document.querySelector('[data-testid="num"]');
    numElement.textContent = count;
}

// Listen for a click event on an element with the id 'callButton'
document.getElementById('callButton').addEventListener('click', callAPI);

function callAPI() {
    fetch('https://hub.dummyapis.com/vj/ZHS8s7B')
        .then(response => {
            if (!response.ok) {
                throw new Error('API call failed');
            }
            return true; // Indicate success
        })
        .then(success => {
            if (success) {
                showErrorPopup('API call successful', false); // Show success message
            }
        })
        .catch(error => {
            console.error('Error while calling the API:', error);
            showErrorPopup('API call failed', true); // Show error message
        });
}

function hideErrorPopup() {
    const errorPopup = document.getElementById('errorPopup');
    errorPopup.classList.remove('active');
}

function showErrorPopup(errorMessage, isError = true) {
    const errorPopup = document.getElementById('errorPopup');
    const errorText = document.getElementById('errorText');
    const closeErrorButton = document.getElementById('closeErrorButton');

    errorText.textContent = errorMessage;

    // Determine the appropriate class based on the error type
    if (isError) {
        errorPopup.classList.add('error');
    } else {
        errorPopup.classList.add('success');
    }

    errorPopup.classList.add('active');

    closeErrorButton.addEventListener('click', hideErrorPopup);

    // Automatically hide the popup after 5 seconds
    setTimeout(() => {
        hideErrorPopup();
    }, 5000);
}
