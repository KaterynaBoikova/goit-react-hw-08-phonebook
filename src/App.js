import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {connect} from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import authOperations from './Redux/Authentification/auth-operations';
import AppNav from './Components/AppNav';
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

const HomeView = lazy(() =>
    import("./Views/HomeView" /* webpackChunkName: "home" */)
);
const PhonebookView = lazy(() =>
    import("./Views/PhonebookView" /* webpackChunkName: "phonebook" */)
);
const RegisterView = lazy(() =>
    import("./Views/RegisterView" /* webpackChunkName: "register" */)
);
const LoginView = lazy(() =>
    import("./Views/LoginView" /* webpackChunkName: "login" */)
);


class App extends Component {
    componentDidMount() {
        this.props.getStorageUser();
    }

    render() {
        return(
            <>
                <CssBaseline />
                <AppNav/>
                <Suspense fallback={<Loader
                    type="ThreeDots"
                    color="teal"
                    height={130}
                    width={130}
                    style={{
                        textAlign: "center",
                    }}/>}>
                    <Switch>
                        <PublicRoute path="/" exact component={HomeView} />
                        <PublicRoute path="/register"  restricted redirectTo="/contacts" component={RegisterView} />
                        <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
                        <PrivateRoute path="/contacts"  redirectTo="/login" component={PhonebookView} />
                    </Switch>
                </Suspense>
            </>
        )
    }
};


const mapDispatchToProps = dispatch => ({
    getStorageUser: () => dispatch(authOperations.getCurrentUser()),
});
export default connect(null, mapDispatchToProps)(App);
