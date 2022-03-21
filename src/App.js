import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Router } from './Router';
import 'sanitize.css/sanitize.css';

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline>
        <Router />
      </CssBaseline>
    </BrowserRouter>
  );
}
