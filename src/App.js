import LoginFrom from "./from/LoginFrom"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ForgetPass from "./from/ForgetPass";
import ForgetSucess from "./from/forgetsucess";
import SignupForm from "./from/SignupFrom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginFrom/>} />
          <Route path="/forget" element={<ForgetPass/>} />
          <Route path="/Sucess" element={<ForgetSucess/>} />
          <Route path="/register" element={<SignupForm/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
