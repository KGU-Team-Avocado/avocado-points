/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import loginlogs from './data/loginlogs.json';
import defaultJSON from './data/default.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserCard from './component/UserCard';

function App() {

  const scholarship = Object.values({
    default: 500000,
    members: 100000 * 6,
    rewards: 300000,
    funding: 116000
  }).reduce((a, b) => a + b, 0);

  const [users, setUsers] = useState(defaultJSON);

  const numberLongToDate = (numberLong) => {
    const yymmdd = (t) => {
      const date = t.split(". ");
      return date[0] + "-" + date[1] + "-" + date[2];
    };
    const date = new Date(parseInt(numberLong));
    return yymmdd(date.toLocaleString());
  }

  const findUserById = (id) => {
    const idx = defaultJSON.findIndex((user) => user.id === id);
    return idx;
  }

  useEffect(() => {
    updateLoginLogs();
    updateTotal();
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
          <Grid container spacing={1}>
            {
              users.map((user) => (
                <Grid item xs={12} sm={6} key={user.id}>
                  <UserCard user={user} />
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
                loginlogs.map((log) => <>
                  <Grid container spacing={1} key={log.secure_num}>
                    <Grid item xs={1}>
                      <Typography>
                        {log.secure_num}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>
                        {log.user_id}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>
                        {numberLongToDate(log.time.$date.$numberLong)}
                      </Typography>
                    </Grid>
                  </Grid>
                </>)
              }

            </AccordionDetails>
          </Accordion>
        </Stack>
      </Container>
    </Box >
  );
}

export default App;
