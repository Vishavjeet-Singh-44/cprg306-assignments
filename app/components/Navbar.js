// app/components/Navbar.js
"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <nav className="bg-slate-900 p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold text-white">
        <Link href="/">Home</Link>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Welcome, {user.displayName || user.email}</span>
            <Link href="/week-10/shopping-list" className="text-emerald-400 hover:text-emerald-300">
              Shopping List
            </Link>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={handleSignIn} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Login with GitHub
          </button>
        )}
      </div>
    </nav>
  );
}