interface SignupButtonProps {
  onClick: () => void;
  darkMode?: boolean;
  className?: string;
}

const SignupButton = ({ onClick, darkMode = false, className = '' }: SignupButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`button ${className} ${darkMode ? 'bg-[#27355D]' : 'bg-[#5777D0]'} 
      rounded-[22px] overflow-hidden 
      flex flex-row items-center justify-center 
      box-border`}
    >
      <div className="font-semibold text-white">Sign Up</div>
    </button>
  );
};

export default SignupButton; 