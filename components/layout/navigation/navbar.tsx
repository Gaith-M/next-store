import { routes } from "./routes";
import { Avatar } from "@mui/material";
import { Person } from '@mui/icons-material'

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex justify-between">
        <ul className="flex gap-[0px_10px] items-center">
          {routes.map(({ path, label }, i) => (
            <li key={i} className="capitalize text-gray-700 text-sm md:text-base">
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>

        <Avatar>
          <Person />
        </Avatar>
      </nav>
    </>
  );
};

export default Navbar;
