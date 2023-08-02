import AtlanLogo from '../../../assets/logo.svg';

const Navbar = () => {
	return (
		<div className={NavbarContainerClassName}>
			<img src={AtlanLogo} alt="Logo of Atlan" width={80} height={24} />
			<h2 className={NavbarTitleClassnName}>React-SQL Editor</h2>
			<button className={NavbarButtonClassnName}>
				<a href="https://github.com/ORKO06/AtlanFrontendAssignment">
					<p>View on Github</p>
				</a>
			</button>
		</div>
	);
};

const NavbarContainerClassName = "h-16 shadow-md sm:px-16 py-4 flex items-center px-4";
const NavbarTitleClassnName = "text-xs sm:text-2xl font-bold px-4 grow";
const NavbarButtonClassnName = "p-1 sm:p-2 border-2 border-blue-500 rounded-md text-xs sm:text-xl";

export default Navbar;
