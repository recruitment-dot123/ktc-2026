"use client";

import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <ReactPlayer
        url="/mocks/introduction.mp4"
        playing
        controls
        width="100%"
        height="100%"
        fallback={<Skeleton className="w-full h-full" />}
        playIcon={
          <Button className="aspect-square h-20 rounded-full ring-4 ring-white p-0">
            <span className="sr-only">Watch the video</span>
            <Play className="ml-1 size-8" fill="white" />
          </Button>
        }
        light="https://images.unsplash.com/photo-1667216324249-c04ad5284ff2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
