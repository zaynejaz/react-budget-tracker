import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';


import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

// import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root} >
            {/* <CardHeader title="Arithmetica" className={classes.headerTitle} subheader="Voice Powered Expense Tracker" /> */}
            <CardHeader
                title={
                    <Typography
                        variant="h4"
                        className={classes.title} style={{
                            background: 'linear-gradient(to right, #007FFF, #0059B2)',
                            backgroundClip: 'border-box',
                            webkitBackgroundClip: 'text',
                            webkitTextFillColor: 'transparent',
                        }}
                    >
                        Arithmetica
                    </Typography>
                }
                subheader={
                    <Typography
                        variant="subtitle1"
                        className={classes.subTitle}
                    >
                        Voice Powered Budget Tracker
                    </Typography>
                }
            />
            <CardContent>
                <Typography align="center" variant="h3">
                    <span className={Number(balance) > 0 ? classes.balancePositive : Number(balance) < 0 ? classes.balanceNegative : classes.balanceNeutral} >&nbsp;<span className={classes.dollarSign}>$&nbsp;</span>{balance}</span>
                    <br />
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '10px', textAlign: 'center' }}>
                    <span className={Number(balance) === 0 ? classes.headerNeutral : classes.headerActive, classes.headerName} >Balance</span>
                    {/* <InfoCard /> */}
                </Typography>
                <Divider className={Number(balance) > 0 ? classes.dividerPositive : Number(balance) < 0 ? classes.dividerNegative : classes.dividerNeutral} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent} >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main