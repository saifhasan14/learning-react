import "./App.css"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  // below componenets such as login and profile will have access
  // to values set before in usercontexprovider file
  return (
    <UserContextProvider>
      <h1>hello i m here</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
