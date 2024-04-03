import { Button, Container, FormControl, Grid } from "@mui/material";
import React, { useState } from "react";
import BMColumnOne from "./BMColumnOne";
import BMColumnTwo from "./BMColumnTwo";
import BMColumnThree from "./BMColumnThree";

function BhajanaMandiralu() {
  const bmData_init_values = {
    district: "",
    villagename:"",
    longitude:"",
    applicantname:"",
    phoneno:"",
    'landtitle-with':"",
    donorconsent:"",    
    othertemples:"",
    "amount-by-locals":"",
    "contactperson-particulars":"",
    "other-relevant-issues":"",
    "temple-history":"",
    "footfall-of-temple":"",
    "proposal-for-construction":"",
    assemblyname:"",
    colonyname:"",
    villagepopulation:"",
    templename:"",
    // documents:"", it is a filename
    surveyno:"",
    "fin-support-ttd":"",
    nearbytempledetails:"",
    localscontribution:"",
    "contactperson-phoneno":"",
    addlcomments:"",
    templeage:"",
    deityname:"",
    "proposed-work-details":"",
    mandal: "",
    latitude:"",
    "location-belongs-scstfisherman":"",
    email:"",
    landextent:"",
    boundaries:"",
    "any-earlier-temple":"",
    villagedetails:"",
    "contactperson-email":"",
    "recommendations-ins_off":"",
    "annualincome-temple":"",
    "category-temple":"",
  };
  const [bmData, setBmData] = useState(bmData_init_values);

  const clearDataHandler = (e) => {
    e.preventDefault();
    setBmData(bmData_init_values);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  console.log("bmdata", bmData);

  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>Bhajana Mandiralu</h2>
      </div>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "58vh",
        }}
      >
        <form onSubmit={formSubmitHandler} autoComplete="off">
          <Grid
            style={{
              width: "100%",
              border: "1px solid grey",
            }}
            container
          >
            <BMColumnOne setBmData={setBmData} />
            <BMColumnTwo setBmData={setBmData} />
            <BMColumnThree setBmData={setBmData} />

            <Grid
              item
              xs={12}
              className="center"
              style={{ margin: "25px", gap: "50px" }}
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
        </form>
      </Container>
    </>
  );
}

export default BhajanaMandiralu;
