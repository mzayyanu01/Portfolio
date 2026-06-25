import { FaDownload } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <main>
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-green-900 flex flex-col justify-between p-4">
        <div>
          <h1 className="font-bold text-white text-[20px] text-center uppercase">
            Zayyanu Muhammad
          </h1>
        </div>

        <div className="flex flex-col gap-10 p-5 place-items-center uppercase text-white font-medium">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="work">Working Experience</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
        </div>

        <button className="p-2 flex justify-center gap-3 items-center text-white font-bold bg-green-400 rounded-full">
          Download CV <FaDownload />
        </button>
      </aside>

      {/* Main Content */}
      <section className="ml-64  bg-green-950 px-6">
        <Outlet />
      </section>
    </main>
  );
}
