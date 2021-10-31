import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import StudentList from './componentes/StudentList';
import StudentItem from './componentes/EstudentItem';
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <Container fluid>
      <div className="container-fluid" >
        <header><Header /></header>
        <StudentList />
        <Footer />
       </div>
    </Container>
  );
}

export default App;