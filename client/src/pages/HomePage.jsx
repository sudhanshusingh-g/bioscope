import {Link} from "react-router-dom";

function HomePage() {
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

      <p>Movies List</p>
    </div>
  );
}

export default HomePage