import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          userInfo : {
            name:"Dummy Name",
            login : "Default",
            avatar_url:"https://thumbs.dreamstime.com/b/cute-little-girl-witch-costume-reading-book-halloween-illustration-selective-focus-generative-ai-cute-little-girl-witch-287231644.jpg",
          }
        }

        console.log("Constructor from child")
    }

    async componentDidMount() {
      const data = await fetch("https://api.github.com/users/gayathrihk175")
      const json = await data.json();
      
      this.setState({
        userInfo:json,
      })
    }

    componentDidUpdate(){
      console.log("Component Did Update")
    }
  
    componentWillUnmount() {
      console.log("Parent component will unmount")
    }

  render() {
    const {name,login,avatar_url} = this.state.userInfo;
    
    console.log("Render from child");
    return (
      <div className="user-card">
        

        <img src={avatar_url} alt={name} />
        <h2>Name: {name}</h2>
        <h3>Contact : @{login}</h3>
      </div>
    );
  }
}

export default UserClass;