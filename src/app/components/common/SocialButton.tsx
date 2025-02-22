import Link from 'next/link';
import Image from 'next/image';

interface SocialButtonProps {
  href: string;
  icon: string;
  alt: string;
  variant?: 'light' | 'dark';
  isWhiteBg?: boolean;
  isFooter?: boolean;
}

const SocialButton = ({ 
  href, 
  icon, 
  alt, 
  variant = 'light',
  isWhiteBg = false,
  isFooter = false
}: SocialButtonProps) => {
  const getBgColor = () => {
    if (isWhiteBg) {
      return variant === 'light' ? 'bg-[#F5F5F5] border-[#C3C3C3]' : 'bg-white border-white';
    }
    return '';
  };

  const getDiscordIcon = () => {
    if (alt === 'Discord' && isFooter) {
      return '/discord-blue.svg';
    }
    return icon;
  };

  const getImageStyles = () => {
    if (alt === 'Discord') {
      if (isFooter) {
        return 'w-6 h-6';
      }
      return 'w-full h-full object-cover';
    }
    return 'w-6 h-6';
  };

  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`discord-icon w-[44px] h-[44px] relative rounded-[22px] overflow-hidden flex-shrink-0 
        ${isWhiteBg ? `border ${getBgColor()}` : ''} 
        ${alt === 'Discord' && isFooter ? 'bg-white' : ''}
        flex items-center justify-center`}
    >
      <Image 
        src={getDiscordIcon()}
        alt={alt}
        width={44}
        height={44}
        className={getImageStyles()}
        style={{ 
          objectFit: alt === 'Discord' && !isFooter ? 'cover' : 'contain' 
        }}
      />
    </Link>
  );
};

export default SocialButton; 