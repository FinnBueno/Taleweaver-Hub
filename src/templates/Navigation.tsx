import { Outlet } from "react-router";

export const NavigationHeader = () => (
  <div
    style={{
      backgroundColor: "red",
      padding: "12px",
    }}
  >
    <Outlet />
  </div>
);
