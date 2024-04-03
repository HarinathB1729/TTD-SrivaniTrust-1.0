import {
  Box,
  Container,
  FormControl,
  Checkbox,
  ListItemText,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

const textBoxStyles = {
  backgroundColor: "white",
  width: "100%",
  marginBottom: "10px",
};
const boxStyles = { padding: "0 10px", textAlign: "left" };
const generatedReportStyle = {
  marginTop: "50px",
  height: "10vh",
  border: "1px solid grey",
  display: "flex",
  justifyContent: "space-between",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function Reports() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const reports_init_values = {
    district: "",
    mandal: "",
    panchayat:'',
    ward: "",
    colony: "",
    referred: "",
    startdate: "",
    enddate:''
  };

  const [reports, setReports] = useState(reports_init_values);
  const [personName, setPersonName] = useState([]);

  const clearDataHandler = (e) => {
    e.preventDefault();
    setReports(reports_init_values);
  };

  const dataHandler = (e) => {
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    setReports((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  console.log("reports",reports)

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Reports</h2>
      </div>
      <Container sx={{ border: "1px solid grey", minHeight: "58vh" }}>
        <form onSubmit={formSubmitHandler} autoComplete="off">
          <FormControl>
            <Grid style={{ marginTop: "20px" }} container>
              <Grid item xs={3}>
                <Box style={{ padding: "0 10px", textAlign: "left" }}>
                  <br />
                  <TextField
                    style={textBoxStyles}
                    select
                    name="district"
                    label="Name of the District"
                    placeholder="Name of the District"
                    SelectProps={{
                      multiple: true,
                      value: personName,
                      onChange: handleChange,
                      renderValue: (selected) => selected.join(", "),
                      MenuProps: MenuProps,
                    }}
                    variant="outlined"
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox  checked={personName.indexOf(name) > -1}/>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </TextField>

                  <br />
                  <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="colony"
                    placeholder="Colony"
                    variant="outlined"
                    label="Colony"
                    onChange={dataHandler}
                    value={reports?.colony}
                    error={error}
                  />
                  <br />

                  <br />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box style={boxStyles}>
                  <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="mandal"
                    value={reports?.mandal}
                    placeholder="Mandal"
                    label="Mandal"
                    variant="outlined"
                    onChange={dataHandler}
                  />
                  <br /> <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="referred"
                    value={reports?.referred}
                    label="Referred"
                    onChange={dataHandler}
                    placeholder="Referred"
                  />
                  <br />
                  <br />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box style={boxStyles}>
                  <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="panchayat"
                    placeholder="Panchayat"
                    variant="outlined"
                    label="Panchayat"
                    onChange={dataHandler}
                    value={reports?.panchayat}
                    error={error}
                  />
                  {error && (
                    <Typography sx={{ color: "red", fontSize: "0.8em" }}>
                      {errMsg}
                    </Typography>
                  )}
                  <br />
                  <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="startdate"
                    placeholder="Start Date"
                    variant="outlined"
                    type="date"
                    label="Start Date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={dataHandler}
                    value={reports?.startdate}
                    error={error}
                  />
                  <br />

                  <br />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box style={boxStyles}>
                  <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="ward"
                    value={reports?.ward}
                    placeholder="Ward"
                    label="Ward"
                    variant="outlined"
                    onChange={dataHandler}
                  />
                  <br /> <br />
                  <TextField
                    style={textBoxStyles}
                    required
                    name="enddate"
                    value={reports?.enddate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="End Date"
                    type="date"
                    onChange={dataHandler}
                    // placeholder="End Date"
                  />
                  <br />
                  <br />
                </Box>
              </Grid>
              <br />
              <br />
              <Grid
                item
                xs={12}
                className="center"
                style={{ marginTop: "10px", gap: "50px" }}
              >
                <Button
                  style={{ width: "100px" }}
                  variant="contained"
                  type="submit"
                >
                  submit
                </Button>

                <Button
                  style={{ width: "100px" }}
                  variant="contained"
                  color="error"
                  onClick={clearDataHandler}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>

        <Container className="center" style={generatedReportStyle}>
          <h2>Generated Report</h2>
          <PrintIcon />
        </Container>
      </Container>
    </>
  );
}

export default Reports;
