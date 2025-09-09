
const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      clearBtn.style.display = 'none';
    });

    searchInput.addEventListener('input', () => {
      clearBtn.style.display = searchInput.value ? 'block' : 'none';
    });

    function goToUserPage() {
        // Redirect to user profile or account page
        window.location.href = "user.html"; // Change to your actual URL
      }

      