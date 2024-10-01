import React from "react";
import PropTypes from "prop-types";
import { CCard, CRow, CCol, CImage, CButton } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import bgProfile from "../../../../../assets/Header/bg-profile.jpeg";
import { cilBell, cilCommentSquare } from "@coreui/icons";

function Header({ children, currentUser }) {
  return (
    <div style={{ position: "relative", marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          minHeight: "18.75rem",
          borderRadius: "0.5rem",
          backgroundImage: `linear-gradient(rgba(77, 182, 172, 0.6), rgba(77, 182, 172, 0.6)), url(${bgProfile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      />
      <CCard style={{ position: "relative", marginTop: "-4rem", marginLeft: "1rem", marginRight: "1rem", padding: "1rem" }}>
        <CRow className="align-items-center">
          <CCol xs={12} md={4} className="text-center">
            <CImage src={currentUser?.profileImage} alt="profile-image" className="rounded-circle" width={150} height={150} />
          </CCol>
          <CCol xs={12} md={6}>
            <h5>{currentUser?.name}</h5>
            <p>{currentUser?.access}</p>
            <p>{currentUser?.description}</p> 
          </CCol>
        </CRow>
        {children}
      </CCard>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  currentUser: PropTypes.object.isRequired,
};

export default Header;