import { TheNavbar } from "../Components/TheNavbar"

import { Outlet} from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
    <Outlet/>
      <TheNavbar/>
    </>
  )
}
