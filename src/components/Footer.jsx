import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";
import Heart from "../assets/images/heart.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="center"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography fontSize="18px" fontWeight="bold" mb="20px">
          Made with <img style={{ width: "18px" }} src={Heart} alt="heart" /> by
          Daniyal Tayyab
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
