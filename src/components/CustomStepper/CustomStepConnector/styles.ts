import { makeStyles } from '@material-ui/core';

export const useCustomStyles = makeStyles((theme) => {
  return {
    connector: {
      position: 'absolute',
      right: 'calc(100% - 2px)',
      top: '9px',

      height: '2px',
      width: 'calc(100% - 32px)',

      backgroundColor: theme.palette.grey[300]
    }
  };
});
