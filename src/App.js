import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";


function App() {
  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  );
}

export default App;
