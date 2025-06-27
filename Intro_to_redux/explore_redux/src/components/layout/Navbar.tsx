// import Logo from "@/assets/Logo";

import { ModeToggle } from "@/components/ui/mode-toggler";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 justify-between flex items-center gap-3 px-5">
      <div className="flex items-center">
        <span className="font-bold ml-2">Task</span>
      </div>
      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
