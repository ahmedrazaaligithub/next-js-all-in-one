import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./conpomemt/header";
import { useRouter } from "next/router";
const Container = ({ children }) => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const currentRoute = router.pathname;

    if (currentRoute === "/") {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  }, [router]);

  return (
    <div className={`flex flex-col w-full`}>
      <div
        className={`  flex justify-evenly shadow-2xl  sticky top-0 bg-stone-600 text-stone-300`}
  style={{ zIndex: 10000 }}
      >
        <Link
          href={"/"}
          className="mx-2 p-3 rounded font-semibold"
        >
          CounterApp
        </Link>
        <Link
          href={"/home"}
          className="mx-2    p-3 rounded font-semibold"
        >
          ExpenseTracker
        </Link>
        <Link
          href={"/todo"}
          className="mx-2 p-3 rounded font-semibold"
        >
          Todo App
        </Link>
        <Link
          href={"/contact"}
          className="mx-2    p-3 rounded font-semibold"
        >
          contact
        </Link>
      </div>
      {isHeaderHidden && (
        <div className="flex justify-around items-center bg-stone-950 text-stone-400 h-[603px]">
          <Header />
        </div>
      )}
      <main className="">{children}</main>
    </div>
  );
};

export default Container;
