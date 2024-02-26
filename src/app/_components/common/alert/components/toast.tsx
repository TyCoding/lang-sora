import React from "react";
import { type ToastProps } from "../core/types";
import "../core/styles.css";
import { ErrorIcon, LoadingIcon, SuccessIcon } from "./assets";

const Toast = ({ toast }: ToastProps) => {
  const themeBackground =
    toast.theme === "light" ? "rgb(243, 244, 246)" : "rgb(17, 24, 39)";
  const themeFont =
    toast.theme === "light" ? "rgb(17, 24, 39)" : "rgb(243, 244, 246)";

  return (
    <div
      className={`toast-${toast.state} toast-${toast.type}`}
      style={{
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "0.375rem",
        backgroundColor: themeBackground,
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        color: themeFont,
        zIndex: toast.zIndex,
        display: "flex",
        gap: 4,
        minWidth: 220,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
      key={toast.id}
    >
      {toast.type === "success" && SuccessIcon}
      {toast.type === "error" && ErrorIcon}
      {toast.type === "loading" && LoadingIcon}
      {toast.title}
    </div>
  );
};

export { Toast };
