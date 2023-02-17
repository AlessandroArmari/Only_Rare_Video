import { useState } from "react";
import { CustomFooter } from "../components/CustomFooter";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";

function Newsletter() {
  const [emailValue, setEmailValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailSentCorrectly, setEmailSentCorrectly] = useState(false);
  const [content, setContent] = useState(null);

  const emailValueHandler = (event) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
      //.then((response) => response.json()) to be checked!
      .then((newEmail) => {
        setIsLoading(false);
        console.log("Success", newEmail);
      })
      .then(() => {
        setEmailSentCorrectly(true);
      })
      .catch((error) => {
        setError(error);
        console.error("Error", error);
      });
  };

  let final = "";

  if (isLoading) {
    final = <Loading />;
  }

  if (emailSentCorrectly) {
    final = (
      <div className="cssFontNavbarClass mt-4">
        You've been succesfully subscribed to our newsletter!
      </div>
    );
  }

  //errore da correggere

  if (error != null) {
    final = <div> ERRORE </div>;
  }

  return (
    <section className="mainSectionBg">
      <Navbar></Navbar>
      <form
        onSubmit={submitHandler}
        className="cssFontTextMontserrat"
        action=""
      >
        <section className="d-flex flex-column  my-5 align-items-center">
          <div>
            <h1 className="text-center mb-4">
              Subscribe to Only Rare Video Newsletter
            </h1>
            <div className="text-center">
              Don't miss a single movie coming out!
            </div>
            <div className="text-center">
              You will be granted thousands of discount and deals
            </div>
            <div className="text-center">
              Join the covenant and never come back, alive...
            </div>
          </div>
          <div className="d-flex mt-5   align-items-center ">
            <label className="px-3" htmlFor="email">
              Email:
            </label>
            <input
              className="form-control bg-light"
              value={emailValue}
              onChange={emailValueHandler}
              type="email"
              name="email"
              id="email"
            />
            {!emailSentCorrectly && <button className="mx-3 p-1">Send</button>}
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
