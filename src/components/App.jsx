import SideBar from "./Home/SideBar";
import CodeEditor from "./Home/CodeEditor";
import Navbar from "./shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
			<div className='flex gap-10 px-20 max-w-7xl my-16' >
				<SideBar />
				<CodeEditor />
			</div>
    </div>
  )
}

export default App;