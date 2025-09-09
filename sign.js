function toggleForms() {
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.toggle('hidden');
    clearMessages();
  }

  function clearMessages() {
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('signupMessage').textContent = '';
  }

  function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const message = document.getElementById('loginMessage');

    if (!email || !password) {
      message.textContent = 'Please fill all fields.';
      return;
    }

    // Placeholder validation
    if (email === 'user@example.com' && password === '123456') {
      message.style.color = 'green';
      message.textContent = 'Login successful!';
      window.location.assign('index.html');
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid credentials.';
    }
  }

  function handleSignup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const message = document.getElementById('signupMessage');

    if (!name || !email || !password) {
      message.textContent = 'Please fill all fields.';
      return;
    }
  }