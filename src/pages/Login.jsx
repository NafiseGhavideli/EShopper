import { useState } from "react"

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState(null)

  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <form className="relative">

    <div className="text-xs md:text-base border border-neutral-200 p-12 rounded-sm flex flex-col absolute top-1/3 left-1/2 -translate-x-1/2 gap-4 shadow-sm">
      <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-neutral-200 border font-poppins rounded-lg p-3 focus:ring-2 ring-rose-500 "
          placeholder="test@gmail.com"/>
      <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-neutral-200 border font-poppins rounded-lg p-3 focus:ring-2 focus:ring-rose-500 "
          placeholder="***"/>
      <button className="font-poppins font-semibold bg-rose-100 p-3 rounded-lg " onClick={(e)=>handleSubmit(e)}>Log in</button>
    </div>
          </form>
  )
}

export default Login
