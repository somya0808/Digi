import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import styled from "styled-components";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const GoogleButton = styled.button`
  ::before {
    content: url("./Self-transfer (1).svg");
  }`;
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header subtitle="Current Account Balance" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="flex"
        justifyContent="space-between"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="40px"
      >
        {/* ROW 1 */}
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
          {/* ROW 2 */}
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            display="flex"
            marginBottom="20px"
            width="870px"
            height="130px"
            backgroundColor={colors.primary[400]}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              marginTop="40px"
            >
              <StatBox title="Rs. 44,500" subtitle="Current balance" />
            </Box>
            <Box
              gridColumn="span 3"
              gridRow="span 6"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <GoogleButton>here</GoogleButton>
              
              <StatBox
                subtitle="Add Money to wallet"
                //   sx={{
                //     backgroundColor:colors.grey[400],
                //     color:colors.primary[700],
                //     fontSize:"14px",
                //     fontWeight:"bold",
                //     padding:"10px 20px",
                // }}
              >
                <button>
                  <logo >Add Money to Wallet </logo>
                </button>
                <Button>
                  <svg
                    width="58"
                    height="59"
                    viewBox="0 0 58 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_2563)">
                      <rect
                        x="2"
                        y="2.03247"
                        width="50"
                        height="50.0061"
                        rx="5"
                        fill="white"
                      />
                      <rect
                        x="2.5"
                        y="2.53247"
                        width="49"
                        height="49.0061"
                        rx="4.5"
                        stroke="#DADADA"
                      />
                    </g>
                    <path
                      d="M20 27.0355C22.21 27.0355 24 25.2453 24 23.035C24 20.8248 22.21 19.0345 20 19.0345C17.79 19.0345 16 20.8248 16 23.035C16 25.2453 17.79 27.0355 20 27.0355ZM20 29.0358C17.33 29.0358 12 30.3759 12 33.0363V35.0365H28V33.0363C28 30.3759 22.67 29.0358 20 29.0358Z"
                      fill="#2571F0"
                    />
                    <path
                      d="M39 32.0461V25.0353H37V32.0461H34L38 36.0366L42 32.0461H39V32.0461ZM32 18.0344L28 22.0249H31V29.0358H33V22.0249H36L32 18.0344Z"
                      fill="#2571F0"
                    />
                    <defs>
                      <filter
                        id="filter0_d_1_2563"
                        x="0"
                        y="0.0324707"
                        width="58"
                        height="58.0061"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2" dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_2563"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_2563"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Button>
              </StatBox>
            </Box>
            <Box
              gridColumn="span 3"
              gridRow="span 6"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                subtitle="Emails Sent"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="1,325,134"
                subtitle="Traffic Received"
                progress="0.80"
                increase="+43%"
                icon={
                  <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header subtitle="Transfer Money" />
          </Box>
          <Box display="flex" justifyContent="space-around" height="130px">
            <Box
              gridColumn="span 3"
              gridRow="span 6"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                subtitle="Emails Sent"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              gridRow="span 6"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                subtitle="Emails Sent"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              gridRow="span 6"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                subtitle="Emails Sent"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              width="400px"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
