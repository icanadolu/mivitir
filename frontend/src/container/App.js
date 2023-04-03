import UserSignupPage from "../pages/UserSignupPage";
import ApiProgress from "../shared/ApiProgress";
import LangueageSelector from '../components/LangueageSelector';
import LoginPage from "../pages/LoginPage";

function App() {
  return (
    <div className="row">
        <div className="col" >
        <UserSignupPage/>
        </div>
        <div className="col" >
        <LoginPage/>
        </div>
        <LangueageSelector />
    </div>
   
  

 
  );
}

export default App;
