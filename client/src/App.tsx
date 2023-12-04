import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import RenderRoutesWithAuth from './routes/routes';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/theme'
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
        <CssBaseline />
        <Router>
          <RenderRoutesWithAuth />
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;


