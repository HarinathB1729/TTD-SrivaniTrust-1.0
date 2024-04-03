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

function BMColumnThree(props) {

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
        <strong>State: * Andhra Pradesh</strong>
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="mandal"
          placeholder="Name of the Mandal"
          label="Name of the Mandal"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="latitude"
          placeholder="Latitude of the location"
          label="Latitude of the location"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="location-belongs-scstfisherman"
          placeholder="Specify if the proposed location is SC/ST/Fisherman colony "
          label="Specify if the proposed location is SC/ST/Fisherman colony "
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="email"
          type="email"
          placeholder="Email Address"
          label="Email Address"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="landextent"
          placeholder="Extent of land available for the purpose"
          label="Extent of land available for the purpose"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="boundaries"
          placeholder="Boundaries - East, South,West,North"
          label="Boundaries - East, South,West,North"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="any-earlier-temple"
          placeholder="Any earlier for the said temple"
          label="Any earlier for the said temple"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="villagedetails"
          placeholder="Details of villages covered if the proposal is accepted"
          label="Details of villages covered if the proposal is accepted"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="contactperson-email"
          placeholder="Email of the contact person"
          label="Email of the contact person"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="recommendations-ins_off"
          placeholder="Recommendation of the Inspecting Officer"
          label="Recommendation of the Inspecting Officer"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br /> <br />
        <br /> <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          type="number"
          inputProps={{
            min: 0,
          }}
          name="annualincome-temple"
          placeholder="Annual income of the Temple Rs. In lakhs"
          label="Annual income of the Temple Rs. In lakhs"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="category-temple"
          placeholder="Category of the temple(Endowments/Private etc)"
          label="Category of the temple(Endowments/Private etc)"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
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
        */}
      </Box>
    </Grid>
  );
}

export default BMColumnThree;
