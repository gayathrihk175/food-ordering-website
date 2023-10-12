import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //   count:0,
        //   count2:2,
        // }

        this.state = {
          userInfo : {
            name:"Dummy Name",
            login : "Default",
            avatar_url:"https://thumbs.dreamstime.com/b/cute-little-girl-witch-costume-reading-book-halloween-illustration-selective-focus-generative-ai-cute-little-girl-witch-287231644.jpg",
          }
        }

        console.log("Constructor from child")
        // console.log(props,"from class");
    }

    async componentDidMount() {
      // console.log("Child component did mount")
      const data = await fetch("https://api.github.com/users/gayathrihk175")
      const json = await data.json();
      // console.log("data",data)
      // console.log("json",json);
      this.setState({
        userInfo:json,
      })
    }

    componentDidUpdate(){
      console.log("Component Did Update")
    }
  
    componentWillUnmount() {
      console.log("Parent component will unmount")
      //unmount means when the component is disappearing/removing from UI i.e when you move to a diff page.
    }

  render() {
    const {name,login,avatar_url} = this.state.userInfo;
    // debugger;
    // const {name,location,contact} = this.props;
    // const {count,count2} = this.state;
    console.log("Render from child");
    return (
      <div className="user-card">
        {/* <h1 style={{marginTop:"2rem",color:"turquoise"}}>Class-based Component</h1>
        <h1>Count : {count}</h1>
        <button onClick={()=>{
          // this.state.count = this.state.count + 1;
          // never update state variables directly
          //this.setState() is equivalent of setName in Hooks
          this.setState({
            count : this.state.count + 1,
            count2 : this.state.count2 - 1,
          })
        }}>Count</button>
        <h1>Count1 : {count2}</h1> */}
        {/* <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4> */}

        <img src={avatar_url} alt={name} />
        <h2>Name: {name}</h2>
        <h3>Contact : @{login}</h3>
      </div>
    );
  }
}

export default UserClass;