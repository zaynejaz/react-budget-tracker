import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    desktop: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    mobile: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    main: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: '5%',
        },
    },
    last: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
            paddingBottom: '200px',
        },
    },
    grid: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));