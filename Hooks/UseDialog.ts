import { useRef } from "react";

const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => {
    if (ref.current && !ref.current.open) ref.current.showModal();
  };
  const close = () => ref.current?.close();

  return { ref, open, close };
};

export default useDialog;
