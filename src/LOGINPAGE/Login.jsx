import React, { useCallback, useState } from "react";
import "./Login.css";
import { RegisterApi } from "../Services/Api";
const Login = () => {
  const init = {
    name: { p: false },
    email: { p: false },
    pass: { p: false },
  };
  const [errorMessage, setErrorMessage] = useState(init);
  const [loadSpiner, setLoadSpinner] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...init };
    let hasError = false;
    if (storeValues.name === "") {
      setErrorMessage((errors.name.p = true));
      hasError = true;
    }
    if (storeValues.email === "") {
      setErrorMessage((errors.email.p = true));
      hasError = true;
    }
    if (storeValues.pass === "") {
      setErrorMessage((errors.pass.p = true));
      hasError = true;
    }
    if (hasError != true) {
      setLoadSpinner(true);
      //Api request
      RegisterApi(storeValues)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoadSpinner(false);
        });
    }

    setErrorMessage(errors);
  };

  const [storeValues, setStoreValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleInputs = (e) => {
    setStoreValues({ ...storeValues, [e.target.name]: e.target.value });
  };

  return (
    <login>
      <section>
        <form class="form" onSubmit={handleSubmit}>
          <div class="container-md">
            <div class="row col-md-12 col-lg-12 col-xm-4">
              <div class="col">
                <h3 class="text text-center">Create Account</h3>
                <h5 class="text text-center">
                  Get started with your free account
                </h5>
                <div class="mb-3">
                  <label for="Username" class="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="Username"
                    class="form-control"
                    onChange={handleInputs}
                  />
                  <div class="required-alert"></div>
                  {errorMessage.name.p ? (
                    <p class="p">Name is required</p>
                  ) : null}
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    class="form-control"
                    onChange={handleInputs}
                  />
                  {errorMessage.email.p ? (
                    <div class="p">Email is reqired</div>
                  ) : null}
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    name="pass"
                    type="password"
                    id="password"
                    class="form-control"
                    onChange={handleInputs}
                  />
                  {errorMessage.pass.p ? (
                    <div class="p">Password is required</div>
                  ) : null}
                </div>
                {/* <div class="mb-3">
                  <label for="conform-password" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="conform-password"
                    class="form-control"
                  />
                  <div class="required-alert"></div>
                </div> */}

                {loadSpiner ? (
                  <div class="spinner-border mb-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : null}

                <button
                  class="btn btn-primary p-2"
                  type="submit"
                  id="create-account"
                  disabled={loadSpiner}
                >
                  Register
                </button>

                <p class="text text-center">
                  Have an account
                  <a href="#">Log in</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </login>
  );
};

export default Login;
