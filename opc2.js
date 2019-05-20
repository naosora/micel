

function enviocodigo() {

    var number = '+51' + document.querySelector('input').value;
    // var phoneNumber = getPhoneNumberFromUserInput();
    // var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
        .then(function (confirmationResult) {
            var code = prompt('Por favor ingrese su número de verificación', '');
            if (code === null) return;

            e.confirm(code).then(function (result) {
                console.log('Autenticación exitosa', result.user);

                document.querySelector('label').textContent += 'Verificado----> ' + result.user.phoneNumber;

            }).catch(function (error) {
                console.error('Autenticación fallida', error);

            });

            confirmationResult.confirm(code).

                window.confirmationResult = confirmationResult;
        }).catch(function (error) {
            // Error; SMS not sent
            // ...
        });
}










function enviocodigo2() {

    var number = '+51' + document.querySelector('input').value;
    // var phoneNumber = getPhoneNumberFromUserInput();
    // var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
        .then(function (confirmationResult) {
            auth2(number,recaptcha);


            window.confirmationResult = confirmationResult;
        }).catch(function (error) {
            // Error; SMS not sent
            // ...
        });
}



function auth2(number,recaptcha) {

  

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









function enviocodigo3() {

    var number = '+51' + document.querySelector('input').value;
    // var phoneNumber = getPhoneNumberFromUserInput();
    // var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
        .then(function (confirmationResult) {
            var code = prompt('Por favor ingrese su número de verificación', '');


            if (code === null) return;
    
    
            e.confirm(code).then(function (result) {
                console.log('Autenticación exitosa', result.user);
    
                document.querySelector('label').textContent += 'Verificado----> ' + result.user.phoneNumber;
    
            }).catch(function (error) {
                console.error('Autenticación fallida', error);
    
            });
        }).catch(function (error) {
         
                console.error('Transferencia de texto fallida', error);
    
            
    
        });
}



function enviocodigo5() {

    var number = '+51' + document.querySelector('input').value;
    // var phoneNumber = getPhoneNumberFromUserInput();
    // var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
        .then(function (confirmationResult) {
           
            var code = prompt('Por favor ingrese su número de verificación', '');


            if (code === null) return;
    
    
            e.confirm(code).then(function (result) {
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
