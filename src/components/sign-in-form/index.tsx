import { FormEvent, useState, ChangeEvent } from "react";
import { Input } from "components/form-elements";
import Button from "components/button";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "utils/firebase";
import "./styles.scss";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      // TO DO: Add error handling messages on page
      console.error("Google sign in encountered an error", error);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      // TO DO: Add error & success handling messages on page
      if (error instanceof Error) {
        const errorCode = (error as any).code;
        switch (errorCode) {
          case "auth/wrong-password":
            alert("Incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("User not found, please use the signup form");
            break;
          default:
            console.error("User sign in encountered an error", error);
        }
      }
    }
  };

  return (
    <section>
      <h2 className="h4">I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleOnSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          id="email"
          name="email"
          onChange={handleOnChange}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          id="password"
          name="password"
          onChange={handleOnChange}
          required
        />
        <div className="sign-in-actions">
          <Button type="submit">Sign In</Button>
          <Button type="button" variant="google" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
