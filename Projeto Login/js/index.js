function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eyeSlash.style.display !== 'none') {
      //  ao clicar o botão do olhinho, minha senha se torna visível
      eye.style.display = 'block';
      eyeSlash.style.display = 'none';
      fieldPassword.type = 'text';
    } else {
      //se eu digitar a senha, ela não vai estar visível
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldPassword.type = 'password';
    }
};

// ao clicar o botão de login, ele vai aparecer uma caixa de alerta dizendo que está logado
document.getElementById('btn-login').addEventListener('click' , function(e){
    e.preventDefault();
    alert('logado');
})