import { Button } from '@components/ui/button';
import { Circle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute left-0 top-0 h-full w-full object-cover"
          poster="https://cdn.builder.io/api/v1/image/assets%2F8d037472ddea4270ba7fee1b930ca367%2F57bb81cd11674560bbd1ad31ebd0c3f5"
          src="/media/ad97e522-d055a09d.mp4"
        >
          <source src="/media/ad97e522-d055a09d.mp4" type="video/mp4" />
          <source src="/media/ad97e522-d055a09d.mp4" type="video/webm" />
          <source src="/media/ad97e522-d055a09d.mp4" type="video/mov" />
          <source src="/media/ad97e522-d055a09d.mp4" type="video/mkv" />
          <source src="/media/ad97e522-d055a09d.mp4" type="video/avi" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <p className="mb-4 text-sm uppercase tracking-wider">Davidoff Cigars</p>
        <h1 className="mb-8 text-center text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl">
          TIME BEAUTIFULLY FILLED
        </h1>
        <Button className="bg-[#C4A962] text-black hover:bg-[#B39752]">DISCOVER MORE</Button>
      </div>
      <div className="absolute bottom-4 right-4 text-white">
        <Circle className="h-8 w-8" />
      </div>
      <button className="absolute bottom-4 left-4 text-white" aria-label="Accessibility options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  );
}
