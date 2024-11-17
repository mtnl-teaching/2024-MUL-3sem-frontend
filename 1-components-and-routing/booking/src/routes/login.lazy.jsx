import { createLazyFileRoute } from "@tanstack/react-router";
import LoginForm from "../components/LoginForm";
import { useUserStore } from "../store/user-store";

export const Route = createLazyFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const setUser = useUserStore((state) => state.setUser);

  function handleLogin() {
    //...
    const loginResponse = {
      name: "Mathias",
      token: "ey198u12lkm",
      isTeacher: true,
    };

    // When user is logged in:
    setUser(loginResponse);
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
