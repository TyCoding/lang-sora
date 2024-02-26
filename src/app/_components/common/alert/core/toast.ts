/**
 * Creates a new toast notification
 * @param {string} message - The message to be displayed in the toast.
 * @returns {void}
 */

import { Store } from "./store";

const promise = <T>(
  promiseFn: () => Promise<T>,
  options: {
    loading: string;
    success: string;
    error: string;
  },
): Promise<T> => {
  const toast = Store.add(options.loading, "loading");
  toast.state = "idle";

  return promiseFn().then(
    (value: T) => {
      toast.type = "success";
      toast.title = options.success;
      Store.update(toast);
      return value;
    },
    (error: any) => {
      toast.type = "error";
      toast.title = options.error;
      Store.update(toast);
      return Promise.reject(error);
    },
  );
};

const success = (message: string) => {
  Store.add(message, "success");
};

const error = (message: string) => {
  Store.add(message, "error");
};

const defaultToast = (message: string) => {
  Store.add(message, "default");
};

const toast = Object.assign(defaultToast, {
  success: success,
  error: error,
  promise: promise,
});

export { toast };
