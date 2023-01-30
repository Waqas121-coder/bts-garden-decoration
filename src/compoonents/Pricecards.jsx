import { Button, Container, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
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
const Pricecards = () => {
  return (
    <Container>
      <Stack
        mt={14}
        alignItems={"center"}
        direction={{ md: "row", xs: "column", sm: "column" }}
      >
        <Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { md: "24px", xs: "20px" },
                color: "#549B7D",
                lineHeight: "2",
              }}
            >
              PLANS & PRICING
            </Typography>
            <Typography sx={{ color: "#AEAEAE", fontSize: 15 }}>
              Lorem Ipsum is simply dummy text he printing and
              typesettingindustry Lorum ipsum has been the industry
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              textAlign: { md: "left",sm:"left", xs: "center" },
              color: "#549B7D",
              pt: 4,
              lineHeight: "2",
            }}
          >
            READY TO GET STARTED
          </Typography>
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Button
              sx={{
                background: "#549B7D",
                color: "white",
                borderRadius: "50px",
                pr: { sm: "30px", md: "40px" },
              }}
              variant="contained"
            >
              FIND YOUR GARDEN STYLE
            </Button>
            <Button
              sx={{
                background: "#F2766D",
                color: "white",
                borderRadius: "50px",
                mt: { xs: "5px", sm: "0px", md: "0px" },
                ml: { xs: "10px", sm: "-25px", md: "-30px" },
                "&:hover": {
                  background: "#F2766D",
                },
              }}
              variant="contained"
            >
              BROWSE OUR COACHES
            </Button>
          </Box>
        </Box>
        <Grid container spacing={3} mt={{ xs: 2, md: 0 }}>
          {card.map(({ src }, index) => (
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              mt={{ md: index == 1 ? -10 : 0, sm: 0, xs: 0 }}
              key={index}
            >
              <Box sx={{ textAlign: "center" }}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 4px 1px grey",
                    marginBottom: "-20px",
                  }}
                  src={src}
                  alt={"flower_1"}
                />
              </Box>
              <Box
                sx={{
                  background: "#fff",
                  boxShadow: " 2px 5px 10px  rgba(0, 0, 0, 0.1)",
                  pt: "5px",
                }}
              >
                <Box sx={{ textAlign: "center", p: "30px", lineHeight: "2" }}>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "13px",
                        color: "#549B7D",
                        lineHeight: "2",
                      }}
                    >
                      SEED PLAN
                    </Typography>
                    <Typography>$30 per Session</Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      Lorem Ipsum is simply dummy text LorIpsum has been the
                      industry'
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    p: "38px",
                    lineHeight: "2",
                    background: "#FAE5DC",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "13px", color: "#549B7D", lineHeight: "2" }}
                  >
                    INCLUDES
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    Lorem Ipsum is simply dummy text . LorIpsum has been the
                    industry'
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Pricecards;
