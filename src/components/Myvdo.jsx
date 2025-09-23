import React from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  MonitorUp,
  MessageSquare,
  Users,
  Monitor,
} from "lucide-react";

export default function VideoCallPage({
  localVideoRef,
  remoteVideoRef,
  endCall,
  audio,
  video,
  share,
  handleAudio,
  handleVideo,
  handleShare,
  toggleAudio,
  incomingCall,
}) {
  console.log(incomingCall);
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col">
      {/* Remote Video */}
      <div className="flex-1 relative flex items-center justify-center">
        <video
          className="h-full w-full object-cover"
          autoPlay
          playsInline
          muted
          ref={remoteVideoRef}
        />
        {/* Overlay for remote user name */}
        <p className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm">
          Krishna Chalise
        </p>

        {/* Local Video - small preview */}
        <div className="absolute bottom-4 right-4 w-40 h-28 border-2 border-white rounded-lg overflow-hidden shadow-lg">
          <video
            className="h-full w-full object-cover"
            autoPlay
            playsInline
            muted
            ref={localVideoRef}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 py-4 flex items-center justify-center gap-6">
        {/* Mute / Unmute */}

        <button
          onClick={toggleAudio}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
        >
          {audio ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
        </button>

        {/* Video On / Off */}

        <button
          onClick={handleVideo}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
        >
          {video ? (
            <Video className="w-6 h-6" />
          ) : (
            <VideoOff className="w-6 h-6" />
          )}
        </button>

        {/* Screen Share */}
        <button
          onClick={handleShare}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
        >
          {share ? (
            <MonitorUp className="w-6 h-6" />
          ) : (
            <Monitor className="w-6 h-6" />
          )}
        </button>

        {/* End Call */}
        <button
          onClick={endCall}
          className="p-3 rounded-full bg-red-600 hover:bg-red-500 text-white"
        >
          <PhoneOff className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
