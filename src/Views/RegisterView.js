import React, {Component} from 'react';
import {connect} from "react-redux";
import authOperations from '../Redux/Authentification/auth-operations';
import Layout from "../Components/Layout/Layout";
import {TextField, Avatar, Typography, Grid, Container, CssBaseline, Button} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from '../Styles/RegisterViewLoginView.module.css';
class RegisterView extends Component{
    state = {
        name: '',
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
        this.setState({ name: '', email: '', password: '',});
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
                    Register
                </Typography>
                <form onSubmit={this.handleSubmit} autoComplete="off" className={styles.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                    <TextField
                        className={styles.textfield}
                        required
                        id="outlined-required"
                        label="Name"
                        variant="outlined"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                        </Grid>
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
                        </Grid></Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.btnMain}
                    >
                        Register
                    </Button>
                </form>
                    </div>
                </Container>
            </Layout>
        )

    }};

const mapDispatchToProps = dispatch => ({
    submitted: userInput => dispatch(authOperations.userRegister(userInput)),
});

export default connect(null, mapDispatchToProps )(RegisterView);

/*without Material UI
  <label>Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        /></label>
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
 */