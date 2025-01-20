document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Olá! Meu nome é ${name}. Meu e-mail é ${email}.  ${message}`;

    const phoneNumber = "5541997047530";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    
    window.open(whatsappLink, '_blank');
});
