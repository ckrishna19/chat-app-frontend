import { useRef } from "react";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socketConnection = () => {
  const baseUrl =
    import.meta.env.DEV === true
      ? "http://localhost:4002"
      : "https://chat-app-backend-okz5.onrender.com";
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const user = JSON?.parse(localStorage?.getItem("user"));
  useEffect(() => {
    const socket = io(baseUrl, {
      withCredentials: true,
      query: {
        userId: user?._id,
      },
    });

    socketRef.current = socket;
    socket.on("connect", () => {
      setConnected(true);
    });
    socket.on("disconnect", () => {
      console.log("user disconnected..");
      setConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return { socket: socketRef, connected };
};

export default socketConnection;
