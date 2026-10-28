


import { useState } from "react";

function PasswordGenerator() {


    const [password, setpassword] = useState("")
    const [passwordLength, setpasswordLength] = useState(8)
    const [checked, setChecked] = useState(true)
    const [SpatialChar, setSpatialChar] = useState(true)
    const [CaptalLetters, setCaptalLetters] = useState(true)

    const allChacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=<>"
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
    const characterWithoutNumbers = "abcdefghijklmnopqrstuvwxyz"
    const withoutSymbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const withoutUppercase = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{}"

    function handleIncludeCaptal(event) {
        setCaptalLetters(c => c = event.target.checked)
    }

    function handleInlcudeSptail(event) {
        setSpatialChar(s => s = event.target.checked)
    }

    function handleChecked(event) {
        setChecked(c => c = event.target.checked)
    }

    function handlGenratPassword() {

        if (checked && SpatialChar && CaptalLetters) {
            setpassword(p => {
                p = ''

                for (let i = 0; i < passwordLength; i++) {
                    const randomNumber = Math.floor(Math.random() * (allChacters.length - 0 + 1) + 0)
                    p = p + allChacters[randomNumber]

                }
                return p
            })

        } else if (checked && SpatialChar) {

            setpassword(p => {
                p = ''

                for (let i = 0; i < passwordLength; i++) {
                    const randomNumber = Math.floor(Math.random() * (withoutUppercase.length - 0 + 1) + 0)
                    p = p + withoutUppercase[randomNumber]

                }
                return p
            })
        } else if (checked && CaptalLetters) {

            setpassword(p => {
                p = ''

                for (let i = 0; i < passwordLength; i++) {
                    const randomNumber = Math.floor(Math.random() * (withoutSymbols.length - 0 + 1) + 0)
                    p = p + withoutSymbols[randomNumber]

                }
                return p
            })
        } else {

            setpassword(p => {
                p = ''

                for (let i = 0; i < passwordLength; i++) {
                    const randomNumber = Math.floor(Math.random() * (characterWithoutNumbers.length - 0 + 1) + 0)
                    p = p + characterWithoutNumbers[randomNumber]

                }
                return p
            })
        }

    }

    

    function handlePasswordLength(event) {
        setpasswordLength(password => password = event.target.value)
    }

    function handleCopyPassword(){
        navigator.clipboard.writeText(password)
        .then ( alert("Password copied"))
        .catch(console.log("fuck"))
       
    }

    return (<>
        <h1>Password Generator</h1>
        <button onClick={handlGenratPassword}>Generate Password</button>
        <input type="number" name="passLength" id="" min={8} value={passwordLength} onChange={handlePasswordLength} />
        <input type="checkbox" name="checkBoxs" id="checkBox" checked={checked} onChange={handleChecked} />
        <label htmlFor="checkBox"> inc Number</label>

        <input type="checkbox" name="checkBoxs" id="checkBoxS" checked={SpatialChar} onChange={handleInlcudeSptail} />
        <label htmlFor="checkBoxS"> inc SpatialChar</label>

        <input type="checkbox" name="checkBoxs" id="checkBoxC" checked={CaptalLetters} onChange={handleIncludeCaptal} />
        <label htmlFor="checkBoxC"> inc Captial</label>
        <ul>
            <li>Generated Password:{password}</li>
            <button onClick={handleCopyPassword}>Copy</button>
        </ul>
    </>)
}

export default PasswordGenerator