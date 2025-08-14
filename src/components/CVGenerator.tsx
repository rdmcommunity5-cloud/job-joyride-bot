import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Zap, 
  Target, 
  Download, 
  AlertCircle,
  CheckCircle,
  Sparkles
} from "lucide-react";

export const CVGenerator = () => {
  const { toast } = useToast();
  const [jobDescription, setJobDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [generatedCV, setGeneratedCV] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobDescription.trim()) {
      toast({
        title: "Job Description Required",
        description: "Please paste the job description to generate an ATS-optimized CV.",
        variant: "destructive",
      });
      return;
    }

    // Check if profile exists
    const profile = localStorage.getItem('cvjoyride_profile');
    if (!profile) {
      toast({
        title: "Profile Required",
        description: "Please complete your profile first to generate CVs.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate CV generation process
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock ATS score calculation
      const mockScore = Math.floor(Math.random() * 20) + 80; // 80-100%
      setAtsScore(mockScore);
      
      // Mock CV generation
      const profileData = JSON.parse(profile);
      const mockCV = generateMockCV(profileData, jobDescription);
      setGeneratedCV(mockCV);
      
      toast({
        title: "CV Generated Successfully!",
        description: `Your ATS-optimized CV achieved a ${mockScore}% match score.`,
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Unable to generate CV. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateMockCV = (profile: any, jobDesc: string) => {
    return `${profile.fullName}
${profile.email} | ${profile.phone} | ${profile.location}

PROFESSIONAL SUMMARY
Results-driven professional with strong background in ${profile.skills.split(',')[0]}. Proven track record in ${profile.experience.split(' ')[0]} with excellent communication and problem-solving abilities.

SKILLS
${profile.skills}

EXPERIENCE
${profile.experience}

EDUCATION
${profile.education}

KEY ACHIEVEMENTS
• Tailored application for this specific role
• Strong match with required qualifications
• ATS-optimized formatting for maximum visibility`;
  };

  const handleDownload = () => {
    if (!generatedCV) return;
    
    const blob = new Blob([generatedCV], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ats-optimized-cv.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "CV Downloaded",
      description: "Your ATS-optimized CV has been downloaded successfully.",
    });
  };

  return (
    <section id="generator" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ATS-Optimized CV Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Paste any job description and get a perfectly tailored CV with 80%+ ATS match score.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Job Description Input
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobDescription">Paste Job Description</Label>
                  <Textarea
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Copy and paste the full job description here. Include required skills, qualifications, and responsibilities for best ATS optimization."
                    className="min-h-[300px]"
                    required
                  />
                </div>

                {isGenerating && (
                  <div className="space-y-4">
                    <Progress value={66} className="w-full" />
                    <p className="text-sm text-muted-foreground text-center">
                      Analyzing job requirements and optimizing your CV...
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      Generating ATS-Optimized CV...
                    </>
                  ) : (
                    <>
                      <Target className="mr-2 h-4 w-4" />
                      Generate Tailored CV
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-success" />
                Generated CV Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {atsScore === null ? (
                <div className="text-center py-12">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Enter a job description above to generate your ATS-optimized CV
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* ATS Score Display */}
                  <div className="text-center p-6 bg-gradient-card rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle className="h-6 w-6 text-success" />
                      <span className="text-lg font-semibold">ATS Match Score</span>
                    </div>
                    <div className="text-4xl font-bold text-success mb-2">{atsScore}%</div>
                    <Progress value={atsScore} className="w-full max-w-xs mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {atsScore >= 90 ? "Excellent match!" : 
                       atsScore >= 80 ? "Very good match" : "Good match"}
                    </p>
                  </div>

                  {/* CV Preview */}
                  <div className="space-y-2">
                    <Label>CV Preview</Label>
                    <div className="bg-muted p-4 rounded-lg max-h-60 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap font-mono">
                        {generatedCV}
                      </pre>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleDownload}
                      variant="success" 
                      className="flex-1"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Send via WhatsApp
                    </Button>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Next Steps:</strong> Your CV is ready for application! 
                      In our full platform, this will be automatically sent to your WhatsApp 
                      for easy job applications.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};