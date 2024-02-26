"use client";

import React from "react";
import { toast } from "@/app/_components/common/alert";

export const Copy = ({ text }: { text: string }) => {
  function onCopy() {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copy success");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <button onClick={onCopy} className="btn btn-neutral btn-sm">
        Copy
      </button>
    </div>
  );
};
