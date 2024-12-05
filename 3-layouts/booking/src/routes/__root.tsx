import React, { useEffect } from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useRouteContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/NavBar";
import { log } from "console";

export interface RouterContext extends Record<any, any> {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  const context = useRouteContext({ from: "" });

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      {context.userInfo?.token && <NavBar />}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
