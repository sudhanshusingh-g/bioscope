import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

function Home() {
  const {user}=useSelector((state)=>state.user);
  return (
    <div>
      Admin Home
    </div>
  );
}

export default Home