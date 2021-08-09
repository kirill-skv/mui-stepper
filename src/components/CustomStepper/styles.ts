import { makeStyles } from '@material-ui/core';

export const useCustomStyles = makeStyles(() => ({
  iconContainer: {
    minHeight: '20px',
    minWidth: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    alignItems: 'flex-start'
  },
  label: {
    marginTop: '8px'
  }
}));
