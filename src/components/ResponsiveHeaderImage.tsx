'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';


interface ResponsiveHeaderImageProps {
  desktopImage: string;
  mobileImage?: string;
  alt: string;
  className?: string;
  index: number;
}

export function ResponsiveHeaderImage({ 
  desktopImage, 
  mobileImage, 
  alt,
  className = "object-cover",
}: ResponsiveHeaderImageProps) {
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
    <div className={`relative h-48 w-full`}>
      <Image
        src={isMobile && mobileImage ? mobileImage : desktopImage}
        alt={alt}
        fill
        className={className}
        priority
      />
    </div>
  );
} 