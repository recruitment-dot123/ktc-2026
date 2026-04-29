import { InfiniteMovingCards } from "./shared/infinite-moving-cards";

export default function ImageGallery() {
  const imageGroups = [
    [
      "/gallery/KTC_1.jpg",
      "/gallery/KTC_2.png",
      "/gallery/KTC_3.jpg",
      "/gallery/KTC_4.jpg",
      "/gallery/KTC_5.PNG",
      "/gallery/KTC_6.PNG",
    ],
    [
      "/gallery/jobjair_1.jpg",
      "/gallery/jobjair_2.jpg",
      "/gallery/jobjair_3.jpg",
      "/gallery/jobjair_4.jpg",
      "/gallery/jobjair_5.jpg",
      "/gallery/jobjair_6.PNG",
    ],
  ];
  return (
    <div className="md:pb-14 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {imageGroups.map((images, idx) => (
        <InfiniteMovingCards
          key={idx}
          images={images}
          direction={idx % 2 === 0 ? "right" : "left"}
          speed="slow"
          pauseOnHover={false}
        />
      ))}
    </div>
  );
}
