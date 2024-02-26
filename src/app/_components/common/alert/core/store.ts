import { IToast, ToastType } from './types';

class Reducer {
  toasts: Array<IToast>;
  subscribers: Array<(toast: IToast) => void>;

  constructor() {
    this.toasts = [];
    this.subscribers = [];
  }

  /**
   * Subscribe a function to receive toast updates.
   * @param {function} func - A function that will be called when a new toast is published.
   * @returns {function} - A function to unsubscribe from toast updates.
   */
  subscribe(func: (toast: IToast) => void) {
    this.subscribers = [...this.subscribers, func];
    return () => {
      this.subscribers.splice(this.subscribers.indexOf(func), 1);
    };
  }

  /**
   * Publish a new toast to all subscribers.
   * @param {IToast} toast - The toast object to publish.
   */
  publish(toast: IToast) {
    this.subscribers.forEach((func) => func(toast));
  }

  /**
   * Add a new toast to the store and publish it to subscribers.
   * @param {string} message - The message to display in the toast.
   * @param {ToastType} type - The type of the toast (e.g., 'info', 'success', 'error').
   * @returns {IToast} - The added toast.
   */
  add(message: string, type: ToastType): IToast {
    const toast = {
      id: this.toasts.length,
      state: 'enter',
      type: type,
      title: message,
    } as IToast;

    this.toasts = [...this.toasts, toast];
    this.publish(toast);
    return toast;
  }

  /**
   * Update an existing toast and publish it to subscribers.
   * @param {IToast} message - The toast to update.
   */
  update(toast: IToast) {
    const index = this.toasts.findIndex((x) => x.id === toast.id);
    this.toasts[index] = toast;
    this.publish(toast);
  }
}

export const Store = new Reducer();
