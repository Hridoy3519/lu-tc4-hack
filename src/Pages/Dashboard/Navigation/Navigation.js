import React from 'react';
import './Navigation.css';
// import logo from '../../../images/logo-1.png';
import { MdDashboard, MdPayment, MdRateReview, MdQueue } from 'react-icons/md';
import { FaClipboardList, FaHome, FaUserShield } from 'react-icons/fa';
import { BsFillCollectionFill } from 'react-icons/bs';
import { IoLogOut, IoSettings } from 'react-icons/io5';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

const Navigation = ({ url }) => {
    // const { logOut, role } = useAuth();
    const role = "user"
    const [navData, setNavData] = useState([]);
    const [menuBtn, setMenuBtn] = useState(false);
    const [clicked, setClicked] = useState(false);

    const location = useLocation();
    const history = useHistory();

    // const handleLogOut = () => {
    //     setClicked(true);
    //     // logOut(location.pathname + location.hash, history);
    // }

    const userNavData = [
        {
            name: "Dashboard",
            icon: <MdDashboard />,
            to: `${url}`
        },
        {
            name: "My Order",
            icon: <FaClipboardList />,
            to: `${url}/myOrders`
        },
        {
            name: "Review",
            icon: <MdRateReview />,
            to: `${url}/review`
        },
        {
            name: "Pay",
            icon: <MdPayment />,
            to: `${url}/pay`
        }
    ];
    const adminNavData = [
        {
            name: "Dashboard",
            icon: <MdDashboard />,
            to: `${url}`
        },
        {
            name: "Manage All Orders",
            icon: <FaClipboardList />,
            to: `${url}/manageAllOrders`
        },
        {
            name: "Add A Product",
            icon: <MdQueue />,
            to: `${url}/addAProduct`
        },
        {
            name: "Make Admin",
            icon: <FaUserShield />,
            to: `${url}/makeAdmin`
        },
        {
            name: "Manage Products",
            icon: <MdPayment />,
            to: `${url}/manageProducts`
        }
    ];
    const fixedNavData = [
        {
            name: "Home",
            icon: <FaHome />,
            to: "/"
        }
    ];


    useEffect(() => {
        setNavData(role === "admin" ? adminNavData : userNavData)
    }, [role]);


    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    // toggle behavior
    useEffect(() => {
        setClicked(!menuBtn);

        const element = document.querySelector(".left-side");
        if (menuBtn) {
            element?.classList.remove("left-side-collapse");
            document?.querySelector(".hamburger-btn").classList.add("menu-btns");
            document?.querySelector(".custom-nav-bar").classList.remove("d-none-sm");
            document?.querySelector(".hamburger-btn").classList.add("menu-btns");
        }
    }, [menuBtn]);

    useEffect(() => {
        const element = document.querySelector(".left-side");
        if (clicked) {
            element.classList.add("left-side-collapse");
            document.querySelector(".hamburger-btn").classList.remove("menu-btns");

            sleep(300).then(() => {
                document.querySelector(".custom-nav-bar").classList.add("d-none-sm");
            });
            setClicked(false);
        }
    }, [clicked]);

    return (
        <>
            <div className="brand-name nav-brand-name">
                <div className="collapse-btn-div">
                    <div className="d-flex align-items-center justify-content-start" style={{ paddingLeft: "2.7rem" }}>
                        <div className="logo-div">
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <h4 className="brand-name" style={{ color: "white" }}> Aqua Ticking</h4>
                    </div>
                    <div onClick={() => setMenuBtn(!menuBtn)} className="hamburger-btn">
                        <div className="menu-btn" ></div>
                        <div className="menu-btn1" ></div>
                        <div className="menu-btn2" ></div>
                    </div>
                </div>
            </div>
            <nav className="custom-nav-bar">
                <ul className="custom-nav-top">

                    <li onClick={() => setClicked(true)} className="custom-nav-links">
                        <NavLink to="/"><FaHome /> Home</NavLink>
                    </li>

                    <li onClick={() => setClicked(true)} className="custom-nav-links">
                        <NavLink to={`${url}`}><MdDashboard /> Dashboard</NavLink>
                    </li>

                    <li onClick={() => setClicked(true)} className="custom-nav-links">
                        <NavLink to={`${url}/addAuction`}><MdQueue /> Add An Auction</NavLink>
                    </li>

                    <li onClick={() => setClicked(true)} className="custom-nav-links">
                        <NavLink to={`${url}/myAuctions`}><MdQueue /> My Auctions</NavLink>
                    </li>



                </ul>

            </nav>
        </>
    );
};

export default Navigation;