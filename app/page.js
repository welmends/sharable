"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [noteName, setNoteName] = useState("");
  const router = useRouter();

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
        onChange={(e) => setNoteName(e.target.value)}
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
