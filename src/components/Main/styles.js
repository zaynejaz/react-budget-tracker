import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        // background: '#1B2A62',
        background: '#fff',
        borderRadius: '0',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    title: {
        fontWeight: 'bold',
    },
    subTitle: {
        color: '#3E5060bf',
        fontWeight: '400',
    },
    cardContent: {
        paddingTop: 0,
    },
    headerName: {
        fontSize: '120%',
        color: 'rgba(62, 80, 96, 0.75)'
    },
    headerActive: {
        color: 'rgba(0,0,0,.87)'
    },
    headerNeutral: {
        color: 'rgba(0,0,0,.43)'
    },
    dollarSign: {
        fontSize: '70%',
        verticalAlign: 'top',
    },
    dividerPositive: {
        margin: '20px 0',
        background: '#0CC62E'
    },
    dividerNegative: {
        margin: '20px 0',
        background: '#FF4351'
    },
    dividerNeutral: {
        margin: '20px 0',
        background: 'rgba(0,0,0,.43)'
    },
    balancePositive: {
        color: '#0CC62E',
        marginLeft: '-2.3rem',
    },
    balanceNegative: {
        color: '#FF4351',
        marginLeft: '-2.3rem',
    },
    balanceNeutral: {
        color: 'rgba(0,0,0,.43)',
        marginLeft: '-2.3rem',
    },
}));

// background: 'rgba(35, 80, 153, 1)'
