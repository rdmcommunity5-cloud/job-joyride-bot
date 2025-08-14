import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  FileText, 
  Target, 
  TrendingUp, 
  MapPin, 
  Phone,
  Heart,
  Download
} from "lucide-react";

export const ImpactDashboard = () => {
  // Mock data for the trial period
  const trialStats = {
    activeUsers: 10,
    cvsGenerated: 47,
    jobApplications: 89,
    avgAtsScore: 87,
    whatsappMessages: 156,
    interviewCallbacks: 12,
    communitiesServed: ["Kimberley", "Upington", "Springbok"],
    weeklyGrowth: 15
  };

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Community Impact Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time metrics showing how CVJoyRide is transforming job search outcomes 
            for South African communities during our pilot program.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-3xl font-bold text-foreground">{trialStats.activeUsers}</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                +{trialStats.weeklyGrowth}% this week
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CVs Generated</p>
                  <p className="text-3xl font-bold text-foreground">{trialStats.cvsGenerated}</p>
                </div>
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                Avg {trialStats.avgAtsScore}% ATS match score
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Job Applications</p>
                  <p className="text-3xl font-bold text-foreground">{trialStats.jobApplications}</p>
                </div>
                <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-success" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-success">
                {trialStats.interviewCallbacks} interviews scheduled
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">WhatsApp Messages</p>
                  <p className="text-3xl font-bold text-foreground">{trialStats.whatsappMessages}</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                Remote accessibility enabled
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Communities Served
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trialStats.communitiesServed.map((community, index) => (
                  <div key={community} className="flex items-center justify-between">
                    <span className="font-medium">{community}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={(3 - index) * 30} className="w-24" />
                      <span className="text-sm text-muted-foreground">{3 - index} users</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Expanding access to remote Khoi and San communities through WhatsApp integration
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Success Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>ATS Match Rate</span>
                  <div className="flex items-center gap-2">
                    <Progress value={trialStats.avgAtsScore} className="w-24" />
                    <span className="font-semibold text-success">{trialStats.avgAtsScore}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interview Callback Rate</span>
                  <div className="flex items-center gap-2">
                    <Progress value={13.5} className="w-24" />
                    <span className="font-semibold text-success">13.5%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>User Engagement</span>
                  <div className="flex items-center gap-2">
                    <Progress value={92} className="w-24" />
                    <span className="font-semibold text-primary">92%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Significantly above industry average for job application success rates
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Donor Appeal Section */}
        <Card className="bg-gradient-hero shadow-glow">
          <CardContent className="p-8 text-center text-white">
            <Heart className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">Support South African Job Seekers</h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our pilot program is showing remarkable results. With your support, we can expand 
              to reach 500+ job seekers across rural South African communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Partner With Us
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Download className="mr-2 h-4 w-4" />
                Download Impact Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};