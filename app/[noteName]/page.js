"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotePage = ({ params }) => {
  const { noteName } = params;
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (noteName) {
      fetch(`api/notes/${noteName}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => setContent(data.content || ""));
    }
  }, [noteName]);

  const handleBack = () => {
    router.push(`/`);
  };

  const handleSave = () => {
    toast("Saving...");
    fetch(`api/notes/${noteName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={handleBack}
          className="btn btn-primary absolute top-4 left-4 p-2 rounded-full"
          aria-label="Voltar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered w-full max-w-lg"
          rows="15"
        />
        <button onClick={handleSave} className="btn btn-primary mt-4">
          Save
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default NotePage;
