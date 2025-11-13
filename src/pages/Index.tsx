import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fitness.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Navigation */}
      <nav className="flex flex-col items-center px-8 lg:px-16 py-6 gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fitness World Logo" className="w-16 h-16 lg:w-20 lg:h-20" />
          <span className="text-foreground font-bold text-xl lg:text-2xl">FITNESS WORLD</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-foreground font-medium">
          <li className="hover:text-primary transition-colors cursor-pointer">About</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Equipment</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Team</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Locate us</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Contact us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 lg:py-20 gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight">
              <span className="text-foreground">FITNESS</span>
              <br />
              <span className="text-primary">WORLD</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground italic mt-4 font-light">
              "Transform Your Body,
              <br />
              <span className="ml-12">Transform Your Life"</span>
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-full transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
          >
            JOIN NOW
          </Button>

          <div className="flex items-center gap-12 pt-4">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-foreground">20<span className="text-primary">+</span></p>
              <p className="text-primary font-semibold text-sm lg:text-base">Trainers</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-foreground">10k<span className="text-primary">+</span></p>
              <p className="text-primary font-semibold text-sm lg:text-base">Transformations</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-end">
          <img 
            src={heroImage} 
            alt="Fitness transformation - muscular person training with dumbbells" 
            className="w-full max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
