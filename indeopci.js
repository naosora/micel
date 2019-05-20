var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
var recaptcha2 = new firebase.auth.RecaptchaVerifier('recaptcha-container');
var recaptcha3= new firebase.auth.RecaptchaVerifier('recaptcha-container');
var rep2 = new firebase.auth.RecaptchaVerifier('btnenviar', {
    'size': 'visible',
    'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    }
});
// var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//     'size': 'normal',
//     'callback': function(response) {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       // ...
//     },
//     'expired-callback': function() {
//       // Response expired. Ask user to solve reCAPTCHA again.
//       // ...
//     }
//   });
// recaptchaVerifier.render().then(function(widgetId) {
//     window.recaptchaWidgetId = widgetId;
//   });
//   var recaptchaResponse = grecaptcha.getResponse(window.recaptchaWidgetId);







//   recaptcha.render().then(function(widgetId) {
//     window.recaptchaWidgetId = widgetId;
//   });

















function auth() {

    var number = '+51' + document.querySelector('input').value;

    firebase.auth().signInWithPhoneNumber(number, rep2).then(function (e) {
        console.log('Transferencia de texto exitosa');


        var code = prompt('Por favor ingrese su número de verificación', '');


        if (code === null) return;


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



function enviocodigo2() {

 
    var number = '+51' + document.querySelector('input').value;
    // var phoneNumber = getPhoneNumberFromUserInput();
    // var appVerifier = window.recaptchaVerifier;
   // recaptcha.appVerificationDisabledForTesting=true;
  //  firebase.auth().settings.appVerificationDisabledForTesting = true;
    firebase.auth().signInWithPhoneNumber(number, recaptcha2)
        .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            var code = prompt('Por favor ingrese su número de verificación', '');
            confirmationResult.confirm(code).then(function (result) {
                console.log('Autenticación exitosa', result.user);

                document.querySelector('label').textContent += 'Verificado----> ' + result.user.phoneNumber;

            }).catch(function (error) {
                console.error('Autenticación fallida', error);

            });

        }).catch(function (error) {
            // Error; SMS not sent
            // ...
         
        });
}







function envph(){
    var number = '+51' + document.querySelector('input').value;
    // 'recaptcha-container' is the ID of an element in the DOM.
var applicationVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha-container');
var provider = new firebase.auth.PhoneAuthProvider();
provider.verifyPhoneNumber(number, applicationVerifier)
    .then(function(verificationId) {
      var verificationCode = window.prompt('Please enter the verification ' +
          'code that was sent to your mobile device.');
      return firebase.auth.PhoneAuthProvider.credential(verificationId,
          verificationCode);
    })
    .then(function(phoneCredential) {
      return firebase.auth().signInWithCredential(phoneCredential);
    });
}




function cerr() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}


//https://firebase.google.com/docs/reference/js/firebase.auth.ApplicationVerifier
function phoneprueb(){
    // 'recaptcha-container' is the ID of an element in the DOM.
var applicationVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha-container');
var provider = new firebase.auth.PhoneAuthProvider();
provider.verifyPhoneNumber('+16505550101', applicationVerifier)
    .then(function(verificationId) {
      var verificationCode = window.prompt('Please enter the verification ' +
          'code that was sent to your mobile device.');
      return firebase.auth.PhoneAuthProvider.credential(verificationId,
          verificationCode);
    })
    .then(function(phoneCredential) {
      return firebase.auth().signInWithCredential(phoneCredential);
    });
}













function autoph(code) {
    if (code === null) return;

    e.confirm(code).then(function (result) {
        console.log('Autenticación exitosa', result.user);

        document.querySelector('label').textContent += 'Verificado----> ' + result.user.phoneNumber;

    }).catch(function (error) {
        console.error('Autenticación fallida', error);

    });
}













function auth2(number, recaptcha) {



    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
        console.log('Transferencia de texto exitosa');


        var code = prompt('Por favor ingrese su número de verificación', '');


        if (code === null) return;


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
