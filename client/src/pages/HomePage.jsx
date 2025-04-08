import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

function HomePage() {
  const {user}=useSelector((state)=>state.user);
  return (
    <div>
      <div>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
      </div>
      <input type="search" name="search" id="search" />

      <p>Movies List for {user?.name}</p>
      <img src={user?.profileImage} alt={user?.name} />
    </div>
  );
}

export default HomePage