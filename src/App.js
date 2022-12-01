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

  useEffect(() => {
    updateLogs();
  }, []);

  const updateLogs = () => {
  }

  const yymmdd = (t) => {
    const date = t.split(". ");
    return date[0] + "-" + date[1] + "-" + date[2];
  };

  const koreanTime = (t) => {
    const dateNum = Date.parse(t);
    const date = new Date(dateNum).toLocaleString();
    return date;
  };

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
                <Grid item xs={6} key={user.id}>
                  <UserCard user={user} />
                </Grid>
              ))
            }
          </Grid>
          <Box my={1}></Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>로그 확인 하기</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {JSON.stringify(loginlogs[0])}
              </Typography>
              <Typography>
                {JSON.stringify(loginlogs[0].user_id)}
              </Typography>
              <Typography>
                {JSON.stringify(Date(loginlogs[0].time.$date.$numberLong))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
