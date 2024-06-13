import { useState, } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGoogle, signInWithGooglePopup} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import { ButtonContainer, SignInContainer } from'./sign-in-form.styles'
import Button, {BUTTON_TYPE_CLASSES} from "../buttons/button.component"
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
        await signInWithGooglePopup();
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password)

            resetFormFields();
            
        }catch(error) {
            console.log(error)
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    alert('Incorrect password for E-mail')
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
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email Id" type="email" required onChange={handleChange} name="email" value={email}></FormInput>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>
                <ButtonContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.google}>Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm