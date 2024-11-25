import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/about")({
  component: About,
});

function About() {
  const context = useRouteContext({ from: "/_layout/about" });
  console.log(context);

  return <div>Hello from About!</div>;
}
