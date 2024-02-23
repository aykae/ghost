// import './App.css';
import Router from './router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;