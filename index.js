var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');

function auth(){

    var number = '+51' + document.querySelector('input').value;
  
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('Transferencia de texto exitosa');


        var code = prompt('Por favor ingrese su número de verificación', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log('Autenticación exitosa', result.user);

            document.querySelector('label').textContent += 'Verificado----> ' + result.user.phoneNumber;
            
        }).catch(function (error) {
            console.error('Autenticación fallida', error);
            
        });

    })
    .catch(function (error) {
        console.error('Transferencia de texto fallida', error);

    });
  
}
