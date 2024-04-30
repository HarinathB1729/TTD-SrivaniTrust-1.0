import { Box, Container, MenuItem } from "@mui/material";
import React, { useState } from "react";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PrintIcon from "@mui/icons-material/Print";
import { reportsApiCall } from "../api";
import { useNavigate } from "react-router-dom";

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
  "Anantapur",
  "Chittoor",
  "East Godavari",
  "Guntur",
  "Krishna",
  "Kurnool",
  "Prakasam",
  "Sri Potti Sriramulu Nellore",
  "Srikakulam",
  "Visakhapatnam",
  "Vizianagaram",
  "West Godavari",
  "YSR Kadapa",
];

function Reports(props) {
  const navigate = useNavigate();
  const reports_init_values = {
    district: "",
    mandal: "",
    panchayat: "",
    ward: "",
    colony: "",
    referred: "",
    startdate: "",
    enddate: "",
  };

  const [reports, setReports] = useState(reports_init_values);
  const [reportsData, setReportsData] = useState([]);

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

  const printingDocument = () => {
    // Convert JSON to a readable string with indentation
    let jsonString = JSON.stringify(reportsData, null, 2);

    // Open a new window or tab
    let printWindow = window.open("", "_blank");
    printWindow.document.write("<pre>" + jsonString + "</pre>");

    // Trigger the print functionality
    printWindow.print();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    reportsApiCall(reports,props.token)
      .then((data) => {
        // console.log("response", res);
        if (data) {
          setReportsData(data);
        }
      })
      .catch((err) => {
        if(err.response.status==401) navigate("/")
        console.log("Error :", err);
      });
  };

  // console.log("reports", reports);
  // console.log("isauthenticated", isAuthenticated);
  // console.log("reportsdata", reportsData);
  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Reports</h2>
      </div>
      <Container sx={{ border: "1px solid grey", minHeight: "58vh" }}>
        <form
          name="report_form"
          onSubmit={formSubmitHandler}
          autoComplete="off"
        >
          <Grid style={{ marginTop: "20px" }} container>
            <Grid item xs={3}>
              <Box style={{ padding: "0 10px", textAlign: "left" }}>
                <br />
                <TextField
                  style={textBoxStyles}
                  select
                  required
                  name="district"
                  label="Name of the District"
                  placeholder="Name of the District"
                  SelectProps={{
                    value: reports?.district,
                    onChange: dataHandler,
                    renderValue: (selected) => selected,
                    MenuProps: MenuProps,
                  }}
                  variant="outlined"
                  InputLabelProps={{
                    htmlFor: "district", // This should match the id of the input field
                  }}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>

                <br />
                <br />
                <TextField
                  style={textBoxStyles}
                  name="colony"
                  placeholder="Colony"
                  variant="outlined"
                  label="Colony"
                  onChange={dataHandler}
                  value={reports?.colony}
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
                  name="panchayat"
                  placeholder="Panchayat"
                  variant="outlined"
                  label="Panchayat"
                  onChange={dataHandler}
                  value={reports?.panchayat}
                />

                <br />
                <br />
                <TextField
                  style={textBoxStyles}
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
                disabled={
                  !reports?.district &&
                  !reports?.colony &&
                  !reports?.enddate &&
                  !reports?.startdate &&
                  !reports?.mandal &&
                  !reports?.panchayat &&
                  !reports?.referred &&
                  !reports?.ward
                }
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
        </form>

        <Container className="center" style={generatedReportStyle}>
          <h2>{reportsData.length > 0 ? "Generated Report" : "No Data "}</h2>
          {reportsData.length > 0 && <PrintIcon onClick={printingDocument} />}
        </Container>
      </Container>
    </>
  );
}

export default Reports;
