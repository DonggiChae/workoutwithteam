import React, { useState } from "react";

interface PageProps {
  page: number;
  totalPosts: number;
  limit: number;
  setPage: (value: number) => void;
}

export default function Pagination({
  page,
  totalPosts,
  limit,
  setPage,
}: PageProps) {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  return (
    <div className="py-4">
      <div className="flex items-center justify-center">
        <button
          className="m-0 transform rounded-md border bg-white px-2 py-1 text-base text-black hover:translate-y-[-2px] hover:bg-red-500 hover:text-white"
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          &lt;
        </button>
        <button
          className={`m-0 rounded-md border bg-white px-2 py-1 text-base text-black ${
            page === firstNum ? "font-bold" : ""
          }`}
          onClick={() => setPage(firstNum)}
        >
          {firstNum}
        </button>
        {Array(4)
          .fill(undefined)
          .map((_, i) => {
            if (i <= 2) {
              return (
                <button
                  className={`m-0 rounded-md border bg-white px-2 py-1 text-base text-black ${
                    page === firstNum + 1 + i ? "font-bold" : ""
                  }`}
                  key={i + 1}
                  onClick={() => {
                    setPage(firstNum + 1 + i);
                  }}
                  disabled={page * limit >= totalPosts}
                >
                  {firstNum + 1 + i}
                </button>
              );
            } else if (i >= 3) {
              return (
                <button
                  className={`m-0 rounded-md border bg-white px-2 py-1 text-base text-black ${
                    page === lastNum ? "font-bold" : ""
                  }`}
                  key={i + 1}
                  onClick={() => setPage(lastNum)}
                  disabled={page * limit >= totalPosts}
                >
                  {lastNum}
                </button>
              );
            }
          })}
        <button
          className="m-0 transform rounded-md border bg-white px-2 py-1 text-base text-black hover:translate-y-[-2px] hover:bg-red-500 hover:text-white"
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page);
          }}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
