import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRouter } from "./routers";
import MainLayout from './layouts/MainLayout';
import { Fragment } from 'react';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          publicRouter.map((router,index) => {
            const Comp = router.element
            let Layout = MainLayout

            if(router.layout){
              Layout = router.layout
            }
            else if(router.layout === null){
              Layout = Fragment
            }

            return <Route key={index} path={router.path} element={<Layout><Comp /></Layout>}/>
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
