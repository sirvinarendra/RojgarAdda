import { HashRouter, Routes, Route } from 'react-router-dom';
import CreateUserAccount from './user/UserSignup';
import CreateCompanyAccount from './company/CompanySignup';
import Login from './user/Loginpage';
import Home from './Homepage';

import TopnavHeader from './Topnavheader';

function App() {
      return(
            <HashRouter>
              <TopnavHeader/>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path='/usersignup' element={<CreateUserAccount/>}/>
               < Route exact path='/login' element={<Login/>}/>
               <Route exact path='/companysignup' element={<CreateCompanyAccount/>}/>
              </Routes>
            </HashRouter>
          );
      }
export default App;
