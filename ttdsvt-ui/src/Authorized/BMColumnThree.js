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
          value={props.bmData?.mandal}
          error={props.bmdataResponseError?.mandal}
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
          value={props.bmData?.latitude}
          error={props.bmdataResponseError?.latitude}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="locationbelongsscstfisherman"
          placeholder="Specify if the proposed location is SC/ST/Fisherman colony "
          label="Specify if the proposed location is SC/ST/Fisherman colony "
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.locationbelongsscstfisherman}
          error={props.bmdataResponseError?.locationbelongsscstfisherman}
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
          value={props.bmData?.email}
          error={props.bmdataResponseError?.email}
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
          value={props.bmData?.landextent}
          error={props.bmdataResponseError?.landextent}
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
          value={props.bmData?.boundaries}
          error={props.bmdataResponseError?.boundaries}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="anyearliertemple"
          placeholder="Any earlier for the said temple"
          label="Any earlier for the said temple"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.anyearliertemple}
          error={props.bmdataResponseError?.anyearliertemple}
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
          value={props.bmData?.villagedetails}
          error={props.bmdataResponseError?.villagedetails}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="contactpersonemail"
          placeholder="Email of the contact person"
          label="Email of the contact person"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.contactpersonemail}
          error={props.bmdataResponseError?.contactpersonemail}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="recommendationsinsoff"
          placeholder="Recommendation of the Inspecting Officer"
          label="Recommendation of the Inspecting Officer"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.recommendationsinsoff}
          error={props.bmdataResponseError?.recommendationsinsoff}
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
          name="annualincometemple"
          placeholder="Annual income of the Temple Rs. In lakhs"
          label="Annual income of the Temple Rs. In lakhs"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.annualincometemple}
          error={props.bmdataResponseError?.annualincometemple}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="categorytemple"
          placeholder="Category of the temple(Endowments/Private etc)"
          label="Category of the temple(Endowments/Private etc)"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.categorytemple}
          error={props.bmdataResponseError?.categorytemple}
        />
        <br />
        <br />
      </Box>
    </Grid>
  );
}

BMColumnThree.propTypes = {
  setBmData: PropTypes.func.isRequired,
  bmdataResponseError: PropTypes.object.isRequired,
};

export default BMColumnThree;
