/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Card, Typography } from "@mui/material";

export default function UserCard({user}) {
    return (
        <>
            <Card variant="outlined">
                <Box p={3}>
                    <Typography>{user.id}</Typography>
                    <Typography>출석 : {user.attendance}</Typography>
                    <Typography>로그인 : {user.login.length}</Typography>
                    <Typography>이벤트 : {user.event}</Typography>
                </Box>
            </Card>
        </>
    );
}