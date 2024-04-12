"use client";
import {redirect, useRouter} from "next/navigation";
import { signInWithEmailAndPassword } from "@/app/actions";
import { getUserSession } from "@/lib/actions/index.js";
import { useState } from "react";
import { useTransition } from "react";

export default function AuthForm() {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async () => {
      const data = await signInWithEmailAndPassword({ email, password }).then((data) => {
        if (data.error) {
          alert(data.error.message);
        }
        else {
            redirect("/admin/bheeshmas-stratagem/dashboard");
        }
      });
    });    
}
    return (
    <main className="flex h-screen bg-white flex-col gap-12 items-center p-24">    
    <form onSubmit={(e)=>{
        handleSubmit(e)
    }
    } className="w-full space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="example@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="password"
        />
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign In
      </button>
    </form>
  </main>
  );
}
