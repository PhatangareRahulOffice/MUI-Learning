import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Tabels() {
  return (
    <>
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-label='simple-table'stickyHeader >
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>LatName</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row =>(
                        <TableRow key={row.id}
                         sx={{'&:last-child td, &:last-child th':{border:0}}}
                        >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell align='center'>{row.email}</TableCell>

                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}

export default Tabels

const tableData = [
    {
    "id": 1,
    "first_name": "Kippy",
    "last_name": "Nice",
    "email": "knice0@redcross.org",
    "gender": "Male",
    "ip_address": "137.149.164.90"
  }, {
    "id": 2,
    "first_name": "Marv",
    "last_name": "Burton",
    "email": "mburton1@mozilla.com",
    "gender": "Male",
    "ip_address": "236.82.140.45"
  }, {
    "id": 3,
    "first_name": "Ashleigh",
    "last_name": "Thacke",
    "email": "athacke2@ow.ly",
    "gender": "Female",
    "ip_address": "217.91.205.3"
  }, {
    "id": 4,
    "first_name": "Natka",
    "last_name": "Emtage",
    "email": "nemtage3@gravatar.com",
    "gender": "Female",
    "ip_address": "220.176.64.206"
  }, {
    "id": 5,
    "first_name": "Eloisa",
    "last_name": "Oakey",
    "email": "eoakey4@tumblr.com",
    "gender": "Female",
    "ip_address": "132.104.247.108"
  }, {
    "id": 6,
    "first_name": "Lonnie",
    "last_name": "Rollett",
    "email": "lrollett5@bizjournals.com",
    "gender": "Female",
    "ip_address": "120.151.18.134"
  }, {
    "id": 7,
    "first_name": "Halsey",
    "last_name": "Imort",
    "email": "himort6@php.net",
    "gender": "Male",
    "ip_address": "38.250.159.44"
  }, {
    "id": 8,
    "first_name": "Tova",
    "last_name": "Bernardotti",
    "email": "tbernardotti7@google.com.hk",
    "gender": "Female",
    "ip_address": "240.3.140.229"
  }, {
    "id": 9,
    "first_name": "Urbanus",
    "last_name": "Pritchett",
    "email": "upritchett8@theglobeandmail.com",
    "gender": "Male",
    "ip_address": "145.10.253.54"
  }, {
    "id": 10,
    "first_name": "Robena",
    "last_name": "Klempke",
    "email": "rklempke9@cocolog-nifty.com",
    "gender": "Female",
    "ip_address": "85.207.159.111"
  }]