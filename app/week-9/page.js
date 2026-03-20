"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
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
    <main className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Shopping List App</h1>
        
        {user ? (
          <div>
            <p className="text-lg text-slate-300 mb-4">
              Welcome, <span className="font-bold text-white">{user.displayName || user.email}</span>!
            </p>
            <div className="flex flex-col gap-4">
              <Link 
                href="/week-9/shopping-list" 
                className="bg-emerald-500 text-white font-bold py-2 px-4 rounded hover:bg-emerald-600 transition"
              >
                Continue to your Shopping List
              </Link>
              <button 
                onClick={handleSignOut} 
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-slate-400 mb-6">Please log in to view your shopping list.</p>
            <button 
              onClick={handleSignIn} 
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition w-full"
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}