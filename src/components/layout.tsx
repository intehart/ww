import { Outlet } from "react-router-dom";
import { Header } from "@/components/header.tsx";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
