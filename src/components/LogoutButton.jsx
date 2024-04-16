import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/login");
  };

  return (
    <Button colorScheme="red" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
