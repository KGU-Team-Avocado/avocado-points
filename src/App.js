/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import loginlogs from './data/loginlogs.json';
import defaultJSON from './data/default.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserCard from './component/UserCard';
import { findUserById, numberLongToDate } from './utils/commons';
import LoginLog from './component/LoginLog';
import { INCOME } from './utils/constants';

function App() {

  const scholarship = Object.values(INCOME).reduce((a, b) => a + b, 0);

  const [users, setUsers] = useState(defaultJSON);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    updateLoginLogs();
    updateTotal();
    countTotalPoints();
  }, []);

  const updateLoginLogs = () => {
    const nextUsers = [...users];
    loginlogs.map((log) => {
      const user = nextUsers[findUserById(log.user_id)];
      const date = numberLongToDate(log.time.$date.$numberLong)
      if (!user?.login.includes(date)) {
        user?.login.push(date);
      }
    })
    setUsers(nextUsers);
  }

  const updateTotal = () => {
    const nextUsers = [...users];
    nextUsers.map((user) => {
      user.total = user.attendance * 5 + user.login.length * 2 + user.event;
    })
    setUsers(nextUsers);
  }

  const countTotalPoints = () => {
    const points = users.map((user) => user.total).reduce((a, b) => a + b, 0);
    setTotalPoints(points)
  }

  return (
    <Box>
      <Container>
        <Stack
          justifyContent="center"
          alignItems="center"
          mt={5}
        >
          <Typography variant='h3'>아보카도 팀</Typography>
          <Typography variant='h3'>포인트 계산기</Typography>
        </Stack>
        <Stack>
          <Typography variant='h5'>총 장학금 : {scholarship}원</Typography>
          <Typography variant='h5'>총 점수 : {totalPoints}점</Typography>
          <Grid container spacing={1}>
            {
              users.map((user) => (
                <Grid item xs={12} sm={6} key={user.id}>
                  <UserCard user={user} scholarship={scholarship} totalPoints={totalPoints} />
                </Grid>
              ))
            }
          </Grid>
          <Box my={1} />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>전체 로그 확인 하기</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                loginlogs.map((log) => <LoginLog key={log.secure_num} log={log} />)
              }
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Container>
    </Box >
  );
}

export default App;
