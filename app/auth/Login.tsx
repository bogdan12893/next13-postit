"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-sm bg-gray-700 text-white rounded-md p-3 disabled:opacity-75"
      >
        Sign in
      </button>
    </li>
  );
}
