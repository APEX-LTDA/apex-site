// Função para mostrar a mensagem de erro
function mostrarMensagemErro() {
    Swal.fire({
      icon: "error",
      title: "Erro ao enviar email",
      text: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente.",
      footer: '<a href="#">Verifique seus dados e tente novamente.</a>'
    });
  }
  
  // Event Listener para o formulário de contato
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
              mostrarMensagemSucesso();
              document.getElementById('status').textContent = "Email enviado com sucesso!";
          }, function(error) {
              console.error('Erro ao enviar email:', error);
              mostrarMensagemErro();
              document.getElementById('status').textContent = "Erro ao enviar email.";
          });
  });
  
  // Função para mostrar a mensagem de sucesso
  function mostrarMensagemSucesso() {
    Swal.fire({
      icon: "success",
      title: "Sua mensagem foi enviada com sucesso!",
      showConfirmButton: false,
      
    });
  }
  