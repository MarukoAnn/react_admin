import logo from './logo.svg';
import './App.css';
// import {lazy, Suspense} from 'react'
// const Login  = lazy(() => {import('./views/login/login')})
import Index from './router/index'
function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={() =><div>加载中..</div>}> */}
        <Index></Index>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
