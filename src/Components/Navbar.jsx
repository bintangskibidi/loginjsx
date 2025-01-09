// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "http://localhost:5173/",
  },
  {
    id: 2,
    title: "Categories",
    link: "https://www.coca-cola.com/id/id/brands",
  },
  {
    id: 3,
    title: "more",
    link: "https://www.coca-cola.com/id/id/brands/fanta",
  },
  {
    id: 4,
    title: "About",
    link: "https://investors.coca-colacompany.com/about",
  },
  {
    id: 5,
    title: "Contact",
    link: "https://www.coca-cola.com/id/id/about-us/contact-us",
  },
];
const Navbar = () => {
  return (
    <div className=" text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[100px] invert" />
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
             <li key={item.id}> {/* Tambahkan prop key di sini */}
             <UpdateFollower
               mouseOptions={{
                 backgroundColor: "white",
                 zIndex: 9999,
                 followSpeed: 1.5,
                 scale: 5,
                 mixBlendMode: "difference",
               }}
             >
               <a
                 href={item.link}
                 className="inline-block text-base font-semibold py-2 px-3 uppercase"
               >
                 {item.title}
               </a>
             </UpdateFollower>
           </li>
            ))}

            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;