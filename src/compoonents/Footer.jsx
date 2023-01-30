import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          justifyContent: { md: "space-around", sm: "center", xs: "center" },
          alignItems: { md: "center", sm: "center", xs: "center" },
          my: 3,
        }}
      >
        <Typography textAlign={{ xs: "center" }}>
          Want more inspriration? Check out our blog for latest.
        </Typography>
        <Box textAlign="center">
          <Button
            sx={{
              background: "#549B7D",
              color: "white",
              borderRadius: 6,
              px: 5,
              "&:hover": {
                background: "#F2766D",
              },
            }}
          >
            FIND YOUR GARDEN STYLE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
