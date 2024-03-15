import HeaderIcon from "./icons/HeaderIcon";
import PlusIcon from "./icons/PlusIcon";
import Link from "next/link";
export default function Header() {
  return (
    <div className="px-[120px] ">
      <div className="navbar bg-[#FFFFFF]">
        <div className="flex-1">
          <HeaderIcon />
          <Link href={"/"}>
            <p className="btn btn-ghost text-xl">Dashboard</p>
          </Link>
          <Link href={"/Record"}>
            {" "}
            <p className="btn btn-ghost text-xl">Records</p>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5  ">
          <button className="flex items-center w-[99px] h-[32px] rounded-[20px] bg-[#0166FF] text-[#ffffff] text-[16px] justify-center gap-1">
            <PlusIcon />
            Record
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
