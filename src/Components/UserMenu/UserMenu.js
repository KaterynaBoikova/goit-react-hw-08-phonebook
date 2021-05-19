import React from 'react';
import {connect} from "react-redux";
import authOperations from '../../Redux/Authentification/auth-operations';
import authSelectors from '../../Redux/Authentification/auth-selectors';
import {Avatar, Button, CssBaseline, Typography} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from '../../Styles/UserMenu.module.css';


const UserMenu = ({userMail, onBtnClick}) => (
    <div className={styles.userDiv}>
        <CssBaseline />
        <Avatar className={styles.avatar}>
            <AccountCircleIcon />
        </Avatar>
        <Typography className={styles.userName}>
            {userMail}
        </Typography>
        <Button type="button" color="inherit" onClick={onBtnClick}>Logout</Button>
    </div>
);
const mapStateToProps = state =>({
    userMail: authSelectors.getUserMail(state),
});

const mapDispatchToProps = {
    onBtnClick: authOperations.userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);