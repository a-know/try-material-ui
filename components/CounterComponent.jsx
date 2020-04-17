import React from 'react'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const CounterComponent = (props) => {
  const { counter, counterActions } = props;
  const classes = useStyles();
  
  return (
    <div>
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
