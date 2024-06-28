import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          userInfo : {
            name : "username",
            location : "location",
            avatar_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          }
        }
    }

    async componentDidMount(){
      const data = await fetch("https://api.github.com/users/aryan22csu031");
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo : json,
      })
      
    }
  render() {
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h3>Contact : aroraaryan997@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;