/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography } from "@mui/material";
import { numberLongToDate } from '../utils/commons';

export default function LoginLog({ log }) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Typography>
                    {log.secure_num}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    {log.user_id}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    {numberLongToDate(log.time.$date.$numberLong)}
                </Typography>
            </Grid>
        </Grid>
    )
}