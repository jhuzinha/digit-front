import { AppRoutes }  from "../Routers/Router";
import GlobalStyles from "../Assets/styles/GlobalStyles";
import GlobalContext from "../Contexts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <GlobalStyles/>
      <GlobalContext>
          <AppRoutes />
      </GlobalContext>
      <ToastContainer/>
    </>
  )
}

export default App;
