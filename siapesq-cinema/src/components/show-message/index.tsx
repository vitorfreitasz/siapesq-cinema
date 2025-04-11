"use client";
import { IShowMessage } from "@/interfaces/show-message.interface";
import { useEffect } from "react";

export default function ShowMessage({
  type = "danger",
  time = 5,
  message = "",
  onEndMessage,
}: IShowMessage) {
  const renderColor = (type: "warning" | "success" | "danger") => {
    switch (type) {
      case "warning":
        return "yellow";
      case "success":
        return "green";
      case "danger":
        return "red";
      default:
        return "gray";
    }
  };
  const renderIcon = () => {
    switch (type) {
      case "warning":
        return <p>⚠️</p>;
      case "success":
        return <p>✅</p>;
      case "danger":
        return <p>❌</p>;
      default:
        return null;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onEndMessage) {
        if (message !== "" && time !== 0) {
          onEndMessage({ message: "", time: 0, type: "danger" });
        }
      }
    }, time * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time, message, type, onEndMessage]);

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex justify-center items-center">
      {message && time > 0 && (
        <div
          className="w-4/5 max-w-md h-10 rounded-b-lg flex flex-col animate-fade-out"
          style={{
            backgroundColor: renderColor(type),
            animationDuration: `${time}s`,
          }}
        >
          <div className="flex flex-1 h-1 w-full bg-transparent">
            <div
              className="h-full text-transparent bg-black animate-progress-width"
              style={{
                animationDuration: `${time}s`,
              }}
            >
              .
            </div>
          </div>
          <div className="flex flex-1 items-center p-2">
            <span className="text-white text-sm flex-grow">{message}</span>
            <div className="flex justify-center items-center">
              {renderIcon()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
