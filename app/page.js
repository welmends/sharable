"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MAX_INPUT_LENGTH = 30;

const Home = () => {
  const [noteName, setNoteName] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`api/ping`, { method: "GET" }); // Init DB
  }, []);

  const handleChange = (event) => {
    const input = event.target.value;
    setNoteName(input.slice(0, MAX_INPUT_LENGTH));
  };

  const handleSearch = () => {
    if (noteName) {
      router.push(`/${noteName}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Share Notes</h1>
      <p className="text-lg">A simple way to share notes online</p>
      <input
        type="text"
        value={noteName}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs bg-white hover:input-primary"
        placeholder="your-note-name"
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Go!
      </button>
    </div>
  );
};

export default Home;
