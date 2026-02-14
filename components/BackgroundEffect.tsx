
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark Forest Base */}
      <div className="absolute inset-0 bg-[#06120E]" />
      
      {/* Subtle Moving Gradients */}
      <div 
        className="animate-gradient absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-[#0A2F1F] rounded-full blur-[160px] opacity-40"
      />
      <div 
        className="animate-gradient absolute bottom-[-10%] right-[-5%] w-[50%] h-[70%] bg-[#08241B] rounded-full blur-[120px] opacity-30"
        style={{ animationDelay: '-5s' }}
      />
      
      {/* Grain / Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]"></div>
    </div>
  );
};

export default BackgroundEffect;
