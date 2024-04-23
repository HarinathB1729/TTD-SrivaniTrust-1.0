import React from "react";
import PropTypes from "prop-types";
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
    if (e.target.name === "contactpersonphoneno") {
      if (isNaN(e.target.value)) return;
    }
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    props.setBmData((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };

  const handleFileSelect = (e) => {
    props.setFile(e.target.files[0]);
  };

  // console.log("selected file",selectedFile)

  return (
    <Grid item xs={4}>
      <Box style={{ padding: "10px", textAlign: "left" }}>
        <strong>Request Date: {new Date().toISOString().split("T")[0]}</strong>
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
          value={props.bmData?.assemblyname}
          error={props.bmdataResponseError?.assemblyname}
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
          value={props.bmData?.colonyname}
          error={props.bmdataResponseError?.colonyname}
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
          type="number"
          inputProps={{
            min: 0,
          }}
          onChange={dataHandler}
          value={props.bmData?.villagepopulation}
          error={props.bmdataResponseError?.villagepopulation}
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
          value={props.bmData?.templename}
          error={props.bmdataResponseError?.templename}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          type="file"
          name="file"
          placeholder="No file Choosen"
          InputLabelProps={{
            shrink: true,
          }}
          label="Documents of requestee"
          variant="outlined"
          onChange={handleFileSelect}
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
          value={props.bmData?.surveyno}
          error={props.bmdataResponseError?.surveyno}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="finsupportttd"
          placeholder="Details of financial support received from TTD"
          label="Details of financial support received from TTD"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.finsupportttd}
          error={props.bmdataResponseError?.finsupportttd}
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
          value={props.bmData?.nearbytempledetails}
          error={props.bmdataResponseError?.nearbytempledetails}
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
          value={props.bmData?.localscontribution}
          error={props.bmdataResponseError?.localscontribution}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="contactpersonphoneno"
          inputProps={{
            maxLength: 10,
          }}
          placeholder="Phone number of Contact"
          label="Phone number of Contact"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.contactpersonphoneno}
          error={props.bmdataResponseError?.contactpersonphoneno}
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
          value={props.bmData?.addlcomments}
          error={props.bmdataResponseError?.addlcomments}
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
          value={props.bmData?.templeage}
          error={props.bmdataResponseError?.templeage}
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
          value={props.bmData?.deityname}
          error={props.bmdataResponseError?.deityname}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="proposedworkdetails"
          placeholder="Details of works proposed"
          label="Details of works proposed"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.proposedworkdetails}
          error={props.bmdataResponseError?.proposedworkdetails}
        />
      </Box>
    </Grid>
  );
}

BMColumnTwo.propTypes = {
  setBmData: PropTypes.func.isRequired,
  setFile: PropTypes.func.isRequired,
  bmdataResponseError: PropTypes.object.isRequired,
};

export default BMColumnTwo;
