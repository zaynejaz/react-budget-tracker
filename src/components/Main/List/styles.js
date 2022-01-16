import { makeStyles } from '@material-ui/core/styles';
// import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: '#0CC62E',
  },
  avatarExpense: {
    color: theme.palette.getContrastText('#FF4351'),
    backgroundColor: '#FF4351',
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
  deleteIcon: {
    color: '#8E93A9',
  }
}));