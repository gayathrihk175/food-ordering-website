import {Component} from 'react'
// import Header from './Header'
// import User from "./User"
import UserClass from './UserClass'

class About extends Component{
  constructor(props){
    super(props);

    console.log("Constructor from Parent")
  }

  render(){
    console.log("Render from Parent")
    return(
      <div>
      <h1>About Class Component</h1>
      <h2>This is a food app</h2>
      <UserClass/>
     
    </div>
    )
  }
}



export default About;

