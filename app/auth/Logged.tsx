"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: String;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm bg-red-500 text-white rounded-md p-3"
      >
        Sign out
      </button>
      <Link href={"/dashboard"}>
        <Image
          src={image}
          alt="image"
          width={64}
          height={64}
          priority
          className="rounded-full"
        />
      </Link>
    </li>
  );
}
