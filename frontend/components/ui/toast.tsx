'use client';

import React, { useEffect, useState } from 'react';
import { Toaster, toast, type ToastOptions } from 'react-hot-toast';

const baseToastOptions: ToastOptions = {
  className: 'rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm',
  duration: 4000,
};

export function ToastProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Toaster
      position="bottom-right"
      toastOptions={baseToastOptions}
      containerClassName="!bottom-5 !right-5"
    />
  );
}

export const notify = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, { ...baseToastOptions, ...options }),
  error: (message: string, options?: ToastOptions) =>
    toast.error(message, { ...baseToastOptions, ...options }),
  info: (message: string, options?: ToastOptions) =>
    toast(message, { ...baseToastOptions, ...options }),
  loading: (message: string, options?: ToastOptions) =>
    toast.loading(message, { ...baseToastOptions, ...options }),
  dismiss: (toastId?: string) => toast.dismiss(toastId),
};
