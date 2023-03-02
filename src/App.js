import logo from './logo.svg';
import './App.css';
import MainView from './LiveCommerce/MainView';
import ViewViewCommerce from './LiveCommerce/ViewCommerce.js'

import SNSLogin from './SNS/SNSLogin';
import SNSViewer from './SNS/SNSViewer';


import BootTest from './Bootstrap/BootTest';



import { BrowserRouter, Router, Route, Switch, Link,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
          <Route path='/' element={<MainView />}></Route>
          <Route path="/MainView" element={<MainView />}></Route>
          {/* <Route path='/firelive/:key1/:key2' element={<PageView />}></Route> */}
          <Route path="/SNSLogin" element={<SNSLogin/>}></Route>
          <Route path="/SNSViewer" element={<SNSViewer/>}></Route>
          



					<Route path="/ViewCommerce/:id" element={<ViewViewCommerce/>}></Route>

          
          <Route path="/BootTest" element={<BootTest/>}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
