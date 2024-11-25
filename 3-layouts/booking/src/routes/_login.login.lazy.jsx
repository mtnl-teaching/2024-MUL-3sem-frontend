import { createLazyFileRoute } from "@tanstack/react-router";
import LoginForm from "../components/LoginForm";

export const Route = createLazyFileRoute("/_login/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
