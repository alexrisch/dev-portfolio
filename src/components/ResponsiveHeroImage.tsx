'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ResponsiveHeroImageProps {
  desktopImage: string;
  mobileImage?: string;
  alt: string;
  className?: string;
}

export function ResponsiveHeroImage({ 
  desktopImage, 
  mobileImage, 
  alt,
  className = "object-container"
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
    <div className="relative w-full h-200">
      <Image
        src={isMobile && mobileImage ? mobileImage : desktopImage}
        alt={alt}
        fill
        className={className}
        priority
        objectFit="contain"
      />
    </div>
  );
} 