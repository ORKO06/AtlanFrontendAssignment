import AtlanLogo from '../../../assets/logo.svg';

const Navbar = () => {
	return (
		<div className="h-16 shadow-md px-16 py-4 flex items-center">
			<img className="" src={AtlanLogo} alt="Logo of Atlan" width={80} height={24} />
			<h2 className="text-2xl font-bold px-4 grow">React-SQL Editor</h2>
			<button className='p-2 border-2 border-blue-500 rounded-md'>
				<a href="https://github.com/ORKO06/AtlanFrontendAssignment">
					<p>View on Github</p>
				</a>
			</button>
		</div>
	);
};

export default Navbar;
