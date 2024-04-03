import React from "react";
import DOMPurify from "dompurify";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Box,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

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


function BMColumnOne(props) {
  
  const dataHandler = (e) => {
    const sanitized_name = DOMPurify.sanitize(e.target.name);
    const sanitized_value = DOMPurify.sanitize(e.target.value);

    props.setBmData((prev) => ({
      ...prev,
      [sanitized_name]: sanitized_value,
    }));
  };
  const [personName, setPersonName] = React.useState([]);


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </TextField>

        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="Name of the Village"
          placeholder="Name of the Village"
          label="villagename"
          variant="outlined"
          onChange={dataHandler}
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
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="phoneno"
          // type="number"
          inputProps={{
            maxLength:10
          }}
          placeholder="Phone number"
          label="Phone number"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br /> 
        <TextField
          style={textBoxStyles}
          required
          name="landtitle-with"
          placeholder="Title of the land vests with ( Name of the individual/Govt./Temple etc.)"
          label="Title of the land vests ( Name of the individual/Govt./Temple etc.)"
          variant="outlined"
          onChange={dataHandler}
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
        />
        <br />
        <br /> 
       
        <TextField
          style={textBoxStyles}
          required
          name="amount-by-locals"
          placeholder="Amount in Rs. Proposed to be contribute by the locals if any"
          label="Amount in Rs. Proposed to be contribute by the locals if any"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="contactperson-particulars"
          placeholder="Particulars of the contact person"
          label="Particulars of the contact person"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br /> 
        <TextField
          style={textBoxStyles}
          required
          name="other-relevant-issues"
          placeholder="Other relevant issues, if any"
          label="Other relevant issues, if any"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="temple-history"
          placeholder="History/Importance/Sthalapuram of the temple proposed"
          label="History/Importance/Sthalapuram of the temple proposed"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="footfall-of-temple"
          placeholder="Footfall of temple(On normal days,Weekends,Special occasions)"
          label="Footfall of temple(On normal days,Weekends,Special occasions)"
          variant="outlined"
          onChange={dataHandler}
        />
        <br />
        <br />
        <TextField
          style={textBoxStyles}
          required
          name="proposal-for-construction"
          placeholder="Proposed for Renovation/Re-construction/New Construction"
          label="Proposed for Renovation/Re-construction/New Construction"
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

export default BMColumnOne;
