import { Link, Outlet, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/Context";

const SellerLayout = () => {
  const { setIsSeller } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Orders", path: "/seller/order", icon: assets.order_icon },
  ];

  const logout = () => {
    setIsSeller(false);
  };

  return (
    <>
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="cursor-pointer w-34 md:w-38" />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button onClick={logout} className="border rounded-full text-sm px-4 py-1">
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex">
        <div className="md:w-64 w-16 border-r h-screen border-gray-300 pt-4 flex flex-col">
          {sidebarLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-green-600 text-primary"
                    : "hover:bg-gray-100/90 border-white"
                }`
              }
            >
              <img src={item.icon} className="w-7 h-7" alt="" />
              <p className="md:block hidden">{item.name}</p>
            </NavLink>
          ))}
        </div>

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SellerLayout;
