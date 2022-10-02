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
        <body>
            <header>
              header here
            </header>
            <div className='content'>
              <h1>Aspaces Application</h1>
              <Button variant="text">Just click</Button>
            </div>
        </body>
    </div>
  );
}

export default App;
