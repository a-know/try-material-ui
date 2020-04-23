import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const TopComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <h2>
          トップページ
        </h2>
        <div style={{ textAlign: 'center' }}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => history.push('/counter')}
          >
            カウンターページ
          </Button>
        </div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => history.push('/sample?page=1')}
          >
            サンプルページ1
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => history.push('/sample?page=2')}
          >
            サンプルページ2
          </Button>
        </div>

      </div>
    </div>
  );
};

export default TopComponent;
