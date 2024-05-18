import './App.css';
import './nested.css';
import moduleOne from './one.module.css';
// import moduleTwo from './two.module.css';

// Single Image:
// const logoName = 'rubberduck'
// const module = await import(`./png-images/${logoName}.png`) as { default: string }; // top level await

// Multiple Images:
const modules = import.meta.glob<{ default: string }>('./png-images/*.png', {
  eager: true,
});

function App() {
  return (
    <div className='App'>
      <h1 className={moduleOne.highlight}>Très Vite ⚡</h1>
      <div>
        {/* Single Image */}
        {/* <img src={module.default} alt='logo' /> */}

        {/* Multiple Images */}
        {Object.values(modules).map((src) => (
          <img src={src.default} alt='logo' className='logo' />
        ))}
      </div>
      <h2 className='ducks'>Ducks are:</h2>
      <ul className='styled-list'>
        <li className='item'>Cute</li>
        <li className='item'>Yellow</li>
        <li className='item'>Experts at code debugging</li>
      </ul>
      <p className='item'>Ducks are pretty cool! 😎</p>
      <h3 className='another'>
        <a href='/another-route/'>Another Route</a> 🛣️
      </h3>
    </div>
  );
}

export default App;
