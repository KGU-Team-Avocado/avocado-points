/* eslint-disable react/prop-types */
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, Divider, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function UserCard({ user, totalPoints, scholarship }) {
    const MiniCard = ({ children }) => {
        return (
            <Card>
                <Stack px={2} py={1}>
                    {children}
                </Stack>
            </Card>
        )
    }
    return (
        <>
            <Card variant="outlined">
                <Stack p={3} spacing={1}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{user.id}</Typography>
                    <Divider />
                    <MiniCard>
                        <Typography>출석(5점) {user.attendance}회 : {5 * user.attendance}점</Typography>
                    </MiniCard>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>로그인(2점) {user.login.length}회 : {2 * user.login.length}점</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {user.login.map((el) => <Typography key={el}>{el}</Typography>)}
                        </AccordionDetails>
                    </Accordion>
                    <MiniCard>
                        <Typography>이벤트 : {user.event}점</Typography>
                    </MiniCard>
                    <Divider />
                    <Typography variant='h6'>총점 : {user.total}점</Typography>
                    <Typography variant='h6'>점수 비율 : {(user.total/totalPoints*100).toFixed(2)}%</Typography>
                    <Typography variant='h6'>예상 수령 금액 : {(user.total/totalPoints*scholarship).toFixed(0)}원</Typography>
                </Stack>
            </Card>
        </>
    );
}