import './App.css';
const logoName = 'rubberduck'
const module = await import(`./png-images/${logoName}.png`) as { default: string }; // top level await

function App() {
  return (
    <div className='App'>
      <div>
        <img src={module.default} alt='logo' />
      </div>
      <h1>Très Vite ⚡</h1>
      <a href='/another-route/'>Another Route</a> 🛣️
    </div>
  );
}

export default App;
