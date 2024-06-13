import {ButtonContainer, GoogleSignIn, Inverted} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'

}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    
    {
        [BUTTON_TYPE_CLASSES.base]: ButtonContainer,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
        [BUTTON_TYPE_CLASSES.inverted]: Inverted,
    }[buttonType]
    );


const Button = ({children, buttonType, ...otherrProps}) =>{
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherrProps}>{children}</CustomButton>
    )
}

export default Button