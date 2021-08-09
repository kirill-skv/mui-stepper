import { makeStyles } from '@material-ui/core';

export const useCustomStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'left',
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
      easing: 'ease-in-out'
    })
  },
  completed: {
    color: theme.palette.text.primary
  },
  active: {
    color: theme.palette.secondary.main
  },
  next: {
    color: theme.palette.grey[500]
  },
  step: {
    margin: '8px 0px',

    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 200
  },
  label: {
    margin: '0px',

    fontWeight: 600
  }
}));
