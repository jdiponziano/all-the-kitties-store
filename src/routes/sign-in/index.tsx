import { signInWithGooglePopup, createUser } from "utils/firebase";
import SignUpForm from "components/sign-up-form";
import Button from "components/button";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUser(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <Button variant="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
