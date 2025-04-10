import { Link, useNavigate } from "react-router-dom";
import { GiBarracksTent } from "react-icons/gi";
import { IoNewspaperOutline, IoTicketSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";

function Footer() {
  const navigate = useNavigate();
  const socialItems = [
    {
      name: "Linkedin",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/sudhanshusingh32/",
    },
    {
      name: "Github",
      icon: <FaGithub size={24} />,
      url: "https://github.com/sudhanshusingh-g",
    },
    {
      name: "X",
      icon: <FaXTwitter size={24} />,
      url: "https://x.com/another_devguy",
    },
  ];
  return (
    <footer className="bg-[#313035] py-8 mt-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col  items-center justify-between p-4 space-y-4">
          <div className="flex flex-col md:items-center space-x-2 text-gray-200">
            <GiBarracksTent />
            <span className="font-medium">List your Shows </span>
            <span>Got a show? Partner with us & get listed on Bioscope</span>
          </div>
          <Button
            type="button"
            className="bg-rose-400 px-4 py-2 rounded cursor-pointer text-white"
          >
            Register Now!
          </Button>
        </div>
        <div className="bg-gray-400/30 flex items-center justify-evenly py-4 text-gray-200/50">
          <RiCustomerService2Fill className="w-10 h-10" />
          <IoTicketSharp className="w-10 h-10" />
          <IoNewspaperOutline className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-gray-200 text-md text-center">Contact</h3>
          <div className="flex items-center justify-center space-x-4">
            {socialItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className="cursor-pointer text-gray-300 hover:text-white transition-all mt-4"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 py-4 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bioscope. All rights reserved.
          </p>
          <p className="text-gray-400">Created by Sudhanshu Singh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
