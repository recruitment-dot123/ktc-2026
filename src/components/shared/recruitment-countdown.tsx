"use client";

import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return <div>Thời gian ứng tuyển đã kết thúc</div>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center justify-center gap-4">
        <p className="font-medium text-xs sm:text-sm md:text-base text-balance">
          Hạn cuối ứng tuyển:
        </p>
        <div className="flex items-center gap-1 font-bold">
          <div className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-orange-700 flex flex-col items-center leading-none">
            {zeroPad(days)}
            <span className="text-[8px] font-medium">ngày</span>
          </div>
          <span>:</span>
          <div className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-orange-700 flex flex-col items-center leading-none">
            {zeroPad(hours)}
            <span className="text-[8px] font-medium">giờ</span>
          </div>
          <span>:</span>
          <div className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-orange-700 flex flex-col items-center leading-none">
            {zeroPad(minutes)}
            <span className="text-[8px] font-medium">phút</span>
          </div>
          <span>:</span>
          <div className="w-8 sm:w-10 py-1 rounded-md bg-indigo-100 text-orange-700 flex flex-col items-center leading-none">
            {zeroPad(seconds)}
            <span className="text-[8px] font-medium">giây</span>
          </div>
        </div>
      </div>
    );
  }
};

export default function RecruitmentCountdown() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    isLoaded && <Countdown date={new Date(2025, 8, 1)} renderer={renderer} />
  );
}
