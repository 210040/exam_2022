function login () {
    console.log('Login!!!')
    var emailElements = document.getElementByName('email')
    var passwordElements = document.getElementByName('password')

    // console.log(emailElement[0])
    // console.log(passwordElement[0])

    var email = emailElements[0].value
    var password = passwordElements[0].value

    console.log(email, password)

    var error_email = ""
    var error_password = ""
    
    if (!email) error_email = "Emailを入力してください"
    if (!password) error_password = "パスワードを入力してください"

    document.getElementById("message_email").innerHTML = error_email
    document.getElementById("message_password").innerHTML = error_password

    return false
}