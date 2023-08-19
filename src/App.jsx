import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './assets/pages/feed'



function App() {
  

  return (
    <Router>
      <Routes>
               
         <Route path="/" element={<Feed/>}/>
            
           
      </Routes>
    </Router>
  )
  
}

export default App
