"use client";

import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Scholarly Archive
            </h3>

            <p className="text-gray-500 mt-2">
              © 2026 Scholarly Archive. All Rights Reserved. Curated for
              Historical Research.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-sm text-gray-600 hover:text-[#b52619] transition-colors"
          >
            Contact
          </button>
        </div>
      </footer>

      {/* POPUP */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-[90%] max-w-sm p-8 relative border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Contact
            </h2>

<div className="space-y-4">

  {/* EMAIL */}
  {/* <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=ahlafathin@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 border border-black/10 p-4 hover:border-[#b52619] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>

    <span>ahlafathin@gmail.com</span>
  </a> */}

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/ahlazizaf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 border border-black/10 p-4 hover:border-[#b52619] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
      />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>

    <span>@ahlazizaf</span>
  </a>
    <a
    href="https://instagram.com/alezzdwynh"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 border border-black/10 p-4 hover:border-[#b52619] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
      />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>

    <span>@alezzdwynh</span>
  </a>
  <a
    href="https://instagram.com/baaaaarrrr__"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 border border-black/10 p-4 hover:border-[#b52619] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
      />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>

    <span>@baaaaarrrr__</span>
  </a>
  <a
    href="https://instagram.com/bgs_satuduatiga"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 border border-black/10 p-4 hover:border-[#b52619] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
      />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>

    <span>@bgs_satuduatiga</span>
  </a>

</div>
          </div>
        </div>
      )}
    </>
  );
}