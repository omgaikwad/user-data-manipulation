import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SingleUser from "../../components/SingleUser/SingleUser";
import NewUserModal from "../../components/NewUserModal/NewUserModal";
import Searchbar from "../../components/Navbar/Searchbar";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchHandler = (e) => {
    const query = e.target.value.toLowerCase();

    if (query !== "") {
      const results = userData.filter((user) => {
        return (
          user.name.toLowerCase().startsWith(query.toLowerCase()) ||
          user.email.toLowerCase().startsWith(query.toLowerCase())
        );
      });

      setFilteredUsers(results);
    } else {
      setFilteredUsers(userData);
    }
  };

  const closeAddUserModal = () => {
    setShowAddUserModal(false);
  };

  const addNewUser = (user) => {
    setUserData([
      ...userData,
      {
        id: userData.length + 1,
        ...user,
      },
    ]);

    setShowAddUserModal(false);
  };

  const getUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setFilteredUsers(userData);
  }, [userData]);

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className={styles["home"]}>
      {showAddUserModal && (
        <NewUserModal
          closeAddUserModal={closeAddUserModal}
          addNewUser={addNewUser}
        />
      )}
      <Searchbar searchHandler={searchHandler} />
      <div className={styles["userlist_wrapper"]}>
        <div className={styles["userlist_buttons"]}>
          <h3>Users</h3>
          <button
            onClick={() => setShowAddUserModal(true)}
            className={styles["add_user_btn"]}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className={styles["userlist_container"]}>
          {filteredUsers.length === 0 && (
            <div className={styles["no_user_found"]}>
              <h3>No user found</h3>
            </div>
          )}
          {filteredUsers.map((user) => {
            return <SingleUser key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
