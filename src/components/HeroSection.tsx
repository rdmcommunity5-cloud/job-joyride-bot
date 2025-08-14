import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering South African
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Job Seekers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            ATS-optimized CV generation, automated job matching, and WhatsApp support 
            for remote communities across South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Start Your Job Search
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Impact Dashboard
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 p-6 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Focused</h3>
              <p className="text-white/80">Supporting Khoi, San, and other remote communities with accessible job search tools</p>
            </Card>

            <Card className="bg-white/10 border-white/20 p-6 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ATS Optimized</h3>
              <p className="text-white/80">Generate CVs with 80%+ ATS match scores using job-specific keywords</p>
            </Card>

            <Card className="bg-white/10 border-white/20 p-6 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp Ready</h3>
              <p className="text-white/80">Receive job matches and apply directly through WhatsApp - no internet required</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="South African job seekers in community center" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};