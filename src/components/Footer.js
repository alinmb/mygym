import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo4.png";

const Footer = () => {
  return (
    <Box mt="10px" color="#ff735c">
      <Stack alignItems="center">
        <img src={Logo} width="100px" height="100px" />

        <Typography fontSize="15px" fontStyle="italic" pb="3px" mt="0px">
          Alinmb - Copyright 2023.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
