import React,{useState, useEffect} from 'react'
import '../Styles/Users.css';
import Network from '../network/index';

const { Paths, API } = Network;

function Users() {
    const [users,setUsers] =  useState([]);
    const fetchAllUsers = async () => {
        const getUsersUrl = Paths.getUsers();
        try {
            const {data} = await API.get(getUsersUrl);
            setUsers(data);
        } catch(error) {
            console.log('error while getting all users', error);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);


    return (
         <div className="userContainer">
             <div  className="headerContainer">
                <div className="mainHeader">All Users</div>
                <div className="subHeader">Users and their age</div>
            </div>
            <table className="table">
            <thead>
                <tr>
                  <th><p>Username</p></th>
                  <th><p>Age</p></th>
                </tr>
              </thead>
        <tbody>
            { users.map((user, index) => 
              <tr key={index}>
              <td><p>{user.username} </p></td>
              <td><small>{user.age}</small></td>
              </tr>
          )} 
          </tbody>
          </table>
        </div>
    )
}

export default Users;
