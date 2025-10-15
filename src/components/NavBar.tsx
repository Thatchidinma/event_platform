"use client";
import Button from "./Button";
import Logo from "./icons/Logo";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";

const NavBar = () => {
    const location = useLocation();
    const pathName = location.pathname;
        return (
        <header className="p-4 md:px-8 w-full sticky top-0 z-50 border-b border-neutral-300 dark:border-neutral-700">
            <nav
                className={`flex items-center justify-between`}
            >
                <div className="">
                    <div className="sm:hidden">
                        <Logo className="w-10 h-10" />
                    </div>
                </div>
                {pathName === "/" &&
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>}
                <div className="flex items-center gap-2 py-2">
                    <Button variant="primary" text={'Sign In'} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
