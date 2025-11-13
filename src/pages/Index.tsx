import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fitness.jpg";
import logo from "@/assets/logo.png";
import aboutGym1 from "@/assets/about-gym-1.jpg";
import aboutGym2 from "@/assets/about-gym-2.jpg";
import aboutGym3 from "@/assets/about-gym-3.jpg";
import equipmentBikes from "@/assets/equipment-bikes.jpg";
import equipmentKettlebells from "@/assets/equipment-kettlebells.jpg";
import equipmentDumbbells1 from "@/assets/equipment-dumbbells-1.jpg";
import equipmentDumbbells2 from "@/assets/equipment-dumbbells-2.jpg";
import equipmentTreadmill from "@/assets/equipment-treadmill.jpg";
import equipmentEllipticals from "@/assets/equipment-ellipticals.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins relative">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 lg:px-16 py-6">
        <div className="flex items-center">
          <img src={logo} alt="Fitness World Logo" className="w-16 h-16 lg:w-20 lg:h-20" />
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-foreground font-medium absolute left-1/2 -translate-x-1/2">
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

      {/* About Section */}
      <section className="bg-[#0D0D0D] px-8 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase">
              ABOUT FITNESS WORLD
            </h2>
            <p className="text-lg lg:text-xl text-foreground italic font-light leading-relaxed">
              "Fitness World is more than just a gym. With world-class equipment, expert trainers, and a motivating environment, we help you transform your body and achieve your goals — no matter your fitness level."
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-black text-lg px-12 py-6 rounded-full uppercase"
            >
              START TODAY
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img 
              src={aboutGym1} 
              alt="Fitness trainers consulting in gym" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src={aboutGym2} 
              alt="Group fitness class training" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src={aboutGym3} 
              alt="Person training on treadmill in bright gym" 
              className="w-full h-64 col-span-2 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-background px-8 lg:px-16 py-16 lg:py-24">
        <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase text-center mb-12">
          OUR EQUIPMENT
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          <img 
            src={equipmentBikes} 
            alt="Row of exercise bikes in gym" 
            className="w-full h-48 lg:h-64 object-cover rounded-lg"
          />
          <img 
            src={equipmentKettlebells} 
            alt="Colorful kettlebells on rack" 
            className="w-full h-48 lg:h-64 object-cover rounded-lg"
          />
          <img 
            src={equipmentDumbbells1} 
            alt="Chrome dumbbells rack" 
            className="w-full h-48 lg:h-64 object-cover rounded-lg"
          />
          <img 
            src={equipmentDumbbells2} 
            alt="Heavy dumbbells close-up" 
            className="w-full h-48 lg:h-64 object-cover rounded-lg"
          />
          <img 
            src={equipmentTreadmill} 
            alt="Modern treadmill with natural lighting" 
            className="w-full h-48 lg:h-64 object-cover rounded-lg"
          />
          <img 
            src={equipmentEllipticals} 
            alt="Row of elliptical machines" 
            className="w-full h-48 lg:h-64 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#0D0D0D] px-8 lg:px-16 py-16 lg:py-24">
        <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase text-center mb-12">
          MEET OUR TEAM
        </h2>
        <div className="flex justify-center">
          <img 
            src={teamPhoto} 
            alt="Professional fitness trainers team photo" 
            className="w-full max-w-5xl h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
