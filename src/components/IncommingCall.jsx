import React, { useEffect } from "react";
import { getUserProfileApi } from "../redux/api";
import { getUserProfileAction } from "../redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";

const IncomingVdo = ({ incomingCall, acceptCall, declineCall }) => {
  const { userProfile } = useSelector((state) => state?.user || {});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUserProfileAction(`${getUserProfileApi}/${incomingCall?.caller}`)
    );
  }, [incomingCall?.caller]);
  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg text-center w-80">
        <h2>Incoming Call</h2>
        <p className="my-2">
          {userProfile?.firstName} {userProfile?.lastName} is calling you
        </p>
        <button
          onClick={acceptCall}
          style={{
            marginRight: 10,
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
          }}
        >
          Accept
        </button>
        <button
          onClick={declineCall}
          style={{
            padding: "10px 20px",
            borderRadius: 6,
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default IncomingVdo;
