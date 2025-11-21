const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-ayanokoji-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ayanokoji-black/50 via-transparent to-ayanokoji-black/80" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
    </div>
  );
};

export default Background;
