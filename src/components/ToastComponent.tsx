import { Toast } from "../data/toast";

interface ToastComponentProps {
  toast: Toast;
}
export function ToastComponent({ toast }: ToastComponentProps) {
  return (
    <div className="toast error">
      <h5 className="toast-title">{toast.title}</h5>
      {toast.content}
    </div>
  );
}
