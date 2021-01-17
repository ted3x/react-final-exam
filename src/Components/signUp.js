import React, { useState } from 'react';

var firstNumber = getRandomInt(5);
var secondNumber = getRandomInt(10);
var randomCaptcha = `${firstNumber}+${secondNumber}`
var answerCaptcha = firstNumber+secondNumber

export const SignUp = (props) => {
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState(null)
    const [passwordError, setPasswordError] = useState(false);
    const [captcha, setCaptcha] = useState(null)
    const [captchaError, setCaptchaError] = useState(false);
    React.useEffect(() => {
        
        if (email != null){
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if(email.match(emailRegex)) 
                setEmailError(false);
             else 
                setEmailError(true);
        }
        
        if (password != null){
            var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if(password.match(passwordRegex)) 
                setPasswordError(false);
             else 
                setPasswordError(true);
        } 
        
        if(captcha != null){
            if(captcha != answerCaptcha) setCaptchaError(true)
            else setCaptchaError(false)
        }
    }, [email, password, captcha])

    const signUp = () =>{
        if(captchaError == true || captcha == null) alert("Captcha is wrong!")
        else if(passwordError == true) alert("Password format is wrong!")
        else if(emailError == true) alert("Email format is wrong!")
        else alert("თქვენ წარმატებით დარეგისტრირდით!")
    }

    return <div>
        <h1>Sign Up</h1>
        <div>
            {
                (emailError === true) ?
                    <span style={{ color: 'red' }} >Mail is invalid! format: user@mail.com<br /></span>
                    : ''
            }
            <label for="email">Email: </label>
            <input
                value={email}
                style={
                    { backgroundColor: emailError ? 'red' : 'green' }
                }
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                type="text"
                name="email" />
        </div>

        <div>
            {
                (passwordError === true) ?
                    <span style={{ color: 'red' }} >Password is invalid! Password must contain at least 1 uppercase letter and 1 number, minimum length 8 symbols.<br /></span>
                    : ''
            }
            <label for="password">Password: </label>
            <input
                value={password}
                style={
                    { backgroundColor: passwordError ? 'red' : 'green' }
                }
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type="password"
                name="password" />
        </div>

        <div>
            <label for="captcha">{randomCaptcha}: </label>
            <input
                value={captcha}
                onChange={(e) => {
                    setCaptcha(e.target.value);
                }}
                type="text"
                name="captcha" />
        </div>
        <input type="button" value="Sign up" onClick={signUp}></input>
    </div>
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }