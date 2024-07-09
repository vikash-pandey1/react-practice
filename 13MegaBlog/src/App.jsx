import './App.css'

import config from './config/config'
function App() {
  console.log(config.appwriteUrl)
  console.log(config.appwriteProjectId)
  console.log(config.appwriteDatabaseId)
  console.log(config.appwriteCollectionId)
  console.log(config.appwriteBucketId)

  return (
    <h1>A blog app with appwrite</h1>
  )
}

export default App
