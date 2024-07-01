import Login from "./conponents/Login";
import Profile from "./conponents/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;
