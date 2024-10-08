document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Dados do formulário
    const params = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Envia o email usando o template criado no EmailJS
    emailjs.send('apex', 'template_83jfkch', params)
        .then(function(response) {
            console.log('Sucesso!', response.status, response.text);
            document.getElementById('status').textContent = "Email enviado com sucesso!";
        }, function(error) {
            console.error('Erro ao enviar email:', error);
            document.getElementById('status').textContent = "Erro ao enviar email.";
        });
});