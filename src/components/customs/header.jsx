import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import GoogleSign from "../Google_sign"
import { toast } from 'sonner';


function Header() {
  const [logout, setLogout] = useState(!!localStorage.getItem("user"));

  // ✅ Handle Logout Function
  function handleLogout() {
    localStorage.removeItem("user");
    setLogout(false);
    toast.success("Logged out successfully!"); // ✅ Show toast notification on logout

  }

  // ✅ Auto Detect Login/Logout Changes
  useEffect(() => {
    const handleStorageChange = () => {
      setLogout(!!localStorage.getItem("user")); // Automatically update when localStorage changes
    };

    // ✅ Add listener to localStorage changes
    window.addEventListener('storage', handleStorageChange);

    // ✅ Cleanup on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 background bg-white h-20 ml-0'>
      <img src="/logo.png" alt="logo" className="h-20 w-20 ml-0 pl-0" />
      <div>
        { logout ? 
          <Button className="bg-blue-700" onClick={handleLogout}>Logout</Button> : 
          <Button className="bg-blue-700" onClick={GoogleSign}>Sign In</Button>
        }
      </div>
    </div>
  );
}

export default Header;
