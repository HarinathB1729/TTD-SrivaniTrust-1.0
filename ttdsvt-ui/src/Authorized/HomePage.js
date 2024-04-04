import { Container } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="center" style={{ height: "15vh" }}>
        <h2 style={{ color: "#B31B1B" }}>TTD Srivani Trust</h2>
      </div>
      <Container
        sx={{
          textAlign: "justify",
          border: "1px solid black",
          padding:'20px',
          minHeight: "58vh",
        }}
      >
        <div>
          Sri Venkateswara Aalayala Nirmanam Trust (SRIVANI Trust) is
          established broadly with below objectives:
          <br />
          <ul>
            <li>
              Construction and Maintenance of Sri Venkateswara Swamy Temples at
              various locations across India.
            </li>
            <li>
              Providing amenities to perform religious rituals, functions and
              festivals.
            </li>
            <li>
              Renovate, Protect, Preserve and Maintain Gopurams and
              archaeological buildings which reflect the glory of Indian
              Culture, Tradition and History.
            </li>
          </ul>
          <p>
            SRIVANI Trust was constituted to construct Sri Venkateswara Swamy
            temples at various locations, all over the country, particularly in
            SC / ST / BC and weaker section colonies, more prone to religious
            conversions. The funds received by this Trust are also used for
            renovation of old and dilapidated temples and other Dharma Pracharam
            activities. In order to honour the contribution of the Donors
            towards the cause of Hindu Dharma Parirakshana, a onetime privilege
            of VlP Break Darsan was approved by the TTD Board for Donors
            contributing a minimum Rs.10 thousands to this Trust.
          </p>
        </div>
        <div>
          <strong>‘Karta Karayite chaiva prerakas syonu modaka’</strong> which
          means one who organizes or executive a noble task, encourages,
          approves and derives pleasure from it, enjoys all fruits of such a
          meritorious act. We earnestly appeal to all philanthropists to
          contribute generously to{" "}
          <strong>‘Sri Venkateswara Aalayala Nirmanam Trust (SRIVANI)</strong>{" "}
          and participate in this sacred endeavour. There is need for
          construction of Sri Venkateswara Swamy Temples, providing amenities to
          perform religious rituals, functions and festivals and also renovate,
          protect, preserve and maintain Gopurams and archaeological buildings
          temples in every village and in every town for universal welfare which
          reflect the glory of Indian Culture, Tradition and History . 
        </div>
      </Container>
    </>
  );
}

export default HomePage;
