import React, { Component } from "react";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      Email: "",
      PassWord: "",
      ConfirmPassWord: "",
      firstNameError: "",
      passwordError: "",
      emailError: "",
    };
  }
  validForm = () => {
    var isValid = true;
    if (this.state.FirstName.length === 0) {
      this.setState({
        firstNameError: "firstName should not be empty",
      });
      isValid = false;
    } else if (this.state.FirstName.length > 0) {
      this.setState({
        firstNameError: "",
      });
      isValid = true;
    }
    if (!this.state.Email.match(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/)) {
      this.setState({
        emailError: "Email should conatin @ and . ",
      });
      isValid = false;
    } else if (this.state.Email.match(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/)) {
      this.setState({
        emailError: "",
      });
      isValid = true;
    }
    if (!this.state.PassWord.match(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/)) {
      this.setState({
        passwordError:
          "passwprd should conatin at least 1 special symbol 1 captial and length of 8 char.",
      });
      isValid = false;
    } else if (
      this.state.PassWord.match(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/)
    ) {
      this.setState({
        passwordError: "",
      });
      isValid = true;
    }
    if (this.state.PassWord != this.state.ConfirmPassWord) {
      this.setState({
        passwordError: "password and confirm password not match ",
      });
      isValid = false;
    } else if ((this.state.PassWord = this.state.ConfirmPassWord)) {
      this.setState({
        passwordError: "",
      });
      isValid = true;
    }
    return isValid;
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitData = () => {
    const validForm = this.validForm();
    var allUserDeatils = JSON.parse(localStorage.getItem("UserData"));
    var a = true;
    if (allUserDeatils != null) {
      allUserDeatils.map((user) => {
        if (user.Email === this.state.Email) {
          a = false;
        }
      });
    }

    if (allUserDeatils == null) {
      allUserDeatils = [];

      if (validForm == true) {
        let userDeatils = {
          isAdmin: false,
          FirstName: this.state.FirstName,
          Email: this.state.Email,
          PassWord: this.state.PassWord,
          ConfirmPassWord: this.state.ConfirmPassWord,
        };
        allUserDeatils.push(userDeatils);
        localStorage.setItem("UserData", JSON.stringify(allUserDeatils));
        alert("data added to the localStorage");
      }
    } else if (allUserDeatils != null) {
      if (validForm == true) {
        if (a == true)
        var userDeatils = {
            isAdmin: false,
            FirstName: this.state.FirstName,
            Email: this.state.Email,
            PassWord: this.state.PassWord,
            ConfirmPassWord: this.state.ConfirmPassWord,
          };
        allUserDeatils.push(userDeatils);
        localStorage.setItem("UserData", JSON.stringify(allUserDeatils));
        alert("data added to the localStorage");
      } else {
        alert(
          "please fill the form....."
        );
      }
    } else {
      alert("Something is worng");
    }
  };

  render() {
    return (
      <div className="container">
        <form autoComplete="off">
          <div className="col-md-10 from-group">
            <lable className="float-left block-text text-darken-2 s">
              First Name:{" "}
              <span aria-hidden="true" style={{ color: "red" }}>
                *
              </span>
            </lable>
            <input
              type="text"
              name="FirstName"
              value={this.state.FirstName}
              onChange={this.onChange}
              placeholder="FirstName"
              reaquired
              className="form-control"
            />
            <pre style={{ color: "red" }}>{this.state.firstNameError}</pre>
          </div>

          <div className="col-md-10 from-group">
            <lable className="float-left block-text text-darken-2 s">
              Email:{" "}
              <span aria-hidden="true" style={{ color: "red" }}>
                *
              </span>
            </lable>
            <input
              type="text"
              name="Email"
              value={this.state.Email}
              onChange={this.onChange}
              placeholder="Email"
              reaquired
              className="form-control"
            />
            <pre style={{ color: "red" }}>{this.state.emailError}</pre>
          </div>

          <div className="col-md-10 from-group">
            <lable className="float-left block-text text-darken-2 s">
              PassWord:{" "}
              <span aria-hidden="true" style={{ color: "red" }}>
                *
              </span>
            </lable>
            <input
              type="password"
              name="PassWord"
              value={this.state.PassWord}
              onChange={this.onChange}
              placeholder="PassWord"
              reaquired
              className="form-control"
            />
            <pre style={{ color: "red" }}>{this.state.passwordError}</pre>
          </div>

          <div className="col-md-10 from-group">
            <lable className="float-left block-text text-darken-2 s">
              Confirm PassWord:{" "}
              <span aria-hidden="true" style={{ color: "red" }}>
                *
              </span>
            </lable>
            <input
              type="password"
              name="ConfirmPassWord"
              value={this.state.ConfirmPassWord}
              onChange={this.onChange}
              placeholder="ConfirmPassWord"
              reaquired
              className="form-control"
            />
            <pre style={{ color: "red" }}>{this.state.passwordError}</pre>
          </div>

          <button
            type="button"
            className="btn btn-primary m-3"
            onClick={this.submitData}
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
