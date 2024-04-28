"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
  id: number;
  addclass: string;
  title: string;
  url: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  submenuId: number;
  addclass: string;
  title: string;
  url: string;
}
interface LeftbarMenuProps {
  toggleMenu: boolean; // Define toggleMenu as a prop
}

function LeftbarMenu({toggleMenu}:LeftbarMenuProps) {
  const pathname = usePathname();

  const [menuId, setMenuId] = useState<number | null>(null);
  const [submenuStatus, setSubmenuStatus] = useState<number | null>(null);

  const menus: MenuItem[] = [
    {
      id: 1,
      addclass: "app",
      title: "App",
      url: "/dashboard",
    },
    {
      id: 2,
      addclass: "ecommerce",
      title: "E-Commerce",
      url: "/dashboard/e-commerce",
    },
    {
      id: 3,
      addclass: "analytics",
      title: "Analytics",
      url: "/dashboard/analytics",
    },
    {
      id: 4,
      addclass: "banking",
      title: "Banking",
      url: "/dashboard/banking",
    },
    {
      id: 5,
      addclass: "booking",
      title: "Booking",
      url: "/dashboard/booking",
    },
    {
      id: 6,
      addclass: "file",
      title: "File",
      url: "/dashboard/file",
    },
  ];

  const toggleSubmenu = (itemId: number) => {
    if (menuId === itemId) {
      setMenuId(null); // Close submenu if already open
    } else {
      setMenuId(itemId); // Open submenu
    }
  };

  return (
    <>
    
    <div className="asidebar">
      <Image src="/assets/images/dashboard-logo.svg" alt="logo" width={40} height={40}/>
      <p className="sub-heading">Overview</p>
      <ul className="sidebar-menu no-scrollbar">
        {menus?.map((item: MenuItem) => (
          <li className={`li-side-menu ${
            item.url.split("?")[0] === pathname ? "active" : ""
          } ${item.url === pathname ? "active" : ""}`} key={item.id} style={{flexDirection: toggleMenu ? "column" : "row"}}>
            <Image src={`/assets/images/${item?.addclass}.svg`} width={24} height={24} alt="icon"/>
            <Link
              className={`side-menu-link ${
                item.url.split("?")[0] === pathname ? "active" : ""
              } ${item.url === pathname ? "active" : ""} ${
                menuId === item.id ? "active" : "unactive"
              }`}
              style={{fontSize: toggleMenu ? "12px" : "14px" }}
              href={item.url}
              onClick={() => {
                toggleSubmenu(item.id);
                setSubmenuStatus(null);
              }}
            >
              <i className={`menu-icon ${item.addclass}`}></i> {item.title}
            </Link>
            {item.submenu && menuId === item.id && (
              <ul className="ul-submenu">
                {item.submenu.map((submenuItem: SubMenuItem) => (
                  <li className="li-submenu" key={submenuItem.submenuId} >
                    <Link
                      className={`link-submenu ${
                        submenuItem.url.split("?")[0] === pathname
                          ? "active"
                          : ""
                      }`}
                      href={submenuItem.url}
                      onClick={() => setSubmenuStatus(submenuItem.submenuId)}
                    >
                      <i className={`menu-icon ${submenuItem.addclass}`}></i>{" "}
                      {submenuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default LeftbarMenu;
