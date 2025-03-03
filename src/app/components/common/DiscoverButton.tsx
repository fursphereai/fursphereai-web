interface DiscoverButtonProps {
  onClick: () => void;
  darkMode?: boolean;
}

const DiscoverButton = ({ onClick, darkMode = false }: DiscoverButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`button w-[171px] h-[44px] ${darkMode ? 'bg-[#27355D]' : 'bg-[#5777D0]'} 
      rounded-[22px] overflow-hidden 
      flex flex-row items-center justify-center 
      box-border`}
    >
      <div className="font-semibold text-[16px] text-white">Discover Now</div>
    </button>
  );
};

export default DiscoverButton; 