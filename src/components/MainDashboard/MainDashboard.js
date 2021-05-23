import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';

const MainDashboard = () => {
    return (
        <div className='row bg-dark'>
        <div className="col-lg-3">
            <Sidebar></Sidebar>
        </div>
          <div className="col-lg-9">
              <Dashboard></Dashboard>
          </div>
        </div>
    );
};

export default MainDashboard;