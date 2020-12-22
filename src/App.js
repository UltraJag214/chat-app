import './App.css';
import { Component } from 'react';
import { store } from './main.js';
import Header from './Header.js';
import Chat from './Chat.js';
import ServerName from './ServerName'
import Channels from './Channels'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = store.getState();
    const currentChannelId = state.currentChannelId;
    const channels = state.channels;
    const currentChannel = channels.find((c) => c.id === currentChannelId);

    const channelTabs = channels.map(c => (
      {
        title: c.title,
        active: c.id === currentChannelId,
      }
    ))

    return (
      <Router>
        <div>
          <div className='container-fluid'>
            <div className="row no-gutters header">
              <header className='server-name col-3'>
                <ServerName></ServerName>
              </header>
              <header className='channel-header col-9'>
                <Header channelTabs={channelTabs} />
              </header>
            </div>
            <div className='main-page row no-gutters'>
              <div className='channels col-3'>
                <Channels channelTabs={channelTabs} />
              </div>
              <div className='messages-box col-9'>
                <Chat
                  channel={currentChannel}
                />
              </div>
            </div>
          </div>
          <div className="ui menu">
            <Link to="/homeChat">
              Home Chat
            </Link>
          </div>
          <Switch>
            {/* We'll insert more Route components here */}
            {/* <Route path="/homeChat" component={Compiler} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;