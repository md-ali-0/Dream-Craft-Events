const ChatbotAvatar = ({ src, alt, }) => {
  

  return (
    <div
      className={`flex items-center  rounded-full w-10 h-10  `}
    >
      <img src={src} alt={alt} className="rounded-full ring-1" />
      
    </div>
  );
};

export default ChatbotAvatar;
