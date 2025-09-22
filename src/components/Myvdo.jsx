import React from "react";
import {
  Video,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  PhoneOff,
  Maximize,
  Users,
} from "lucide-react";

const VideoCallPage = ({ remoteVideoRef, localVideoRef }) => {
  return (
    <div className="w-screen border h-screen bg-gray-900 flex flex-col items-center justify-center relative">
      {/* Remote video */}
      <div className="w-full h-full flex items-center justify-center bg-black">
        <video
          className="w-full h-full object-cover rounded-md"
          autoPlay
          muted
          ref={remoteVideoRef}
        ></video>
        {/* Remote user info / participants */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-md">
          <Users className="w-5 h-5" />
          <span>1 Participant</span>
        </div>
      </div>

      {/* Local video (small preview) */}
      <div className="absolute bottom-24 right-6 w-40 h-28 bg-black rounded-md overflow-hidden border-2 border-gray-700">
        <video
          className="w-full h-full object-cover"
          ref={localVideoRef}
          autoPlay
          muted
        ></video>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 flex space-x-6 justify-center w-full">
        {/* Mute */}
        <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full text-white flex items-center justify-center">
          <Mic className="w-6 h-6" />
        </button>

        {/* Camera */}
        <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full text-white flex items-center justify-center">
          <Camera className="w-6 h-6" />
        </button>

        {/* Hang up */}
        <button className="bg-red-600 hover:bg-red-500 p-4 rounded-full text-white flex items-center justify-center">
          <PhoneOff className="w-6 h-6" />
        </button>

        {/* Fullscreen */}
        <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full text-white flex items-center justify-center">
          <Maximize className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoCallPage;
