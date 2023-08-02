import SideBar from "./Home/SideBar";
import CodeEditor from "./Home/CodeEditor";
import Navbar from "./shared/Navbar/Navbar";
import QueryContextProvider from "../utils/QueryContext";
import OutputTable from "./Home/OutputTable";

const App = () => {
  return (
    <QueryContextProvider>
			<Navbar />
			<div className='flex gap-10 mx-20 max-w-7xl my-16' >
				<SideBar />
				<CodeEditor />
			</div>
			<div className='mx-20 max-w-7xl my-16' >
				<OutputTable />
			</div>
		</QueryContextProvider>
  )
}

export default App;