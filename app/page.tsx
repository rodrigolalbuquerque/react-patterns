"use client";

import Link from "next/link";

const Example = ({
  link,
  exampleName,
}: {
  link: string;
  exampleName: string;
}) => {
  return (
    <Link
      className="cursor-pointer rounded-md border bg-slate-300 p-4 text-2xl font-semibold hover:bg-yellow-300"
      href={`/${link}`}
    >
      {exampleName}
    </Link>
  );
};

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-600">
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <Example link="splitScreen" exampleName="Split Screen" />
        <Example link="itemLists" exampleName="Item Lists" />
        <Example link="modal" exampleName="Modal" />
      </div>
    </main>
  );
}
