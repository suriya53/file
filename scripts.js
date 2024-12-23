// Login form validation
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "password") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password.";
    }
}

// Handle funds transfer
function handleTransfer(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;

    if (accountNumber && amount > 0) {
        document.getElementById('transfer-message').textContent = `Successfully transferred $${amount} to account ${accountNumber}.`;
    } else {
        document.getElementById('transfer-message').textContent = "Please enter valid information.";
    }
}
