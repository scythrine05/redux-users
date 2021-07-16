import React, { useEffect } from "react";
import { Spinner, Table, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { axiosUser, getUserSearch } from "../redux";

const UserData = () => {
  const usersData = useSelector((state) => {
    const allUser = state.userReducer;

    return allUser.searchText === ""
      ? allUser
      : {
          ...allUser,
          users: allUser.users.filter((user) =>
            user.name.startsWith(allUser.searchText)
          ),
        };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosUser()); // eslint-disable-next-line
  }, []);

  const DisplayUsers = () => {
    return usersData.loading ? (
      <Spinner animation="border" />
    ) : usersData.error ? (
      <h2>{usersData.error}</h2>
    ) : !usersData.users.length ? (
      <h3>No Results</h3>
    ) : (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData.users &&
            usersData.users.map((user, i) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              e.preventDefault();
              dispatch(getUserSearch(e.target.value));
            }}
            type="search"
            placeholder="Search Name"
            autoComplete="off"
          />
        </Form.Group>
      </Form>
      <div className="content">
        <DisplayUsers />
      </div>
    </>
  );
};

export default UserData;
