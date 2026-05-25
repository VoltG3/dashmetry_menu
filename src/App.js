import './App.css';
import DashmetryPage from './dashmetry_menu/DashmetryPage';

function App() {

  console.log('[App] render');

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
          <DashmetryPage />
      </div>
  );
}

export default App;