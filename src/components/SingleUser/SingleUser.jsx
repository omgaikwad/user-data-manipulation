import React from "react";
import styles from "./SingleUser.module.css";

const SingleUser = ({ user }) => {
  return (
    <div className={styles["single_user"]}>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default SingleUser;
