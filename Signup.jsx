import React, { useState } from 'react';
import '../styles/Signup.module.css';
const Signup = () => {
  // State for the registration form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState(""); 
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // Handlers for registration form fields
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    setSubmitted(false);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
    setSubmitted(false);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
    setSubmitted(false);
  };

  // Handler for registration form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || repeatPassword === "" || gender === "" || !termsAccepted) {
      setError(true);
      setPasswordMatchError(false);
      alert("Please enter all the fields");
    } else if (password !== repeatPassword) {
      setPasswordMatchError(true);
      setError(false);
      alert("Passwords do not match");
    } else if (emailError) {
      setError(false);
      setPasswordMatchError(false);
      alert("Invalid email format");
    } else {
      setSubmitted(true);
      setError(false);
      setPasswordMatchError(false);
      alert(`User ${name} successfully registered!!`);
      // Perform further actions like redirection here
    }
  };

  // Handlers for success and error messages
  const successMessage = () => (
    <div className="success" style={{ display: submitted ? "" : "none" }}>
      <h1>User {name} successfully registered!!</h1>
    </div>
  );
  const errorMessage = () => (
    <div className="error" style={{ display: error ? "" : "none" }}>
      <h1>Please enter all the fields</h1>
    </div>
  );
  const passwordMatchErrorMessage = () => (
    <div className="error" style={{ display: passwordMatchError ? "" : "none" }}>
      <h1>Passwords do not match</h1>
    </div>
  );
  const emailFormatErrorMessage = () => (
    <div className="error" style={{ display: emailError ? "" : "none" }}>
      <h1>Invalid email format</h1>
    </div>
  );

  return (
    <div>
      <div>
       
      </div>
      
      <div className="form">
        <div>
          <h1>User Registration</h1>
        </div>

        <div className="messages">
          {errorMessage()}
          {passwordMatchErrorMessage()}
          {emailFormatErrorMessage()}
          {successMessage()}
        </div>

        <form>
          <div className="label-input-container">
            <label className="label">Name</label>
            <input onChange={handleName} name="input" value={name} type="text" />

            <label className="label">Email</label>
            <input onChange={handleEmail} name="enter_email" value={email} type="email" />

            <label className="label">Password</label>
            <input onChange={handlePassword} name="enter_password" value={password} type="password" />

            <label className="label">Repeat Password</label>
            <input onChange={handleRepeatPassword} name="enter_rep_password" value={repeatPassword} type="password" />

            <label className="label">Gender</label>
            <div>
              <label>
                <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} />
                Male
              </label>
              <label>
                <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} />
                Female
              </label>
              <label>
                <input type="radio" value="other" checked={gender === "other"} onChange={handleGenderChange} />
                Other
              </label>
            </div>

            <label className="label">
              <input name="enter_terms" type="checkbox" checked={termsAccepted} onChange={handleTermsChange} />
              I accept the terms and conditions
            </label>
          </div>
          <input id="button1" type="button" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
