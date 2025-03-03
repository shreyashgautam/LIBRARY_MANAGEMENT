import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth-slice";

function AdminHeader({setOpen}){

    const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

    return(
        <header className="flex items-center px-4 py-3 bg-background justify-center ">
           <Button onClick={()=>setOpen(true)} className="lg:hidden sm:block">
           <AlignJustify />  
           <span className="sr-only">Toggle Menu</span>
           </Button>
                 <div className="flex flex-1 justify-end">

                    <Button onClick={handleLogout} className="inline-flex gap-2 item-center rounder-md px-4 py-2 text-sm font-medium shadow">
                    <LogOut />Logout
                    </Button>
                 </div>
           </header>
    )
}

export default AdminHeader;