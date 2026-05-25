import './App.css';
import Temporary from './Temporary';

function App() {

  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      }}>
          <Temporary />
      </div>
  );
}

export default App;