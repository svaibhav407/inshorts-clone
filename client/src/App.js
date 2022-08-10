import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Articles from './components/Articles';
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

function App() {
  return (
    <Box >
      <Header />
      <Container>
          <Articles />
      </Container>
    </Box>
  );
}

export default App;
