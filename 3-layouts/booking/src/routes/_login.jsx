import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Login Layout</h1>
      <Outlet />
    </div>
  );
}
