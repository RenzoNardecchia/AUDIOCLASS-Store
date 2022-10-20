import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = ()=>{
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'There aren\'t any products yet :('}/>
    </div>
  );
}

export default App;
