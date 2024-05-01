import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import BMColumnOne from "./BMColumnOne";
import BMColumnTwo from "./BMColumnTwo";
import BMColumnThree from "./BMColumnThree";
import { bhajanaMandiraluApiCall } from "../api";
import { useAuth } from "./AuthProvider";

function BhajanaMandiralu() {
  const { isAuthenticated } = useAuth();
  const token = isAuthenticated.token;

  const bmData_init_values = {
    district: "",
    villagename: "",
    longitude: "",
    applicantname: "",
    phoneno: "",
    landtitlewith: "",
    donorconsent: "",
    othertemples: "",
    amountbylocals: "",
    contactpersonparticulars: "",
    otherrelevantissues: "",
    templehistory: "",
    footfalloftemple: "",
    proposalforconstruction: "",
    assemblyname: "",
    colonyname: "",
    villagepopulation: "",
    templename: "",
    file: "",
    surveyno: "",
    finsupportttd: "",
    nearbytempledetails: "",
    localscontribution: "",
    contactpersonphoneno: "",
    addlcomments: "",
    templeage: "",
    deityname: "",
    proposedworkdetails: "",
    mandal: "",
    latitude: "",
    locationbelongsscstfisherman: "",
    email: "",
    landextent: "",
    boundaries: "",
    anyearliertemple: "",
    villagedetails: "",
    contactpersonemail: "",
    recommendationsinsoff: "",
    annualincometemple: "",
    categorytemple: "",
    startdate: new Date().toISOString().split("T")[0],
  };
  const [bmData, setBmData] = useState(bmData_init_values);
  const [bmdataResponseError, setBmdataResponseError] = useState({});
  const [file, setFile] = useState({});
  const navigate = useNavigate();

  const clearDataHandler = (e) => {
    e.preventDefault();
    setBmData(bmData_init_values);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    for (const key in bmData) {
      if (bmData.hasOwnProperty(key)) {
        formData.append(key, bmData[key]);
      }
    }

    bhajanaMandiraluApiCall(formData, token)
      .then((data) => {
        // console.log("response",data)
        window.alert(data["message"]);
        navigate("/auth/");
      })
      .catch((err) => {
        if (err.response.status === 401) navigate("/");
        console.log("Error :", err);
        setBmdataResponseError(err.response.data);
      });
  };
  // console.log("bmdata", bmData);
  // console.log("bmdataResponse Error", bmdataResponseError);

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
        <form name="bm_form" onSubmit={formSubmitHandler} autoComplete="off">
          <Grid
            style={{
              width: "100%",
              border: "1px solid grey",
            }}
            container
          >
            <BMColumnOne
              bmdataResponseError={bmdataResponseError}
              bmData={bmData}
              setBmData={setBmData}
            />
            <BMColumnTwo
              bmdataResponseError={bmdataResponseError}
              bmData={bmData}
              setBmData={setBmData}
              setFile={setFile}
            />
            <BMColumnThree
              bmdataResponseError={bmdataResponseError}
              bmData={bmData}
              setBmData={setBmData}
            />

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
