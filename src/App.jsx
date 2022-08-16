import { Routes, Route } from 'react-router-dom'
import { Home, FourBedRooms, ThreeBedRooms, TwoBedRooms } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='four-bed-rooms' element={<FourBedRooms />} />
      <Route path='three-bed-rooms' element={<ThreeBedRooms />} />
      <Route path='two-bed-rooms' element={<TwoBedRooms />} />
      <Route path='*' element={<p>404</p>}/>
    </Routes>
  )
}

export default App