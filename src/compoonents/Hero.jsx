import { Typography, Button, styled, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import herobg from "../images/herobg.png";
// import Herobutton from "./Style"
const Herobutton=styled(Button)`
background:#FA8B82;
color:white;
`
const Hero = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${herobg})`,
          width: "100%",
          backgroundSize: { md: "cover", sm: "cover", xs: "cover" },
          py: { md: "0", sm: "5px", xs: "20px" },
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Box p={{ xs: 1, sm: 5, md: 10 }}>
            <Typography
              sx={{
                fontSize: { md: "50px", sm: "35px", xs: "30px" },
                color: "white",
                width: { md: "45%", sm: "80%", xs: "100%" },
              }}
            >
              Learn To Garden with Confidance
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: { md: "20px", sm: "18px", xs: "15px" },
                color: "white",
                width: { md: "33%", sm: "60%", xs: "100%" },
                mb:4
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lor
            </Typography>
            <Herobutton variant="contained" >TAKE THE QUIZE</Herobutton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
