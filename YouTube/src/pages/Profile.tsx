import React from "react";
import { useUser } from "../hooks/useUser";

const Profile = () => {
  const { data } = useUser();
  console.log(data);

  return <div>

  </div>;
};

export default Profile;
