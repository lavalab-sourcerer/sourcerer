import './App.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Project from './pages/Project';
import Source from './pages/Source';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"niveau-grotesk"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/project" element={<Project />} />
            <Route path="/source" element={<Source />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
