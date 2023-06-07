import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import routes, { renderRoutes } from './routes/routes';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/theme'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
}

export default App;
