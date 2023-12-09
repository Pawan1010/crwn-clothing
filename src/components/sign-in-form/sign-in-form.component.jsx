import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGoogle, signInWithGooglePopup} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'
import Button from "../buttons/button.component"
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    email: "",
    password: "",

}

const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const response = await signInAuthWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields();
        }catch(error) {
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    alert('Incorrect password for E-mail')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this Email')
                    break;
                default:
                    console.log(error)
                    break;
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }


    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email Id" type="email" required onChange={handleChange} name="email" value={email}></FormInput>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>
                <div className="button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm