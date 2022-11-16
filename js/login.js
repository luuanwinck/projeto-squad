

function onChangeEmail(){
    toggleButtonDisable()
    toggleEmailErrors()
    

}

function onChangePassword(){
    toggleButtonDisable()
    togglePasswordErros()
    

}




function isEmailValid(){
const email = form.email().value;
if(!email){
  return false;
}
return validateEmail(email);

}


function toggleEmailErrors(){
    const email = form.email().value
    form.emailrequired().style.display = email ? "none" : "block";
    form.emailinvalidrequired().style.display = validateEmail(email) ? "none" : "block"

 
}

function togglePasswordErros(){
    const  password = form.password().value
    form.passwordrequirid().style.display = password ? "none" : "block";
    
}

function toggleButtonDisable(){
    const emailValid = isEmailValid();
    form.recuperar().disabled = !emailValid;        


    const passwordValid = isPasswordValid()
    form.savebtn().disabled = !emailValid || !passwordValid ;

}

function isPasswordValid(){
  const password = form.password().value;
  if(!password){
    return false
  }
  return true
}




const form = {
    email: () => document.getElementById('address'),
    emailrequired: () => document.getElementById('email-required'),
    emailinvalidrequired: () => document.getElementById('email-invalid-required'),
    password: () => document.getElementById('complement'),
    passwordrequirid: () => document.getElementById('password-requirid'),
    recuperar: () => document.getElementById('senha'),
    savebtn: () => document.getElementById('save-btn')
}


function login(){
    
  firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response =>{
     window.location.href = "index.html"
  }).catch(error =>{
    alert(getErrorMessage(error))

  })
  

   
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found"  ){

        return "Usuário não encontrato"
    }
    return "Senha inválida"
}


function pagina(){
  window.location.href = "index.html"
}

function cadastrar(){
  
    window.location.href = "cadastro.html"
}


function recoverPassword() {
  
  firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
      
      alert("Email enviado com sucesso Verifique sua caixa de e-mail");
      
  }).catch(error => {
      
      alert(getErrorMessage(error));
  });
}







