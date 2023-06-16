import { useState } from "react";
import TopBar from "./scenes/global/TopBar";
import {ColorModeContext,useMode} from './theme';
import { CssBaseline,ThemeProvider } from "@mui/material";
import {Routes,Route} from "react-router-dom";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
// import e_rupi_vouchers from "./scenes/e_rupi_vouchers";
// import Transaction from "./scenes/transaction";
// import Profile from "./scenes/profile";
// import Promotions from "./scenes/promotions";

function App() {
  const [theme,colorMode] = useMode();
  const [isSidebar,setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="App">
            <SideBar isSidebar={isSidebar}/>
            <main className="content justify-content-evenly">
              <TopBar setIsSidebar={setIsSidebar}/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                {/* <Route path="/e_rupi_vouchers" element={<e_rupi_vouchers/>}/> */}
                {/* <Route path="/transaction" element={<Transaction/>}/> */}
                {/* <Route path="/profile" element={<Profile/>}/> */}
                {/* <Route path="/promotions" element={<Promotions/>}/> */}
              </Routes>
              </main>
          </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
