import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import { Center } from "@mantine/core";

export const Route = createLazyFileRoute("/_layout/about")({
  component: About,
});

function About() {
  const context = useRouteContext({ from: "/_layout/about" });
  console.log(context);

  return (
    <Center>
      <div>Hello from About!</div>;
    </Center>
  );
}
