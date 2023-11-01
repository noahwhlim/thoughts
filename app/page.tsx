"use client";
import Card from "@/_components/Card";
import CreateCard from "@/_components/CreateCard";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

interface Info {
  title: string;
  content: string;
  date: string;
}

export default function Home() {
  const [showCreate, setShowCreate] = useState(false);
  const sample = [
    {
      id: 1,
      title: "Sample title",
      content: "Sample content",
      date: "10/28/23",
    },
    {
      id: 2,
      title: "Sample title 2",
      content: "Sample content 2",
      date: "10/28/23",
    },
    {
      id: 3,
      title: "Sample title",
      content: "Sample content",
      date: "10/28/23",
    },
    {
      id: 4,
      title: "Sample title 2",
      content: "Sample content 2",
      date: "10/28/23",
    },
    {
      id: 5,
      title: "Sample title",
      content: "Sample content",
      date: "10/28/23",
    },
    {
      id: 6,
      title: "Sample title 2",
      content: "Sample content 2",
      date: "10/28/23",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* <button
        className="flex border-2 rounded-lg mx-80 my-4 py-2 items-center justify-center"
        onClick={() => setShowCreate(!showCreate)}
        // onClick={log}
      >
        {showCreate ? "Cancel" : "Create"}
      </button> */}

      {showCreate === false ? (
        <div className="mx-80 flex">
          <button
            className="flex border-2 rounded-lg my-4 py-2 items-center justify-center w-full"
            onClick={() => setShowCreate((prev) => !prev)}
          >
            Create
          </button>
        </div>
      ) : (
        <div className="flex mx-80 flex-row">
          <button
            className="flex border-2 rounded-lg my-4 py-2 items-center justify-center w-full"
            onClick={() => setShowCreate((prev) => !prev)}
          >
            Cancel
          </button>
          <button className="mx-4 items-center flex">
            <IoCreateOutline size={35}/>
          </button>
        </div>
      )}
      {showCreate ? <CreateCard /> : <div></div>}
      {sample.map((item) => (
        <Card
          title={item.title}
          content={item.content}
          date={item.date}
          key={item.id}
        />
      ))}
      {/* <Card title={sample.title} content={sample.content} date={sample.date} /> */}
    </main>
  );
}
