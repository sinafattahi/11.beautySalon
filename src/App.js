import { Route, Routes } from "react-router-dom";

import LogInPage from "./components/LogInPage";
import DashBord from "./components/DashBord";
import Register from "./components/Register";
import Lines from "./components/Lines";
import UserAccount from "./components/UserAccount";
import GoogleAuth from "./components/GoogleAuth";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashbord" Component={DashBord} />
        <Route path="/userAccount" Component={UserAccount} />
        <Route path="/register" Component={Register} />
        <Route path="/logIn" Component={LogInPage} />
        <Route path="/google" Component={GoogleAuth} />
        <Route path="/lines/:id" element={<Lines {...props}/>} />
        <Route path="/" exact Component={LogInPage} />
        <Route path="*" element={<LogInPage />} />
      </Routes>  
    </div>
  );
}

export default App;
