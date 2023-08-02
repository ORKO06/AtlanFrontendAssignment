import SideBar from "./Home/SideBar";
import CodeEditor from "./Home/CodeEditor";
import Navbar from "./shared/Navbar/Navbar";
import QueryContextProvider from "../utils/QueryContext";
import OutputTable from "./Home/OutputTable";

const App = () => {
  return (
    <QueryContextProvider>
			<Navbar />
			<div className={QueryContainerClassName} >
				<SideBar />
				<CodeEditor />
			</div>
			<div className={OutputTableContainerClassName} >
				<OutputTable />
			</div>
		</QueryContextProvider>
  )
}

const QueryContainerClassName = "sm:flex gap-10 mx-6 sm:mx-20 max-w-7xl my-16";
const OutputTableContainerClassName = "mx-6 sm:mx-20 max-w-7xl my-16"

export default App;