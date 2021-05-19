import React, {Component} from 'react';
import {connect} from "react-redux";
import authOperations from '../Redux/Authentification/auth-operations';
import Layout from "../Components/Layout/Layout";
import {Avatar, Button, Container, CssBaseline, Grid, TextField, Typography} from "@material-ui/core";
import styles from "../Styles/RegisterViewLoginView.module.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

class LoginView extends Component{
    state = {
        email: '',
        password: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };


    handleSubmit = event => {
        event.preventDefault();
        this.props.submitted(this.state);
        this.setState({ email: '', password: ''});
    };

    render(){
        return(
            <Layout>

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={styles.paper}>
                        <Avatar className={styles.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className={styles.textReg}>
                            Login
                        </Typography>
                        <form onSubmit={this.handleSubmit} autoComplete="off" className={styles.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        className={styles.textfield}
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        variant="outlined"
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={styles.textfield}
                                        required
                                        id="outlined-required"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        name="password"
                                                                            value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={styles.btnMain}
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </Container>
            </Layout>
        )

    }};


const mapDispatchToProps = dispatch => ({
    submitted: userInput => dispatch(authOperations.userLogin(userInput)),
});

export default connect(null, mapDispatchToProps )(LoginView);

/*without UI
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input

                        type="email"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    /></label>
                <label>Password
                    <input

                        type="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    /></label>

                <button
                    type="submit" >Login</button>
            </form>
 */