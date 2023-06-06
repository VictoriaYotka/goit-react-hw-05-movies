import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import css from './SharedLayout.module.css'
import Loading from "components/Loading/Loading";
import Header from "components/Header/Header";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header/>
      <main>
        <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
      </main>
      
    </div>
  )
}

export default SharedLayout