import { Link, Route, Routes } from "react-router-dom";
import Login from "./other/Login/Login";
import Signup from "./other/Signup/Signup";
import Cart from "./other/Cart/Cart";
import { Box, Button } from "@chakra-ui/react";
import All from "./All";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/other" element={<All />} />
        <Route path="/*" element={
          <>
            <h1 style={{ textAlign: 'center', fontSize: '40px', marginTop: "20px" }}>404 Page Not Found</h1>
            <Box textAlign={'center'}>
              <Link to={'/'}>
                <Button  mt={'20px'} fontSize={'20px'} p={10}>Go back</Button>
              </Link>
            </Box>
          </>
        } />
      </Routes>
    </>
  );
};

export default App;
