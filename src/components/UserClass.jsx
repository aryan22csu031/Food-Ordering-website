import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        // this.state = {
        //   count: 100,
        //   // count2: 200,
        // }
    }
  render() {
    return (
      <div className="user-card">
        {/* <h1>count : {this.state.count}</h1>
        {/* <h1>count : {this.state.count2}</h1> */}
        {/* <button onClick ={()=> { */}
          {/* // this.setState({ */}
            {/* // count: this.state.count + 1, */} 
          {/* // }); */}
        {/* // }}>increase</button> */}
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Faridabad</h3>
        <h3>Contact : aroraaryan997@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;