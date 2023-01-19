import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardList from "./component/cardList";
import { datas } from "./component/data";
import Search from "./component/search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);
  const changeText = (e) => {
    const filteredUser = datas.filter((user) =>
      user.first.toLowerCase().includes(e.target.value)
    );
    setUserList(filteredUser);
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <Search handleChange={changeText} />
      <CardList user={userList} />
    </div>
  );
}

export default App;
