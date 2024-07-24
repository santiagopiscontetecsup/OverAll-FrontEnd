import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CListGroup,
  CListGroupItem,
  CImage,
  CForm,
  CFormInput,
} from "@coreui/react";
import Header from "./components/header/index"; 
import { users } from "../../../data/dataUser/userData"; 

const UserProfile = () => {
  const currentUser = users[0]; 
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(currentUser);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  if (!currentUser) {
    return <div>Loading...</div>; 
  }

  return (
    <CRow>
      <CCol xs={12}>
        <Header currentUser={currentUser}>
          <CRow className="mt-4">
            <CCol xs={12} md={6} xl={4}>
              <CCard>
                <CCardHeader>
                  <strong>Profile</strong>
                </CCardHeader>
                <CCardBody className="text-center">
                  <CImage
                    src={currentUser.profileImage}
                    className="mb-3"
                    alt="Profile Image"
                    width={150}
                    height={150}
                    roundedCircle
                  />
                  <h5>{currentUser.name}</h5>
                  <p className="text-muted">{currentUser.access}</p>
                  <CListGroup>
                    <CListGroupItem>
                      <strong>Email: </strong>{currentUser.email}
                    </CListGroupItem>
                    <CListGroupItem>
                      <strong>Phone: </strong>{currentUser.phone}
                    </CListGroupItem>
                  </CListGroup>
                  <CButton color="primary" className="mt-3" onClick={handleEditClick}>
                    Edit Profile
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs={12} md={6} xl={8}>
              {isEditing ? (
                <CCard>
                  <CCardHeader>
                    <strong>Edit Profile</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CForm>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre Completo</label>
                        <CFormInput
                          id="name"
                          name="name"
                          value={editedUser.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <CFormInput
                          id="email"
                          name="email"
                          value={editedUser.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Celular</label>
                        <CFormInput
                          id="celular"
                          name="celular"
                          value={editedUser.celular}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Ubicacion" className="form-label">Ubicación</label>
                        <CFormInput
                          id="ubicacion"
                          name="ubicacion"
                          value={editedUser.ubicacion}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Descripcion" className="form-label">Descripción</label>
                        <CFormInput
                          id="descripcion"
                          name="descripcion"
                          value={editedUser.descripcion}
                          onChange={handleChange}
                        />
                      </div>
                      <CButton color="primary" onClick={handleSaveClick}>
                        Save Profile
                      </CButton>
                    </CForm>
                  </CCardBody>
                </CCard>
              ) : (
                <CCard>
                  <CCardHeader>
                    <strong>Edit Profile</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CListGroup>
                      <CListGroupItem>
                        <strong>Nombres Completos: </strong>{currentUser.name}
                      </CListGroupItem>
                      <CListGroupItem>
                        <strong>Email: </strong>{currentUser.email}
                      </CListGroupItem>
                      <CListGroupItem>
                        <strong>Celular: </strong>{currentUser.phone}
                      </CListGroupItem>
                      <CListGroupItem>
                        <strong>Ubicación: </strong>{currentUser.location}
                      </CListGroupItem>
                      <CListGroupItem>
                        <strong>Descripción: </strong>{currentUser.location}
                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCard>
              )}
            </CCol>
          </CRow>
        </Header>
      </CCol>
    </CRow>
  );
};

export default UserProfile;
