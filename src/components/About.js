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
      {/* <Header/> */}
      <h1>About Class Component</h1>
      <h2>This is a food app</h2>
      <UserClass/>
      {/* <User name={"First (function)"}/> */}
      {/* <UserClass name={"First (class)"} location={"Kerala (class)"} contact={"@First (class)"}/> */}
      {/* <UserClass name={"Second (class)"} location={"Maharashtra (class)"} contact={"@Second (class)"}/> */}
      {/* Here we are creating 2 instances of the class About */}
    </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       {/* <Header/> */}
//       <h1>About Us</h1>
//       <h2>This is a food app</h2>
//       {/* <User name={"First (function)"}/> */}
//       <UserClass name={"First (class)"} location={"Kerala (class)"} contact={"@Firsthk175 (class)"}/>
//     </div>
//   )
// }

export default About;

/*
  // Mounting Lifecycle
Constructor(dummy)
Render(Dummy)
    <HTML Dummy />
ComponentDidMount()
    <API Call/>
    <this.setState/>  -->State variable is updated
  // Updating Lifecycle
  render(API data)
  <HTML (new API data)/> --->All the images from API will be displayed
ComponentDidUpdate()
*/
