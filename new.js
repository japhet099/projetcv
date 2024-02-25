document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Ici, tu peux traiter les valeurs de l'e-mail et du mot de passe, comme les envoyer à un serveur pour vérification
    
    console.log('Adresse e-mail : ' + email);
    console.log('Mot de passe : ' + password);
    window.location.href = "https://127.0.0.1:5500/cv2.html"
    // Stocker la valeur de l'e-mail dans localStorage
localStorage.setItem('emailValue', email);

// Stocker la valeur du mot de passe dans localStorage
localStorage.setItem('passwordValue', password);

  });
 
  