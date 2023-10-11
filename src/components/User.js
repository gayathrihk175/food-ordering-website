import React,{useState} from 'react'

const User = ({name}) => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(1);
  return (
    <div className='user-card'>
      <h1 style={{marginTop:"2rem",color:"blueviolet"}}>Functional Component</h1>
      <h1>Count: {count}</h1>
      <h1>Count1 : {count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Location : Kerala</h3>
      <h4>Contact : @gayathrihk175</h4>
    </div>
  )
}

export default User
