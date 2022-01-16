import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';

import useTransactions from '../../useTransactions';
import useStyles from './styles'

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense} >
            <CardHeader subheader={
                <Typography
                    variant="h6"
                    style={{
                        color: '#3E5060bf',
                        background: '#3E5060bf',
                        backgroundClip: 'border-box',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                        fontSize: '1.15rem',
                    }}
                >
                    {title}
                </Typography>
            } style={{ paddingBottom: '0' }} />
            <Typography variant="h4" >$ {total}</Typography>
            <CardContent >
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
};

export default Details;
