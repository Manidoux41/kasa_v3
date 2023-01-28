import { Routes, Route } from 'react-router-dom'
import {Layout, Home, About, Logements, NotFound} from '../../pages/Public'

const PublicRouter = () => {
 
  return (
    <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:logementId" element={<Logements />} />
            
            <Route path="/*" element={<NotFound />} />
          </Route>
    </Routes>
  )
}

export default PublicRouter