import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { User, Briefcase, GraduationCap, MapPin, Phone } from "lucide-react";

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  skills: string;
  experience: string;
  education: string;
  jobPreferences: string;
  receiveJobAlerts: boolean;
}

export const UserProfileForm = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    jobPreferences: "",
    receiveJobAlerts: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store in localStorage for now (will be moved to database later)
    localStorage.setItem('cvjoyride_profile', JSON.stringify(profile));
    
    toast({
      title: "Profile Saved Successfully!",
      description: "Your profile has been saved and will be used to generate ATS-optimized CVs.",
      duration: 5000,
    });
  };

  const handleChange = (field: keyof UserProfile) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="profile" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Create Your Profile
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about yourself to generate perfectly tailored, ATS-optimized CVs for every job application.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Your Professional Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={profile.fullName}
                    onChange={handleChange('fullName')}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange('email')}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={handleChange('phone')}
                    placeholder="+27 XX XXX XXXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={handleChange('location')}
                    placeholder="City, Province, South Africa"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  Skills & Technologies
                </Label>
                <Textarea
                  id="skills"
                  value={profile.skills}
                  onChange={handleChange('skills')}
                  placeholder="List your key skills, technologies, and competencies (e.g., Microsoft Office, Customer Service, Python, Project Management)"
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Work Experience</Label>
                <Textarea
                  id="experience"
                  value={profile.experience}
                  onChange={handleChange('experience')}
                  placeholder="Describe your work history, including job titles, companies, and key achievements"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education" className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  Education & Certifications
                </Label>
                <Textarea
                  id="education"
                  value={profile.education}
                  onChange={handleChange('education')}
                  placeholder="List your educational background, degrees, certifications, and training"
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobPreferences">Job Preferences</Label>
                <Textarea
                  id="jobPreferences"
                  value={profile.jobPreferences}
                  onChange={handleChange('jobPreferences')}
                  placeholder="What types of jobs are you looking for? (e.g., Remote work, Customer Service, IT Support, Administration)"
                  className="min-h-[80px]"
                  required
                />
              </div>

              <div className="flex items-center justify-between space-x-2 p-4 bg-muted/30 rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="receiveJobAlerts" className="text-base">
                    Receive Job Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get WhatsApp notifications when new matching jobs are found
                  </p>
                </div>
                <Switch
                  id="receiveJobAlerts"
                  checked={profile.receiveJobAlerts}
                  onCheckedChange={(checked) => 
                    setProfile(prev => ({ ...prev, receiveJobAlerts: checked }))
                  }
                />
              </div>

              <Button type="submit" variant="success" size="lg" className="w-full">
                Save Profile & Enable ATS Matching
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};