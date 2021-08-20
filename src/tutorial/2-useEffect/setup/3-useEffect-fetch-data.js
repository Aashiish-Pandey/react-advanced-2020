import React, { useState, useEffect } from "react";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

  console.log(users);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href ={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UseEffectFetchData;
