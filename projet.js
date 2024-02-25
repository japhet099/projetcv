document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);

      function isValidEmail(email) {
         
          return true; 
      }

      if (isValidEmail(email)) {
          
          const storedEmail = localStorage.getItem('userEmail');
          const storedPassword = localStorage.getItem('userPassword');

          if (email === storedEmail && password === storedPassword) {
            
              window.location.href = 'http://127.0.0.1:5500/cv2.html';
          } else {
              
              alert('Identifiants incorrects. Veuillez réessayer.');
          }
      } else {
          alert('Veuillez saisir une adresse e-mail valide.');
      }
  });
});
