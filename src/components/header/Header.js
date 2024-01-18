import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import Navbar from "./NavBar";
import Icons from "./Icons";
import SearchForm from '../searchForm/SearchForm';

function Header() {
    const [isNavBarVisible, setIsNavBarVisible] = useState(window.innerWidth > 768);
    const [isSearchFormVisible, setIsearchFormVisible] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsNavBarVisible(window.innerWidth > 768);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function toggleNavBar() {
        setIsNavBarVisible(prevState => !prevState);
    };

    function showSearchForm() {
        setIsearchFormVisible(prevState => !prevState);
    };

    return (
        <>
            <SearchForm isSearchFormVisible={isSearchFormVisible} onSearchClossClick={showSearchForm} />
            {isNavBarVisible ?
                <header>
                    <a href="#top">
                        <Logo />
                    </a>
                    <Navbar isVisible={isNavBarVisible} />
                    <Icons onMenuClick={toggleNavBar} onSearchClossClick={showSearchForm} />
                </header>
                :
                <>
                    <header>
                        <a href="#top">
                            <Logo />
                        </a>
                        <Icons onMenuClick={toggleNavBar} onSearchClossClick={showSearchForm} />
                    </header>
                    <Navbar isVisible={isNavBarVisible} />
                </>
            }
        </>
    )
}

export default Header;
