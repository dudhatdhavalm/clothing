import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import { createStructuredSelector } from "reselect";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Actions/User/UserActions";
import { selectCurrentUser } from "./Reducers/User/UserSelector";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.unsubscribeFormAuth = null;
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
