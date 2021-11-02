import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import StudentList from './componentes/StudentList';
import StudentItem from './componentes/EstudentItem';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import MisRoutes from './MisRutas';

function App() {
  return (
    <Container fluid>
      <Router>
        <Header />
        <MisRoutes/>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;