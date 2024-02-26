"use client";

import { useState } from "react";
import { api } from "@/trpc/react";

export default function Dashboard() {
  const [form, setForm] = useState({
    src: "",
    poster: "",
    prompt: "",
    avatar: "",
    author: "",
  });
  api.video.create.useMutation();

  const addVideo = api.video.create.useMutation({
    onSuccess: () => {
      setForm({ ...form, src: "", poster: "", prompt: "" });
    },
  });
  return (
    <div className="mt-10 flex w-screen items-center justify-center bg-base-200 pb-10 pl-2 pr-2 pt-10">
      <div className="relative mx-auto max-w-7xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // addVideo.mutate(form);
          }}
          className="flex flex-col gap-2"
        >
          <input
            type="text"
            placeholder="src"
            value={form.src}
            onChange={(e) => setForm({ ...form, src: e.target.value })}
            className="w-full rounded-full px-4 py-2 text-black"
          />
          <input
            type="text"
            placeholder="poster"
            value={form.poster}
            onChange={(e) => setForm({ ...form, poster: e.target.value })}
            className="w-full rounded-full px-4 py-2 text-black"
          />
          <input
            type="text"
            placeholder="prompt"
            value={form.prompt}
            onChange={(e) => setForm({ ...form, prompt: e.target.value })}
            className="w-full rounded-full px-4 py-2 text-black"
          />
          <input
            type="text"
            placeholder="avatar"
            value={form.avatar}
            onChange={(e) => setForm({ ...form, avatar: e.target.value })}
            className="w-full rounded-full px-4 py-2 text-black"
          />
          <input
            type="text"
            placeholder="author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className="w-full rounded-full px-4 py-2 text-black"
          />
          <button
            type="submit"
            className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
            disabled={addVideo.isLoading}
          >
            {addVideo.isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
