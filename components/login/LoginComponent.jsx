import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import * as Colors from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1),
    color: Colors.common.white,
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClickLogin = () => {
    alert('login clicked');
    history.push('/');
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <h2>
          ログインページ
        </h2>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ExitToApp />}
          onClick={handleOnClickLogin}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default LoginComponent;
