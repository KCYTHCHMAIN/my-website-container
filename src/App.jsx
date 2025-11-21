import Background from "./components/Background";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans text-white selection:bg-ayanokoji-red selection:text-white">
      <Background />
      <ProfileCard />
    </div>
  );
}

export default App;
