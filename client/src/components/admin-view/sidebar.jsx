import { ListOrdered } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import {
    BadgeCheck,
    ChartNoAxesCombined,
    LayoutDashboard,
    ShoppingBasket,
  } from "lucide-react";
  import { Fragment } from "react";
  import { useNavigate } from "react-router-dom";
  // AddBarCode

  import {Sheet} from '../ui/sheet.jsx'
  import {SheetContent} from '../ui/sheet.jsx'
  import {SheetHeader} from '../ui/sheet.jsx'
  import {SheetTitle} from '../ui/sheet.jsx'


  const adminSidebarMenuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: "products",
      label: "Books",
      path: "/admin/products",
      icon:<ShoppingCart />,
    },
    {
      id: "orders",
      label: "Borrow",
      path: "/admin/orders",
      icon:<ListOrdered />,
    },
    {
      id: "AddBarCode",
      label: "AddBarCode",
      path: "/admin/AddBarCode",
      icon:<ListOrdered />,
    },
    
  ];
  
  function MenuItems({setOpen}) {
    const navigate = useNavigate();
  
    return (
      <nav className="mt-8 flex-col flex gap-2">
        {adminSidebarMenuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path);
              setOpen?setOpen(false):null
            }}
            className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        ))}
      </nav>
    );
  }
  
  function AdminSideBar({open,setOpen}) {
    const navigate = useNavigate();
  
    return (
      <Fragment>
        <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
        <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
          <div
            onClick={() => navigate("/admin/dashboard")}
            className="flex cursor-pointer items-center gap-2"
          >
            <ChartNoAxesCombined size={30} />
            <h1 className="text-2xl font-extrabold">Admin Panel</h1>
          </div>
          <MenuItems />
        </aside>
      </Fragment>
    );
  }
  
  export default AdminSideBar;