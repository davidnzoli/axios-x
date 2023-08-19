// import React from "react";

// const loginPage = () =>{

//     const [user, setUser]= useState(
//         {
//           email: "davizolin93@gmail.com",
//           password: "DEV'S7@!"
//         }
//       )
    
//       const postUser=()=>{
//         axios
//         .post('http://127.0.0.1:3333/api/v1/user/login', user)
//         .then((resp)=>{
//           console.log(resp)
//         })
//         .catch((error)=>console.log(error))
//       }
    
//       useEffect(()=>{
//         postUser()
//       },[])
    
//       const onchange = (e)=>{
//         setUser({
//           ...user,
//           [e.target.name]: e.target.value,
//         })
//       }
//       const onsubmit=(e)=>{
//         e.preventDefault();
//         console.log(user)
//       }

//     return  <div className="login">
//     <form action="" style={{padding:"20px",display:"flex", 
//     flexDirection:"column", 
//     justifyContent:"center",
//     alignContent:"center",
//     gap:"20px",
//     width:"100%"}} onSubmit={onsubmit}>
//       <input style={{padding:"10px",width:"280px", fontSize:"20px"}} name="email" value={user.email} type='text' placeholder='E-mail' onChange={onchange}/>
//       <input style={{padding:"10px", width:"280px", fontSize:"20px"}} name="password" value={user.password} type="password" onChange={onchange} placeholder='password'/>
//       <button type='submit' style={{padding:"10px",backgroundColor:"blue",width:"180px", color:"white"}}>Envoyer</button> 
//     </form>
//     </div>
// }
// export default loginPage;