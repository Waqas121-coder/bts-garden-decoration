import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import galary_1 from "../images/galary_1.png";
import galary_2 from "../images/galary_2.png";
import galary_3 from "../images/galary_3.png";
const Galary = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography sx={{ fontSize: {md:"30px",sm:"25px", xs:"20px"}, color: "#549B7D", mb: "20px", textAlign:{md:"left", sm:"left", xs:"center"} }}>
          Join the kitchen garden movement
        </Typography>
        <Grid container spacing={{md:".5",sm:".5", xs:"10" }}>
          <Grid item md={4} sm={11} xs={12}>
            <Box
              sx={{
                display: {md:"block",xs:"flex"},
                justifyContent: {xs:"center"},
                alignItems: {xs:"center"},
              }}
            >
              <Box color={"white"}>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_1})`,
                    // width: "100%",
                    minHeight: "300px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box p={3}>
                    <Typography>Featured Course</Typography>
                    <Typography>Learn to grown your own garden</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_3})`,
                    width: "100%",
                    minHeight: "180px",
                    backgroundRepeat: "no-repeat",
                    mt: 0.5,
                  }}
                >
                  <Box p={3}>
                    <Typography>Learn to grown your own garden</Typography>
                    <Typography>See an Example of this plan</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={11} xs={12}>
            <Box
              sx={{
                display: {md:"block",xs:"flex"},
                justifyContent: {xs:"center"},
                alignItems: {xs:"center"},
              }}
            >
              <Box color={"white"}>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_1})`,
                    width: "100%",
                    minHeight: "140px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box p={3}>
                    <Typography>Learn to grown your own garden</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_3})`,
                    width: "100%",
                    minHeight: "200px",
                    mt: 0.5,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box p={3}>
                    <Typography>Learn to grown your own garden</Typography>
                    <Typography>See an Example of this plan</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_2})`,
                    width: "100%",
                    minHeight: "140px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box p={3}>
                    <Typography>Learn to grown your own garden</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={11} xs={12}>
            <Box
              sx={{
                display: {md:"block",xs:"flex"},
                justifyContent: {xs:"center"},
                alignItems: {xs:"center"},
              }}
            >
              <Box color={"white"}>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_3})`,
                    width: "100%",
                    minHeight: "180px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box p={3}>
                    <Typography>Learn to grown your own garden</Typography>
                    <Typography>See an Example of this plan</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${galary_1})`,
                    width: "100%",
                    mt: 0.5,
                    minHeight: "300px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box p={3}>
                    <Typography>Featured Course</Typography>
                    <Typography>Learn to grown your own garden</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Galary;
