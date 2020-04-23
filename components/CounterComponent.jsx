import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const CounterComponent = (props) => {
  const { counter, counterActions } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleOnClickToTop = () => {
    history.push('/');
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="centerTable">
        <h2>
          count={counter.value}
        </h2>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => counterActions.increment()}
        >
          増加
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          startIcon={<RemoveIcon />}
          onClick={() => counterActions.decrement()}
        >
          減少
        </Button>
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

CounterComponent.propTypes = {
  counter: PropTypes.shape({
    value: PropTypes.number,
  }).isRequired,
  counterActions: PropTypes.shape({
    increment: PropTypes.func,
    decrement: PropTypes.func,
  }).isRequired,
};

export default CounterComponent;