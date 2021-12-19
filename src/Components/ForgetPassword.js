import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
          }}
        >
          <div className="mb-8">
          <button><ArrowBackIcon/></button>
          </div>
        {/* <div>
          <button onClick={()=>history.goBack}><ArrowBackIcon/></button>
        </div> */}

         <div className="font-monster font-bold text-3xl">
          <h1>Forget Password</h1>
         </div>

         <p className='pt-4'>Please enter your email to recovers the instruction to reset your password</p>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ pt:4 }}>
    
            <TextField
              margin="normal"
              required
              fullWidth
              name="Email"
              label="Email"
              type="Email"
              id="Email"
              autoComplete="current-email"
              variant="standard"
            />

          <div className='text-center pt-10  mb-2'>
            <button className="bg-red-500 h-12 text-white rounded-3xl w-80">Send me now</button>
          </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}