import { Container, Typography, Button, Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box } from "@mui/system";
import React from "react";
import flower_1 from "../images/flower_1.png";
import flower_2 from "../images/flower_2.png";
import flower_3 from "../images/flower_3.png";

let card = [
  {
    src: flower_1,
  },
  {
    src: flower_2,
  },
  {
    src: flower_3,
  },
];
const Card = () => {
  return (
    <Container>
      <Grid container spacing={2}
      >
        {card.map(({ src }, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <Box sx={{display:"flex", justifyContent:"center", width:"100%", mt: { md:"-30px", sm: "20px", xs: "20px" }}} mt={"-30px"} >
            <Box
              sx={{
                background: "#fff",
                boxShadow: " 2px 5px 10px 2px rgba(0, 0, 0, 0.1)",
                pt: "5px",
                
              }}
            >
              <Typography
                sx={{
                  width: "49px",
                  height: "49px",
                  background: "rgba(250, 139, 130, 0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                  ml: "20px",
                  mt: "15px",
                }}
              >
                {index + 1}
              </Typography>
              <Box sx={{ textAlign: "center", p: {md:"38px", sm:"30px", xs:"10px"}, lineHeight: "3" }}>
                <img src={src} alt={"flower_1"} />
                <Typography
                  variant="h3"
                  sx={{ fontSize: "24px", color: "#549B7D", lineHeight: "3" }}
                >
                  Lorem Ipsum
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum has been the industry's
                  standar
                </Typography>
                <Button sx={{ color: "#F2766D" }} endIcon={<ArrowRightAltIcon sx={{ color: "black" }} />}>
                  Learn More 
                </Button>
              </Box>
            </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Card;
