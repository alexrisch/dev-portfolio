'use client'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ResponsiveHeroImageProps {
  desktopImage: string;
  mobileImage?: string;
  alt: string;
  className?: string;
  onIncrementImage: () => void;
  onDecrementImage: () => void;
}

export function ResponsiveHeroImage({
  desktopImage,
  mobileImage,
  alt,
  className = "object-container",
  onIncrementImage,
  onDecrementImage,
}: ResponsiveHeroImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative aspect-video @container">
      <Image
        src={isMobile && mobileImage ? mobileImage : desktopImage}
        alt={alt}
        fill
        className={className}
        priority
        objectFit="contain"
      />
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className={`bottom-4 right-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 transition-colors`}
            onClick={onDecrementImage}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            className={`bottom-4 right-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30 transition-colors`}
            onClick={onIncrementImage}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
      </div>
    </div>
  );
} 