"use client";

import { useState } from "react";

export default function MyPage() {
  const [showIframe, setShowIframe] = useState(true);

  return (
    <div className="relative">
      <button
        className="fixed right-4 bottom-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setShowIframe(true)}
      >
        Show Iframe
      </button>
      {showIframe && (
        <div className="h-[450px] w-80 z-20 bg-white rounded-lg shadow-2xl absolute left-[calc(50%+14px)] bottom-[calc(50%+14px)] origin-bottom-left overflow-hidden border border-gray-100">
          <iframe src="/widget" className="h-full w-full"></iframe>
        </div>
      )}
    </div>
  );
}
