import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, MenuItem } from "@mui/material";

const textBoxStyles = {
  backgroundColor: "white",
  width: "100%",
  marginBottom: "10px",
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

function BMColumnOne(props) {
  const dataHandler = (e) => {
    if (e.target.name === "phoneno") {
      if (isNaN(e.target.value)) return;
    }
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
        <strong>Request Type: Bhajana Mandiralu</strong>
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          select
          required
          name="district"
          label="Name of the District "
          placeholder="Name of the District"
          SelectProps={{
            value: props.bmData?.district || "",
            onChange: dataHandler,
            renderValue: (selected) => selected,
            MenuProps: MenuProps,
          }}
          variant="outlined"
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
          required
          name="villagename"
          placeholder="Name of the Village"
          label="villagename"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.villagename}
          error={props.bmdataResponseError?.villagename}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="longitude"
          placeholder="Longitude of the location"
          label="Longitude of the location"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.longitude}
          error={props.bmdataResponseError?.longitude}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="applicantname"
          placeholder="Name of individual/Temple etc., who made the request"
          label="Name of individual/Temple etc., who made the request"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.applicantname}
          error={props.bmdataResponseError?.applicantname}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="phoneno"
          inputProps={{
            maxLength: 10,
          }}
          placeholder="Phone number"
          label="Phone number"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.phoneno}
          error={props.bmdataResponseError?.phoneno}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="landtitlewith"
          placeholder="Title of the land vests with ( Name of the individual/Govt./Temple etc.)"
          label="Title of the land vests ( Name of the individual/Govt./Temple etc.)"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.landtitlewith}
          error={props.bmdataResponseError?.landtitlewith}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="donorconsent"
          placeholder="Whether acceptance given for donating the land in favour of the proposed New Temple"
          label="Consent given for donating the land in favour of New Temple"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.donorconsent}
          error={props.bmdataResponseError?.donorconsent}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="othertemples"
          placeholder="Details of other temples available in the vicinity"
          label="Details of other temples available in the vicinity"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.othertemples}
          error={props.bmdataResponseError?.othertemples}
        />
        <br />
        <br />

        <TextField
          style={textBoxStyles}
          required
          name="amountbylocals"
          type="number"
          inputProps={{
            min: 0,
          }}
          placeholder="Amount in Rs. Proposed to be contribute by the locals if any"
          label="Amount in Rs. Proposed to be contribute by the locals if any"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.amountbylocals}
          error={props.bmdataResponseError?.amountbylocals}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="contactpersonparticulars"
          placeholder="Particulars of the contact person"
          label="Particulars of the contact person"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.contactpersonparticulars}
          error={props.bmdataResponseError?.contactpersonparticulars}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="otherrelevantissues"
          placeholder="Other relevant issues, if any"
          label="Other relevant issues, if any"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.otherrelevantissues}
          error={props.bmdataResponseError?.otherrelevantissues}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="templehistory"
          placeholder="History/Importance/Sthalapuram of the temple proposed"
          label="History/Importance/Sthalapuram of the temple proposed"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.templehistory}
          error={props.bmdataResponseError?.templehistory}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="footfalloftemple"
          type="number"
          inputProps={{
            min: 0,
          }}
          placeholder="Footfall of temple(On normal days,Weekends,Special occasions)"
          label="Footfall of temple(On normal days,Weekends,Special occasions)"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.footfalloftemple}
          error={props.bmdataResponseError?.footfalloftemple}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="proposalforconstruction"
          placeholder="Proposed for Renovation/Re-construction/New Construction"
          label="Proposed for Renovation/Re-construction/New Construction"
          variant="outlined"
          onChange={dataHandler}
          value={props.bmData?.proposalforconstruction}
          error={props.bmdataResponseError?.proposalforconstruction}
        />
        <br />
        <br />
      </Box>
    </Grid>
  );
}

BMColumnOne.propTypes = {
  bmData: PropTypes.object.isRequired,
  setBmData: PropTypes.func.isRequired,
  bmdataResponseError: PropTypes.object.isRequired,
};

export default BMColumnOne;
