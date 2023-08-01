import SideBar from "./Home/SideBar";
import CodeEditor from "./Home/CodeEditor";
import Navbar from "./shared/Navbar/Navbar";
import QueryContextProvider from "../utils/QueryContext";

const App = () => {
  return (
    <QueryContextProvider>
        <Navbar />
        <div className='flex gap-10 px-20 max-w-7xl my-16' >
          <SideBar />
          <CodeEditor />
        </div>
    </QueryContextProvider>
  )
}

export default App;