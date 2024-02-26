import React, { useCallback, useEffect, useState } from "react";
import { type IToast, type ToasterProps, type ToastState } from "../core/types";
import { Store } from "../core/store";
import { Toast } from "./toast";

/**
 * Toaster component for displaying toast notifications.
 * @param {object} ToasterProps - Props for configuring the toaster.
 * @returns {JSX.Element} - A component for displaying toast notifications.
 */
const Toaster = ({
  position = "top-center",
  duration = 3000,
  reverse = false,
  theme = "light",
}: ToasterProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [positionState, setPositionState] = useState<React.CSSProperties>({});
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const unsubscribe = Store.subscribe((toast) => {
      setToasts((toasts) => {
        const index = toasts.findIndex((x) => x.id === toast.id);
        if (index === -1) {
          return [...toasts, toast];
        } else {
          const copy = [...toasts];
          copy[index] = toast;
          return copy;
        }
      });
      handleToast(toast);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const [y, x] = position.split("-");
    const vars = {
      [String(y)]: 0,
      [String(x)]: 0,
      left: "",
      transform: "",
    };
    if (position?.includes("center")) {
      vars.left = "50%";
      vars.transform = "translateX(-50%)";
    }

    setPositionState(vars);
  }, [position]);

  useEffect(() => {
    setHeight(toasts.length * 41);
  }, [toasts]);

  function handleToast(toast: IToast) {
    setTimeout(() => updateToastState(toast, "idle"), 300);
    if (toast.type === "loading") return;
    setTimeout(() => updateToastState(toast, "leave"), duration - 100);
    setTimeout(() => removeToast(toast), duration);
  }

  function updateToastState(toast: IToast, state: ToastState) {
    setToasts((toasts) => {
      const copy = toasts.slice();
      const index = copy.findIndex((x) => x.id === toast.id);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      copy[index] = { ...copy[index], state: state };
      return copy;
    });
  }

  const removeToast = useCallback(
    (toast: IToast) =>
      setToasts((toasts) => toasts.filter((x) => x.id !== toast.id)),
    [],
  );

  const reversedToasts = reverse ? toasts.slice().reverse() : toasts;

  return (
    <section
      style={{
        position: "fixed",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        margin: 16,
        transform: "translateY(0)",
        height: height,
        transition: "all 230ms cubic-bezier(.21, 1.02, .73, 1)",
        ...positionState,
      }}
    >
      {position.startsWith("bottom") && !reverse && (
        <div className="flex h-full w-full grow" />
      )}
      {reversedToasts.map((toast, index) => (
        <Toast key={index} toast={{ ...toast, zIndex: index, theme }} />
      ))}
    </section>
  );
};

export { Toaster };
