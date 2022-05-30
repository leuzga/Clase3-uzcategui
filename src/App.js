import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const mensaje = 'Bienvenido a mi pagina WEB!'
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer mensaje={mensaje}/>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
