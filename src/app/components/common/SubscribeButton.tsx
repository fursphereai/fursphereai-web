interface SubscribeButtonProps {
  onClick: () => void;
  darkMode?: boolean;
}

const SubscribeButton = ({ onClick, darkMode = false }: SubscribeButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`button h-[44px] ${darkMode ? 'bg-[#27355D]' : 'bg-[#5777D0]'} rounded-[22px] overflow-hidden flex flex-row items-center justify-center px-[32px] py-[16px] box-border`}
    >
      <div className="button-1 relative font-semibold text-[16px] text-white">Subscribe</div>
    </button>
  );
};

export default SubscribeButton; 