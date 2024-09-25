import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import DashSidebar from '../component/DashSidebar';
import DashProfile from '../component/DashProfile';
import DashPost from '../component/DashPost';
import DashUsers from '../component/DashUser';



export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    <div className='md:w-56'>
      {/* Sidebar */}
      <DashSidebar />
    </div>
    {/* profile... */}
    {tab === 'profile' && <DashProfile />}
    {/* Post*/}
    {tab === 'posts' && <DashPost/>}
    {/* Users*/}
    {tab === 'users' && <DashUsers />}
  </div>
);
}
