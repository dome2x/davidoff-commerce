import { Button } from '@components/ui/button';
import { Accessibility, Circle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations("hero");
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
        <p className="mb-4 text-sm uppercase tracking-wider">{t("subtitle")}</p>
        <h1 className="mb-8 text-center text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl">
          {t("title")}
        </h1>
        <Button className="bg-[#C4A962] text-black hover:bg-[#B39752]">{t("cta")}</Button>
      </div>
      <div className="fixed bottom-4 right-4 text-white z-20">
        <Circle className="w-8 h-8" />
      </div>
      <button className="fixed bottom-4 left-4 text-white z-20 bg-white rounded-full p-1" aria-label="Accessibility options">
        <Accessibility className="w-8 h-8 text-black" fill="currentColor" />
      </button>
    </div>
  );
}
