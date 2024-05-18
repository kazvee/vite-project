import './App.css';
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
      <div>
        {/* Single Image */}
        {/* <img src={module.default} alt='logo' /> */}

        {/* Multiple Images */}
        {Object.values(modules).map((src) => (
          <img src={src.default} alt='logo' />
        ))}
      </div>
      <h1 className={moduleOne.highlight}>Très Vite ⚡</h1>
      <a href='/another-route/'>Another Route</a> 🛣️
    </div>
  );
}

export default App;
