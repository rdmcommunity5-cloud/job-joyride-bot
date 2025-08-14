import { HeroSection } from "@/components/HeroSection";
import { UserProfileForm } from "@/components/UserProfileForm";
import { CVGenerator } from "@/components/CVGenerator";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Smartphone, Globe, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why CVJoyRide Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built specifically for South African communities with accessibility and impact in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp Integration</h3>
                <p className="text-sm text-muted-foreground">
                  No internet browsing needed - everything works through WhatsApp
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Mobile-First Design</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for users with limited data and basic smartphones
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting remote communities including Khoi and San populations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">POPIA Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Secure, private, and fully compliant with South African data protection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Profile Form */}
      <UserProfileForm />

      {/* CV Generator */}
      <CVGenerator />

      {/* Impact Dashboard */}
      <ImpactDashboard />

      {/* Backend Integration Notice */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Impact</h2>
            <p className="text-lg mb-8 opacity-90">
              This prototype demonstrates CVJoyRide's core functionality. To activate the full platform 
              with WhatsApp bot integration, job scanning, and automated applications, we need to connect 
              backend services including user database, LLM APIs, and WhatsApp Business API.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Next Steps for Full Platform:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-semibold mb-2">✅ Backend Integration</h4>
                  <p className="text-sm opacity-80">Connect Supabase for user profiles & CV storage</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✅ WhatsApp Bot Setup</h4>
                  <p className="text-sm opacity-80">WhatsApp Business API for job notifications</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✅ Job Scanning API</h4>
                  <p className="text-sm opacity-80">Automated job board scanning & matching</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✅ LLM Integration</h4>
                  <p className="text-sm opacity-80">AI-powered CV generation & ATS optimization</p>
                </div>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Connect Backend Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;