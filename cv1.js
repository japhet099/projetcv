document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nom = urlParams.get('nom');
    const prenom = urlParams.get('prenom');
    const email = urlParams.get('email');
    const telephone = urlParams.get('telephone');
    const adresse = urlParams.get('adresse');
    const centresdinteret = urlParams.get('centresInteret');
    const formations = urlParams.get('formations');
    const competences = urlParams.get('competences');
    const experiencesProfessionnelles = urlParams.get('experiencesProfessionnelles');
    const francais = urlParams.get('francais');
    const anglais = urlParams.get('anglais');
    const photoUrl = urlParams.get('photo'); 
    document.addEventListener('DOMContentLoaded', function() {
        const photoFileInput = document.getElementById('photoFile');
        const photoElement = document.getElementById('photo');
    
        photoFileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                    const photoUrl = reader.result;
                    photoElement.src = photoUrl;
                }
            }
        });
    });
    

   
    document.getElementById('name').innerText = nom;
    document.getElementById('prenom').innerText = prenom;
    document.getElementById('email').innerText = email;
    document.getElementById('telephone').innerText = telephone;
    document.getElementById('adresse').innerText = adresse;
    document.getElementById('centres-interet').innerText = centresdinteret;

   
    document.getElementById('formations').innerText = formations;

    
    document.getElementById('competences').innerText = competences;

   
    document.getElementById('experiences-professionnelles').innerText = experiencesProfessionnelles;

    
    document.getElementById('francais').innerText = francais;
    document.getElementById('anglais').innerText = anglais;
});
