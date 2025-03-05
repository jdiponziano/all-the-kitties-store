import { useState, ChangeEvent, FormEvent } from "react";
import { UserCredential } from "firebase/auth";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "utils/firebase";
import { Input } from "components/form-elements";
import Button from "components/button";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response: UserCredential | undefined =
        await createAuthUserWithEmailAndPassword(email, password);
      if (response) {
        await createUserDocFromAuth(response.user, { displayName });
      }
      resetFormFields();
      // TO DO: Add error & success messages to page
    } catch (error) {
      if (
        error instanceof Error &&
        (error as any).code === "auth/email-already-in-use"
      ) {
        alert("email already in use");
      } else {
        console.error("User creation encountered an error", error);
      }
    }
  };

  return (
    <section>
      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password.</p>
      <form onSubmit={handleOnSubmit}>
        <Input
          label="Display Name"
          type="text"
          value={displayName}
          id="displayName"
          name="displayName"
          onChange={handleOnChange}
          required
        />
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
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleOnChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </section>
  );
};

export default SignUpForm;
