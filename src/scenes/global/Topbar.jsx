import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" justifyContent="left" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      {/* SEARCH BAR */}
      <Box display="flex" justifyContent="right" p={2}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="55px"
                height="55px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "25%" }}
              />
            </Box>
            {/* <PersonOutlinedIcon /> */}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
