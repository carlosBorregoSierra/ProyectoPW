import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import StudentList from './componentes/StudentList';


function App() {
  return (
    <div className="App">
      <header className="App-header"><Header /></header>
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;