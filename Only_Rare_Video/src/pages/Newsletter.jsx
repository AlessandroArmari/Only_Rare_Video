import { useState } from "react";
import { CustomFooter } from "../components/CustomFooter";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { NavbarNEW } from "../components/NavbarNEW";
import "./style/Media_Query_Newsletter.css";

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

    //Setting to default everytime I submit the form
    if (error != null) {
      setError(null);
    }
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
      //Custom ERROR 409 in Back End
      .then((response) => {
        if (response.status == 409) {
          console.log(response);
          console.log("email already exists!");
          setEmailAlreadyExists(true);
          setEmailValue("");
          return;
        }
        // .catch()---> solo a livello di chiamata, non gestisce gli errori di "risposta"
        console.log(response);
        setIsLoading(false);
        setEmailSentCorrectly(true);
        setInputFieldDisabled("disabled");
        setEmailValue("");
      })
      .catch((error) => {
        setError(error);
        console.error("Network issue", error);
      });

    console.log("I come before the .thens()");
  };

  let final = "";

  if (isLoading) {
    final = <Loading />;
  }

  if (emailSentInvalid) {
    final = (
      <div className="cssFontError mt-4 text-center">
        Invalid email! Try it again!
      </div>
    );
  }

  if (emailAlreadyExists) {
    final = (
      <div className="cssFontError mt-4 text-center">
        This email is already registered!
      </div>
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

      <form onSubmit={submitHandler} className="newsletterFont" action="">
        <section className="container">
          <section className="row justify-content-center my-4 align-items-center">
            <div className="col-10">
              <h1 className="mt-4 text-center mb-4 newsletterTitleFont">
                Subscribe to Only Rare Video Newsletter
              </h1>
              <div className="mt-5 text-center">
                Don't miss next movies coming out!
              </div>
              <div className=" text-center">
                You will be granted thousands of discount and deals
              </div>
            </div>
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 d-flex mt-5  ">
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
                className="btn-sm mx-3 py-0 rounded"
                disabled={inputFieldDisabled}
              >
                Send
              </button>
            </div>
            {final}
          </section>
        </section>
      </form>

      <CustomFooter />
    </section>
  );
}

// http://localhost:8080/api/email/create

export default Newsletter;
