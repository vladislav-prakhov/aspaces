import './App.scss';
import { Button } from '@mui/material'
import { UserButton, ChatBox, FlexboxColumn } from '../components';

function App() {
  return (
    <div className="App">
        <aside>
          <UserButton name='user 1'/>
          <UserButton name='user 2'/>
          <UserButton name='user 3' unreadedMessages={4}/>
        </aside>
        <div className='content'>
            <header>
              header here
            </header>
            <div className='content-body'>
              <FlexboxColumn width='800px'>
                <h1>Aspaces Application</h1>
              </FlexboxColumn>
              <ChatBox />
            </div>
        </div>
    </div>
  );
}

export default App;
