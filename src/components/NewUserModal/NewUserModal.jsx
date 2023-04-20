import React, { useEffect, useState } from "react";
import styles from "./NewUserModal.module.css";

const NewUserModal = ({ closeAddUserModal, addNewUser }) => {
  // user state
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //  error state
  const [error, setError] = useState({
    showError: false,
    errorMessage: "",
  });
  //  clear all states when modal is closed
  useEffect(() => {
    return () => {
      setUser({
        name: "",
        email: "",
        phone: "",
      });

      setError({
        showError: false,
        errorMessage: "",
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name === "" || user.email === "" || user.phone === "") {
      setError({
        showError: true,
        errorMessage: "Please fill all the fields",
      });
      return;
    }

    addNewUser(user);
  };

  return (
    <div className={styles["modal_background"]}>
      <div className={styles["modal_container"]}>
        <div className={styles["modal_heading"]}>
          <button
            onClick={() => closeAddUserModal()}
            className={styles["close_btn"]}
          >
            X
          </button>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className={styles["new_user_form"]}
          action=""
        >
          <input
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            placeholder="Add Name"
            className={styles["modal_input"]}
            type="text"
            name="name"
            id="name"
            value={user.name}
          />
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="Add Email"
            className={styles["modal_input"]}
            type="email"
            name="email"
            id="email"
            value={user.email}
          />
          <input
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
            }}
            placeholder="Add Phone"
            className={styles["modal_input"]}
            type="text"
            name="phone"
            id="phone"
            value={user.phone}
          />

          <div className={styles["modal_button_container"]}>
            <button
              onClick={() => closeAddUserModal()}
              className={styles["modal_cancel_btn"]}
            >
              Cancel
            </button>

            <button type="submit" className={styles["modal_add_btn"]}>
              Add
            </button>
          </div>
        </form>

        {error.showError && (
          <div className={styles["error_container"]}>
            <p className={styles["error_text"]}>Please fill all the fields</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewUserModal;
