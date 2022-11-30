/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {

  const scholarship = Object.values({
    default: 500000,
    members: 100000 * 6,
    rewards: 300000,
    funding: 116000
  }).reduce((a, b) => a + b, 0);

  const [users, setUsers] = useState(
    ["gabrielyoon7", "wlstn", "201912069",
      "hido", "seeun", "yeonsu"].map((id) => ({
        id: id,
        attendance: 0,
        login: 0,
        event: 0
      }))
  );


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
          <Typography variant='h5'>아이디 : {users.map((user) => user.id).join(', ')}</Typography>
          <Card variant="outlined">{JSON.stringify(users)}</Card>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
