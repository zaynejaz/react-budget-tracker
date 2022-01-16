import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    radioGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-10px',
    },
    button: {
        marginTop: '20px',
        // background: 'linear-gradient(to right, rgba(35, 80, 153, 1) 0%, rgba(35, 80, 153, 1) 51%, rgba(25, 58, 116, 1)  100%)',
        background: 'linear-gradient(to right, #007FFF, #0059B2)',
        margin: '10px',
        padding: '15px 45px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: 'all 0.5s ease-in-out',
        backgroundSize: '200% auto',
        color: '#ffffffb7',
        boxShadow: '0 0 20px #eee',
        borderRadius: '10px',
        display: 'block',
        fontWeight: 'bold',
        '&:hover': {
            backgroundPosition: 'right center',
            color: '#ffffffff',
            transition: 'all 0.5s ease-in-out',
            textDecoration: 'none',
            letterSpacing: '2px',
        },
    },
}));
