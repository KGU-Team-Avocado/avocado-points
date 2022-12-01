/* eslint-disable react/prop-types */
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function UserCard({ user }) {
    return (
        <>
            <Card variant="outlined">
                <Box p={3}>
                    <Typography variant='h5'>{user.id}</Typography>
                    <Typography>출석(5점) {user.attendance}회 : {5*user.attendance}점</Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>로그인(2점) {user.login.length}회 : {2*user.login.length}점</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {user.login.map((el)=><Typography key={el}>{el}</Typography>)}
                        </AccordionDetails>
                    </Accordion>
                    <Typography>이벤트 : {user.event}점</Typography>
                </Box>
            </Card>
        </>
    );
}