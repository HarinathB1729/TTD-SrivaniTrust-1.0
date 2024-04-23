import React, { useState, useEffect } from "react";
import "../App.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Box, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { NavLink } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFC72C",
    color: theme.palette.common.white,
    position: "sticky",
    // opacity:'0.8',
    top: 0,
    zIndex: 100,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UsersData(props) {
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setUsersData(props.usersData);
  }, [props.usersData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Box
          className="center"
          sx={{
            padding: "0 30px",
            height: "12vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Users Data</h2>
          <NavLink to="/auth/newuser">
            <Button style={{ textTransform: "none" }}>
              <AddRoundedIcon style={{ color: "black" }} /> Add New User
            </Button>
          </NavLink>
        </Box>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone no.</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Permission</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? usersData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : usersData
            ).map((row, i) => (
              <StyledTableRow key={row?.username + String(i)}>
                <StyledTableCell component="th" scope="row">
                  {row?.username}
                </StyledTableCell>
                <StyledTableCell align="left">{row?.email}</StyledTableCell>
                <StyledTableCell align="left">{row?.phoneno}</StyledTableCell>
                <StyledTableCell align="left">{row?.role}</StyledTableCell>
                <StyledTableCell align="left">
                  {row?.permission}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <NavLink
                    to={{ pathname: "/auth/updateuser", search: row.username }}
                  >
                    <EditNoteIcon />
                  </NavLink>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        component="div"
        count={usersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
