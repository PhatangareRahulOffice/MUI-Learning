import {useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FavoriteIcon from '@mui/icons-material/Favorite';
function Tabes() {

    const [value , setValue] = useState('1')
    const handleChange =(e, newValue)=>{
        setValue(newValue)

    }
  return (
    <>
      <Box>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="Tabs example" onChange={handleChange} textColor="secondary" indicatorColor="secondary" centered >
              <Tab label="Tab One" value="1" icon={<FavoriteIcon/>} iconPosition="start" ></Tab>
              <Tab label="Tab Two" value="2"></Tab>
              <Tab label="Tab Three" value="3"></Tab>
            </TabList>
          </Box>
          <TabPanel value="1"> Panel one</TabPanel>
          <TabPanel value="2"> Panel two</TabPanel>
          <TabPanel value="3"> Panel three</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default Tabes;
