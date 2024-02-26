"use client";

import React from "react";

export const Download = ({ url }: { url: string }) => {
  function onClick() {
    window.open(url);
  }

  return (
    <button onClick={onClick} className="btn btn-primary">
      Download Video
    </button>
  );
};
