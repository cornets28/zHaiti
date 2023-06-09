import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import routes, { renderRoutes } from './routes/routes';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/theme'
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      
    {/* <I18nextProvider i18n={i18n}> */}
      <CssBaseline />
      <Router>
        {renderRoutes(routes)}
      </Router>
      {/* </I18nextProvider> */}
    </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
