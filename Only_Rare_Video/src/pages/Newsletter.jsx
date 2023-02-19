import { useState } from "react";
import { CustomFooter } from "../components/CustomFooter";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import Navbar from "../components/Navbar";
import { NavbarNEW } from "../components/NavbarNEW";

function Newsletter() {
  const [emailValue, setEmailValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailSentCorrectly, setEmailSentCorrectly] = useState(false);
  const [emailSentInvalid, setEmailSentInvalid] = useState("");
  const [emailAlreadyExists, setEmailAlreadyExists] = useState();
  const [inputFieldDisabled, setInputFieldDisabled] = useState("");
  const [content, setContent] = useState(null);

  const emailValueHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (error != null) {
      setError(null);
    }

    //Setting to default everytime I submit the form

    setEmailAlreadyExists(false);
    setEmailSentInvalid(false);

    //Regex ---> check email when press button
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(emailValue) != true) {
      console.log("invalid email");
      setEmailSentInvalid(true);
      setEmailValue("");
      return;
    }

    setIsLoading(true);

    //Create Object
    const newEmail = { email: emailValue };
    console.log(newEmail);

    //Fetch

    fetch("http://localhost:8080/api/email/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    })
      //.then((response) => response.json())    --->NOT MANDATORY IN THIS CASE!

      //prova con errore 406
      .then((response, error) => {
        if (response.status == 409) {
          console.log(response);
          console.log("email already exists!");
          setEmailAlreadyExists(true);
          setEmailValue("");
          return;
        }
        console.log(response);
        console.log(error);
        setIsLoading(false);
        setEmailSentCorrectly(true);
        setInputFieldDisabled("disabled");
        setEmailValue("");
      })
      //NON CAPISCO COME FUNZIONA CATCH---> come cattchare errori?
      .catch((error) => {
        setError(error);
        console.error("Error", error);
      });

    console.log("I come before the .thens()");
  };

  let final = "";

  if (isLoading) {
    final = <Loading />;
  }

  if (emailSentInvalid) {
    final = (
      <div className="cssFontError mt-4">Invalid email! Try it again!</div>
    );
  }

  if (emailAlreadyExists) {
    final = (
      <div className="cssFontError mt-4">This email is already registered!</div>
    );
  }

  if (emailSentCorrectly) {
    final = (
      <div className="cssFontNavbarClass mt-4 text-center">
        You've been succesfully subscribed to our newsletter!
      </div>
    );
  }

  //errore da correggere

  if (error) {
    final = <Error />;
  }

  return (
    <section className="mainSectionBg">
      <NavbarNEW></NavbarNEW>

      <form
        onSubmit={submitHandler}
        className="cssFontTextMontserrat"
        action=""
      >
        <section className="d-flex flex-column  my-5 align-items-center">
          <div className="">
            <h1 className="mt-4 text-center mb-4">
              Subscribe to Only Rare Video Newsletter
            </h1>
            <div className="mt-5 text-center">
              Don't miss a single movie coming out!
            </div>
            <div className=" text-center">
              You will be granted thousands of discount and deals
            </div>
            <div className="text-center">
              Join the covenant and never come back, alive...
            </div>
          </div>
          <div className="d-flex mt-5 align-items-center ">
            <label className="px-3" htmlFor="email">
              Email:
            </label>
            <input
              className={
                inputFieldDisabled == ""
                  ? "form-control bg-light"
                  : "form-control bg-secondary"
              }
              value={emailValue}
              onChange={emailValueHandler}
              type="text"
              name="email"
              id="email"
              disabled={inputFieldDisabled}
            />
            <button
              className="btn-sm mx-3  rounded"
              disabled={inputFieldDisabled}
            >
              Send
            </button>
          </div>
          {final}
        </section>
      </form>

      <CustomFooter />
    </section>
  );
}

// http://localhost:8080/api/email/create

export default Newsletter;
