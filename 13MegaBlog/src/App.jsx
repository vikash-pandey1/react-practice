import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";

import config from "./conf/conf.js";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";
function App() {
  // console.log(config.appwriteUrl)
  // console.log(config.appwriteProjectId)
  // console.log(config.appwriteDatabaseId)
  // console.log(config.appwriteCollectionId)
  // console.log(config.appwriteBucketId)

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login({ data }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? <div className="min-h-sc flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header/>
      <main>
        ToDo{/* <Outlet/> */} 
      </main>
      <Footer/>
    </div>
  </div> : null;
}

export default App;
