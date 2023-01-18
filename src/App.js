import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src='/image 2.svg' alt='Imagem sofá'></img>
      </div>
      <div className='container-product'>
        <p className='code'>CÓDIGO: 42404</p>

        <h1 className='product'>Sofá Margot II - Rosé</h1>

        <p className='price'>R$ 4.000</p>

        <a href='/'>Adicionar à cesta</a>
      </div>
    </div>
  );
}

export default App;
