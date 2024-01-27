import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <header>
      <nav className="w-full max-w-[1230px] px-[20px] mx-auto flex justify-between items-center">
        <span className='text-[32px]'>iRepair</span>
        <ul className="space-x-[21px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
