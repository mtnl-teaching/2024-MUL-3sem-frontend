import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import { useUserStore } from "../store/user-store";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  const logout = useUserStore((state) => state.logout);

  return (
    <div>
      <h3>Welcome Home!</h3>
      <button onClick={logout}></button>
    </div>
  );
}
