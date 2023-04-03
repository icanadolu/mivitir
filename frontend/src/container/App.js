import UserSignupPage from "../pages/UserSignupPage";
import ApiProgress from "../shared/ApiProgress";
import LangueageSelector from '../components/LangueageSelector';
import LoginPage from "../pages/LoginPage";

function App() {
  return (
    <div className="row">
        <div className="col" >
        <ApiProgress path="/api/1.0/users">
        <UserSignupPage/>
    </ApiProgress>
        </div>
        <div className="col" >
        <ApiProgress path="/api/1.0/auth">
        <LoginPage/>
    </ApiProgress>
        </div>
        <LangueageSelector />
    </div>
   
  

 
  );
}

export default App;
