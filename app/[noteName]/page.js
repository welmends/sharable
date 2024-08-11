"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAX_CONTENT_LENGTH = 16384; // 16 Kb

const truncateContent = (content) => {
  if (Buffer.byteLength(content, "utf8") > MAX_CONTENT_LENGTH) {
    toast.warn("Max input size achieved");
    let truncatedContent = content.slice(0, MAX_CONTENT_LENGTH - 3);
    return truncatedContent + "...";
  }
  return content;
};

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

  const handleChange = (event) => {
    setContent(truncateContent(event.target.value));
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
    <div>
      <div className="flow">
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
      <div className="flew-grow flex flex-col items-center justify-between gap-4 mx-auto p-4 pt-20">
        <textarea
          value={content}
          onChange={handleChange}
          className="flex-grow textarea textarea-bordered w-full bg-white resize-none rounded-md hover:textarea-primary"
          rows={20}
        />
        <button onClick={handleSave} className="btn btn-primary mt-4">
          Save
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default NotePage;
