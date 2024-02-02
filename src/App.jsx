// import { Button } from "@mui/material";
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function App() {
  
  return(
    <>

      <Container sx={{ border: 10, boxShadow: 5, pb: 10 }}>
      
      <Typography 
        variant='h1'
        color='error'
        fontWeight='bold'
        textAlign='center'
        component='h2'
      >
      Curso de Material UI
      </Typography>
      <Typography 
        variant='h2'
        color='secondary'
        fontWeight='bolder'
        align='center'
      >
      Typografia
      </Typography>
      <Typography>Titulo 3</Typography>

      <h1>App</h1>
      <Button variant='contained'>Mi primer Botón</Button>
      </Container>

    </>
  )

}