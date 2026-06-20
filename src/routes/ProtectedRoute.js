import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}) => {

    const token = JSON.parse(sessionStorage.getItem("token"))
    console.log(token)
    
    function isTokenValid(){
      const token = JSON.parse(sessionStorage.getItem("token"))
      if(!token) return false

      try{
        const base64Url = token.split(".")[1]
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
        const jsonPayload = decodeURIComponent(window.atob(base64).split("").map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
      )
      const payload = JSON.parse(jsonPayload)

      const isExpired = payload.exp * 1000 < Date.now()
      return !isExpired
      }catch(error){
        return false
      }
    }

  const validToken = isTokenValid()
  console.log(validToken)
  return (token && validToken) ? children : <Navigate to="/login" />
}
