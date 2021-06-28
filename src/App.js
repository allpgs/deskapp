import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, Features } from './pages/'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/features"><Features /></Route>
        <Redirect from="/downloads" to="/features"></Redirect>
        <Redirect from="/sources" to="/features"></Redirect>
        <Route path="/"><Header /><h1 style={{textAlign: "center"}}>404 Not Found</h1><h3 style={{textAlign: "center"}}>파일이 삭제되었거나 주소가 잘못 되어 있을 수 있습니다.<br />다시 한번 확인해 주시기 바랍니다.</h3></Route>
      </Switch>
    </div>
  );
}

export default App;
