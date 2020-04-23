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

const Sample1Component = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClickToTop = () => {
    history.push('/');
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <h2>
          サンプルページ1
        </h2>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ExitToApp />}
          onClick={handleOnClickToTop}
        >
          TOPへ戻る
        </Button>
      </div>
    </div>
  );
};

export default Sample1Component;
