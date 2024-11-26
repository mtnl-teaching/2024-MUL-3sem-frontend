import { createFileRoute, Outlet } from "@tanstack/react-router";
import NavBar from "../components/NavBar";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

const LayoutContainer = {
  display: "flex",
  flexDirection: "row",
};

function RouteComponent() {
  return (
    <div style={LayoutContainer}>
      <NavBar />
      <div style={{ width: "100%", height: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
