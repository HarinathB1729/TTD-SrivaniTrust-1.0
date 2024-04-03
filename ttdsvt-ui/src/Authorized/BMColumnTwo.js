import React from "react";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const textBoxStyles = {
  backgroundColor: "white",
  width: "100%",
  marginBottom: "10px",
};

function BMColumnTwo(props) {

  const dataHandler = (e) => {
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    props.setBmData((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };

  
  return (
    <Grid item xs={4}>
      <Box style={{ padding: "10px", textAlign: "left" }}>
        <strong>Request Date: {"Date"}</strong>
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="assemblyname"
          placeholder="Name of the Assembly Constituency"
          label="Name of the Assembly Constituency"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="colonyname"
          placeholder="Name of Hamlet, Colony"
          label="Name of Hamlet, Colony"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="villagepopulation"
          placeholder="Population of the Village/ Hamlet/ Colony"
          label="Population of the Village/ Hamlet/ Colony"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="templename"
          placeholder="Name of the Temple proposed to be constructed"
          label="Name of the Temple proposed to be constructed"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          type="file"
          name="documents"
          //   placeholder="No file Choosen"
          InputLabelProps={{
            shrink: true,
          }}
          label="Documents of requestee"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="surveyno"
          placeholder="Survey No."
          label="Survey No."
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="fin-support-ttd"
          placeholder="Details of financial support received from TTD"
          label="Details of financial support received from TTD"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="nearbytempledetails"
          placeholder="Details of temples available in the nearby villages with approximate distance."
          label="Details of temples available in nearby villages with approx distance."
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="localscontribution"
          placeholder="Contribution proposed by the locals if any - (not amount)"
          label="Contribution proposed by the locals if any - (not amount)"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="contactperson-phoneno"
          placeholder="Phone number of Contact"
          label="Phone number of Contact"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="addlcomments"
          placeholder="Additional Comments"
          label="Additional Comments"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="templeage"
          type="number"
          inputProps={{
            min: 0,
          }}
          placeholder="Age of the temple"
          label="Age of the temple"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="deityname"
          placeholder="Name of the diety of the temple"
          label="Name of the diety of the temple"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="proposed-work-details"
          placeholder="Details of works proposed"
          label="Details of works proposed"
          variant="outlined"
          onChange={dataHandler}
        />
        {/* 
        <TextField
          style={textBoxStyles}
          required
          name=""
          placeholder=""
          label=""
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name=""
          placeholder=""
          label=""
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name=""
          placeholder=""
          label=""
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br /> 
        */}
      </Box>
    </Grid>
  );
}

export default BMColumnTwo;
