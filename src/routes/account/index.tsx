import SignInForm from "components/sign-in-form";
import SignUpForm from "components/sign-up-form";
import "./styles.scss";

const Account = () => {
  return (
    <div>
      <h1 className="sr-only">SignIn</h1>
      <div className="sign-in-forms-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Account;
