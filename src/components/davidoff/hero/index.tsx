import { builder } from '@builder.io/sdk';
import { Button } from '@components/ui/button';
import { Accessibility, Circle } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';

// Replace with your Public API Key.
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
  videoUrl: string;
}

export default function Hero() {
  // const t = useTranslations("hero");
  const [hero, setHero] = useState({
    title: 'Empty',
    subtitle: 'subtitle',
    cta: 'DISCOVER MORE',
    videoUrl: '/media/ad97e522-d055a09d.mp4'
  } as HeroContent);
  const locale = useLocale();
  builder.get('hero-content', { locale }).then((content) => {
    console.log('****************** content', content);
    setHero(content.data as HeroContent);
  });
  return (
    <>
      {}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <video
            autoPlay
            loop
            playsInline
            muted
            className="absolute left-0 top-0 h-full w-full object-cover"
            poster="https://cdn.builder.io/api/v1/image/assets%2F8d037472ddea4270ba7fee1b930ca367%2F57bb81cd11674560bbd1ad31ebd0c3f5"
            src={hero.videoUrl}
          >
            <source src={hero.videoUrl} type="video/mp4" />
            <source src={hero.videoUrl} type="video/webm" />
            <source src={hero.videoUrl} type="video/mov" />
            <source src={hero.videoUrl} type="video/mkv" />
            <source src={hero.videoUrl} type="video/avi" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <p className="mb-4 text-sm uppercase tracking-wider">{hero.subtitle}</p>
          <h1 className="mb-8 text-center text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl">
            {hero.title}
          </h1>
          <Button className="bg-[#C4A962] text-black hover:bg-[#B39752]">{hero.cta}</Button>
        </div>
        <div className="fixed bottom-4 right-4 z-20 text-white">
          <Circle className="h-8 w-8" />
        </div>
        <button
          className="fixed bottom-4 left-4 z-20 rounded-full bg-white p-1 text-white"
          aria-label="Accessibility options"
        >
          <Accessibility className="h-8 w-8 text-black" fill="currentColor" />
        </button>
      </div>
    </>
  );
}
