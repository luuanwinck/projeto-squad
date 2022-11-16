firebase.auth().onAuthStateChanged(user =>{
    if (user){
      window.location.href = "cadastro.html";
    }
  })


 



// function cadastrar(){
//     window.location.href = "api.html"
// }


// function onChangeEmail(){
//     toggleButtonDisable()
//     toggleEmailErrors()
    

// }

// function onChangePassword(){
//     toggleButtonDisable()
//     togglePasswordErros()
    

// }




// function isEmailValid(){
// const email = form.email().value;
// const email2 = form.email2().value;
// if(!email ){
//   return false;
// }
// return true

// }






// function toggleButtonDisable(){
//     const emailValid = isEmailValid();
//     form.savebtn().disabled = !emailValid;        


  

// }






// const form = {
//     email: () => document.getElementById('email'),
//     email2: () => document.getElementById('email2'),
//     savebtn: () => document.getElementById('save-btn'),
// }




// function cadastrar(){
//     window.location.href = "api.html"
// }


