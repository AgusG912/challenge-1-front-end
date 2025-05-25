import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] mx-[20px]">
      <Outlet />
    </div>
  );
};
