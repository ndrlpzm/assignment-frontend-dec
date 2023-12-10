import { useAppSelector } from "../hooks/redux";
import "./Toast.css";
import { ToastComponent } from "./ToastComponent";

export function ToastContainer() {
  const toastList = useAppSelector((state) => state.toast.value);
  return (
    <div className="toast-container">
      {toastList.map((toast, i) => {
        return <ToastComponent key={i} toast={toast}></ToastComponent>;
      })}
    </div>
  );
}

export default ToastContainer;
