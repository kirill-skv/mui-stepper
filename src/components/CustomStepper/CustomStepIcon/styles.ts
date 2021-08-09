import { makeStyles } from '@material-ui/core/styles';

export const customStyles = makeStyles((theme) => {
  const point = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '16px',
    height: '16px',

    borderRadius: '50%',
    transition: theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
      easing: 'ease-in-out'
    })
  };

  return {
    mainPoint: {
      ...point
    },
    smallPoint: {
      ...point,
      width: '2px',
      height: '2px',

      backgroundColor: '#FFF',
      transform: 'scale(3)'
    },
    bigPoint: {
      ...point,
      transform: 'scale(1.25)'
    },
    completed: {
      backgroundColor: theme.palette.primary.main
    },
    active: {
      backgroundColor: theme.palette.secondary.main
    },
    next: {
      backgroundColor: theme.palette.grey[500]
    }
  };
});
