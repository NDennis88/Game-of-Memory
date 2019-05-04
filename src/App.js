import React from "./node_modules/react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json.js";
// import "./App.css";

class App extends React.Component {
  state = {
    friends: friends,
  };

  handleRemove = (id) => {
    const filteredFriends = this.state.friends.filter(f => f.id !== id);
    this.setState ({ friends:filteredFriends});
  };

  render() {
  return (
    <Wrapper>
      {this.state.friends.map(f =>
         <FriendCard
         image={f.image}
         handleClick={() => this.handleRemove(f.id)}
       />
      )}
    </Wrapper>
  );
}
}

export default App;
