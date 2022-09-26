import React from "react";

import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton,MenuList, MenuItem, IconButton, Button } from "@chakra-ui/react";
import { RepeatIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import {AiOutlineLogin,AiFillEye,AiOutlineLogout,AiOutlineTeam} from "react-icons/ai";
import loginDataService from "../services/loginAuth";
function Header() {
  const navigate = useNavigate();
  



  return (
    <header>
      <div className="headerCenter">
        <div className="">
        <Button
            size="md"
            colorScheme="blue"
            leftIcon={<AiFillEye />}
            marginRight="10px"
            marginTop="20px"
            marginBottom="10px"
            onClick={() => {
              navigate("/");
            }}
          >
            Crypto Tracker
          </Button>
          
        </div>
       
        <div className="desktopMenu">
          {(localStorage.getItem("jwt") != null) ? (
            <Button  size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineLogout />}
            marginRight="10px"
            marginBottom="20px"
            onClick={() => {
              loginDataService.logout();
            }}>
              logout
            </Button>
          
          ) : (<>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineTeam />}
            marginRight="10px"
            marginBottom="20px"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineLogin/>}
            marginBottom="20px"
            onClick={() => {
              navigate("/login/");
            }}
          >
            Login
          </Button></>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
