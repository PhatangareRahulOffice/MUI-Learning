import React from "react";
import { Masonry } from "@mui/lab";
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const height = [140, 120, 110, 125, 45, 65, 76, 89, 56, 55, 88, 76, 54, 32, 31];
function Masonarys() {
  return (
    <>
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {height.map((height, index) => (
            <Paper
              key={index}
              sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height,
                border: "1px solid",
              }}
            >

                <Accordion  sx={{minHeight: height}} >
                    <AccordionSummary expandIcon= {<ExpandMoreIcon/>}>
                        <Typography> Accordion {index + 1} </Typography>
                    </AccordionSummary>
                    <AccordionDetails> Content</AccordionDetails>
                </Accordion>
              {/* {index + 1} */}
            </Paper>
          ))}
        </Masonry>
      </Box>
    </>
  );
}

export default Masonarys;
