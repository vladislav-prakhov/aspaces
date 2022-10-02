import './App.css';
import { Button } from '@mui/material'
import { UserButton } from '../components';

function App() {
  return (
    <div className="App">
        <aside>
          <UserButton name='user 1'/>
          <UserButton name='user 2'/>
          <UserButton name='user 3'/>
        </aside>
        <div className='content'>
            <header>
              header here
            </header>
            <div className='content-body'>
              <h1>Aspaces Application</h1>
              <Button variant="text">Just click</Button>
            </div>
        </div>
    </div>
  );
}

export default App;
