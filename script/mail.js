emailjs.init("o3do87ssic4W5M7dw");

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_jnxjipr', 'template_1b6c6d4c', templateParams)
        .then(function(response){
            alert('Email enviado com sucesso!');    
        })
        .catch(function(error){
            alert('Ocorreu um erro ao enviar o email!');
        }); 
})