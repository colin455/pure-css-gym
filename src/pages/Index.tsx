import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
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
          <li><a href="#hero" className="hover:text-primary transition-colors cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors cursor-pointer">About</a></li>
          <li><a href="#equipment" className="hover:text-primary transition-colors cursor-pointer">Equipment</a></li>
          <li><a href="#team" className="hover:text-primary transition-colors cursor-pointer">Team</a></li>
          <li><a href="#locate-us" className="hover:text-primary transition-colors cursor-pointer">Locate us</a></li>
          <li><a href="#contact-us" className="hover:text-primary transition-colors cursor-pointer">Contact us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main id="hero" className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 lg:py-20 gap-8 lg:gap-0">
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
            onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
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
      <section id="about" className="bg-[#0D0D0D] px-8 lg:px-16 py-16 lg:py-24">
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
              onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
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
      <section id="equipment" className="bg-background px-8 lg:px-16 py-16 lg:py-24">
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
      <section id="team" className="bg-[#0D0D0D] px-8 lg:px-16 py-16 lg:py-24">
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

      {/* Locate Us Section */}
      <section id="locate-us" className="bg-background px-8 lg:px-16 py-16 lg:py-24">
        <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase text-center mb-6">
          LOCATE US
        </h2>
        <p className="text-lg lg:text-xl text-foreground text-center italic font-light mb-12 max-w-2xl mx-auto">
          "Find us easily and start your fitness journey today."
        </p>
        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5304307398424!2d-79.3871!3d43.6426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM4JzMzLjQiTiA3OcKwMjMnMTMuNiJX!5e0!3m2!1sen!2sca!4v00000000000"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            title="Fitness World Location"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="bg-[#0D0D0D] px-8 lg:px-16 py-16 lg:py-24">
        <h2 className="text-4xl lg:text-6xl font-black text-foreground uppercase text-center mb-6">
          CONTACT US
        </h2>
        <p className="text-lg lg:text-xl text-foreground text-center italic font-light mb-12 max-w-3xl mx-auto">
          "Have questions or want to get started? Reach out to us anytime — we'd love to hear from you!"
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Facebook className="w-6 h-6 text-background" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Instagram className="w-6 h-6 text-background" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Twitter className="w-6 h-6 text-background" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Youtube className="w-6 h-6 text-background" />
          </a>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-background" />
          </a>
        </div>

        <div className="flex justify-center">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-black text-lg px-12 py-6 rounded-full uppercase"
          >
            MESSAGE US NOW
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
