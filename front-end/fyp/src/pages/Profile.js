import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { PageTitle } from "../styles/texts/Global";
// import {
//   UserInfoContainer,
//   UsernameHeader,
//   HelloHeader,
//   DescriptionHeader,
//   ProfileArt,
//   Button,
//   Div,
//   MainContainer,
// } from "../styles/profile/Global";
// import profileArt from "../img/profileArt.svg";
// import { scrollTo } from "../functions/global/global";

const Profile = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    // console.log("PROFILE", currentUser);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar user={currentUser} />
      <PageTitle>{currentUser.displayName}</PageTitle>

      {/* <MainContainer maxWidth="lg">
        <Div>
          <ProfileArt src={profileArt} />
        </Div>
        <UserInfoContainer>
          <HelloHeader>Hello!</HelloHeader>
          <UsernameHeader>{currentUser.displayName}</UsernameHeader>
          <DescriptionHeader>
            This is where all your collected results will be displayed.
          </DescriptionHeader>
          <Button onClick={() => scrollTo("test")}>My Profile</Button>
        </UserInfoContainer>
      </MainContainer>

      <p id="test" style={{ marginTop: "50px" }}>
        {currentUser.displayName}
      </p> */}
    </>
  );
};

export default Profile;
