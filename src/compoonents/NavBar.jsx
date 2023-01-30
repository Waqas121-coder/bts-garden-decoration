import {
  Box,
  Typography,
  styled,
  Hidden,
  IconButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import React from "react";
import logo from "../images/logo.png";
// import { Link } from "react-router-dom";

let page = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Coaches",
    url: "/aoaches",
  },
  {
    name: "Conatct",
    url: "/conatct",
  },
  {
    name: "About",
    url: "/about",
  },
];
const NavBar = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            style={{
              width: "50px",
            }}
            src={logo}
            alt={"logo"}
          />
          <Typography
            sx={{
              width: {xs:"150px",md:"239px"},
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: {md:"20px",sm:"14px",xs:"14px"},

            }}
          >
            GARDEN TREATMENT
          </Typography>
        </Box>
        <Hidden mdDown>

          <Box sx={{ display: "flex", gap: "30px" }}>
            {page.map(({ name, url }, index) => (
              <Box key={index}>
                {/* <Link to={url}> */}
                <Typography >{name}</Typography>
                {/* </Link> */}
              </Box>
            ))}
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Sidebar />
        </Hidden>
      </Box>
    </Container>
  );
};

export default NavBar;
