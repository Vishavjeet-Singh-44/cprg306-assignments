"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Week 10 Assignment</h1>
      {user ? (
        <p>
          You are logged in! Proceed to your <Link href="/week-10/shopping-list" className="text-emerald-500 font-bold hover:underline">Shopping List</Link>.
        </p>
      ) : (
        <p>Please use the Navbar above to log in and access your shopping list.</p>
      )}
    </main>
  );
}