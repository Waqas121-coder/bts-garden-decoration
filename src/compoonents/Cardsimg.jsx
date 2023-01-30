import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import cardImg_1 from "../images/cardImg_1.png";
import cardImg_2 from "../images/cardImg_2.png";
import cardImg_3 from "../images/cardImg_3.png";
import cardImg_4 from "../images/cardImg_4.png";

const Cardsimg = () => {
  return (
    <Container>
      <Stack
        mt={10}
        alignItems={"center"}
        direction={{ xs: "column", md: "row" }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontSize: "24px", color: "#549B7D", lineHeight: "2" }}
          >
            Lorem Ipsum
          </Typography>
          <Typography variant="h6" sx={{ color: "#AEAEAE", fontSize: 15 }}>
            Lorem Ipsum is simply dummy text he printing and typesettingindustry
            Lorum ipsum has been the industry
          </Typography>
          <Button
            sx={{
              background: "#F2766D",
              color: "white",
              borderRadius: "50px",
              px: 5,
              mt: 5,
            }}
            variant="contained"
          >
            TAKE THE QUIZE
          </Button>
        </Box>
        <Grid container spacing={2.5}>
          <Grid item md={6} sm={6} xs={12} mt={10}>
            <Box display="flex" alignItems ="center" flexDirection="column">
              <img
                style={{
                  maxWidth: "315px",
                  width: "100%",
                  boxShadow: "  8px 8px 3px rgba(0, 0, 0, 0.1)",
                  marginBottom:"15px"
                }}
                src={cardImg_1}
                alt="cardImg_1"
              />
              <img
                style={{
                  marginTop: "15px",
                  maxWidth: "330px",
                  width: "100%",
                  boxShadow: "  8px -8px 3px rgba(0, 0, 0, 0.1)",
                }}
                src={cardImg_2}
                alt={"cardImg_2"}
              />
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box display="flex" alignItems ="center" flexDirection="column">
              <img
                style={{
                  maxWidth: "330px",
                  width: "100%",
                  boxShadow: "  -8px 8px 3px rgba(0, 0, 0, 0.1)",
                  marginBottom:"15px"
                }}
                src={cardImg_3}
                alt={"cardImg_3"}
              />
              <img
                style={{
                  maxWidth: "315px",
                  width: "100%",
                  marginTop: "15px",
                  boxShadow: "  -8px -8px 3px rgba(0, 0, 0, 0.1)",
                }}
                src={cardImg_4}
                alt={"cardImg_4"}
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
export default Cardsimg;
