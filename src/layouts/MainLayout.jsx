import { TheNavbar } from "../Components/TheNavbar"

import { Outlet} from 'react-router-dom'
import '../index.css'
export const MainLayout = () => {
  return (
    <>
    <Outlet/>
      <TheNavbar/>
    </>
  )
}
