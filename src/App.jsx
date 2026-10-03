import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AdminRegister from "./AdminRegister";
import CleintRegister from "./ClientRegister";
import Authgurad from "./Authgurad";
import Authentication from "./Authentication";
import ClientLogin from "./ClientLogin";
import CleintDash from "./CleintDash";
import AdminLogin from "./AdminLogin";
import AdminDash from "./AdminDash";
import FrontPage from "./FrontPage";
import Book from "./Book";
import Accepted from "./Accepted";
import Rejected from "./Rejected";
import Home from "./Home";
import Status from "./Status";
import SlctRjctcr from "./SlctRjctcr";
import Newprod from "./NewProd";
import ProdprcChange from "./ProdprcChange";
import Adminrjctd from "./Adminrjctd";
import Adminacptd from "./Adminacptd";
import AdminHome from "./AdminHome";
import Welcome from "./Welcome";
import Notify from "./Notify";

const App=()=>{

  const routings= createBrowserRouter([
    {
      path:'/',
      element:<FrontPage/>
    },
    {
      path:'/adminreg',
      element:<AdminRegister/>
    },
    {
      path:'/clientreg',
      element:<CleintRegister/>
    },{
      path:'/clientlogin',
      element:<ClientLogin/>
    },
    {
      path:"/clientdash/:val",
      element:(<Authgurad alloweedroles={['client']}>
        <CleintDash/>
      </Authgurad>),
      children:[
       {  index: true, element: <Welcome/> },       // Renders at "/"
        {path:'welcome', element:<Welcome/>
        },
       { path: 'book', element: <Book /> },
      {path:'status',element:<Status/>},
      {path:'accepted',element:<Accepted/>},
      {path:'rejected',element:<Rejected/>},
      // {path:'logout',element:<ClientLogin/>}
      {path:'notify',element:<Notify/>}

             ],
 },
    {
      path:'/adminlogin',
      element:<AdminLogin/>
    },
    {
      path:'/admindash',
      element:(
        <Authgurad  alloweedroles={["admin"]}>
          <AdminDash/>
        </Authgurad>
      ),
      children:[
        {index:true,element:<AdminHome/>},
        {path:'decision', element:<SlctRjctcr/>},
        {path:'newprod',element:<Newprod/>},
        {path:'pricechange',element:<ProdprcChange/>},
        {path:'rejected',element:<Adminrjctd/>},
        {path:'accepted',element:<Adminacptd/>},
        {path:'logout',element:<AdminLogin/>},
        {path:'welcome', element:<Welcome/>},
      ]
    }
  
    
  ])


  return (
    <Authentication>
          <RouterProvider router={routings}/>
    </Authentication>
  
  )
}
export default App;