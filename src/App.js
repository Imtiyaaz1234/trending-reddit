import './App.css';
import { Global, css } from '@emotion/react';
import PostList from './components/PostList';
import Post from './components/Post';
import SideMenu from './containers/SideMenu'
import Header from './containers/Header';
import { HorizontalContainer } from './styles/components';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Global
      styles={css`
          @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
          body {
            background: #f9f9f9;
            line-height: 1;
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          }
        `}
      />
      <Header />
      <HorizontalContainer>
      <Router>
        <Route exact path="/" component={PostList} />
        <Route path="/post" component={Post} />
      </Router>
      <SideMenu />
      </HorizontalContainer>
    </div>
  );
}

export default App;
