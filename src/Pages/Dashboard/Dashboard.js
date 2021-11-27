import React, { useEffect } from 'react';
import { Switch, useRouteMatch, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
// import MyOrder from './MyOrders/MyOrders';
import './Navigation/Navigation.css';
// import Pay from './Pay/Pay';
import DashboardHome from './DashboardHome/DashboardHome';
import useAuth from '../../hooks/useAuth';
import AddAuction from './AddAuction/AddAuction';
// import ManageOrders from './ManageOrders/ManageOrders';
// import AddProduct from './AddProduct/AddProduct';
// import MakeAdmin from './MakeAdmin/MakeAdmin';
// import ManageProducts from './ManageProducts/ManageProducts';
// import MakeReview from './Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    // const { setRole, user, dbURL } = useAuth();
    // useEffect(() => {
    //     fetch(`${dbURL}/users/role/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setRole(data.role);
    //         })
    // }, []);

    return (

        <div className="dashboard" style={{
            minHeight: "95vh", width: "100%", marginTop: "-70px", marginBottom: "-6rem"
        }}>
            <div className="left-side left-side-collapse" style={{ backgroundColor: "#051E34" }}>
                <Navigation url={url} />
            </div>

            <div className="right-side">
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    <Route path={`${path}/addAuction`}>
                        <AddAuction />
                    </Route>



                    {/* <Route path={`${path}/myOrders`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/review`}>
                        <MakeReview />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route> */}


                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;