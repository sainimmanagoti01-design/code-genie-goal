import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MoodTracker from "@/components/MoodTracker";
import WellnessDashboard from "@/components/WellnessDashboard";
import CopingStrategies from "@/components/CopingStrategies";
import { Brain, BarChart3, Heart, Menu, User, Bell } from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";
import meditationIcon from "@/assets/meditation-icon.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-wellness flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-wellness bg-clip-text text-transparent">
                  WellnessMind
                </h1>
                <p className="text-xs text-muted-foreground">Student Mental Health Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Mental Health
                  <span className="block bg-gradient-wellness bg-clip-text text-transparent">
                    Journey Matters
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Track your daily wellness, discover personalized coping strategies, and build healthy habits with our AI-driven mental health platform designed specifically for students.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-gradient-wellness hover:opacity-90 text-white shadow-wellness"
                  onClick={() => setActiveTab("mood")}
                >
                  Start Daily Check-in
                </Button>
                <Button variant="outline" size="lg">
                  View Wellness Dashboard
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wellness-happy rounded-full"></div>
                  <span>1,000+ Students Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wellness-calm rounded-full"></div>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={wellnessHero} 
                alt="Mental wellness platform dashboard"
                className="rounded-2xl shadow-wellness w-full"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full overflow-hidden shadow-soft">
                <img 
                  src={meditationIcon} 
                  alt="Meditation and mindfulness" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur rounded-xl shadow-soft">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-gradient-wellness data-[state=active]:text-white"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="mood"
              className="data-[state=active]:bg-gradient-wellness data-[state=active]:text-white"
            >
              <Heart className="w-4 h-4 mr-2" />
              Mood Check-in
            </TabsTrigger>
            <TabsTrigger 
              value="strategies"
              className="data-[state=active]:bg-gradient-wellness data-[state=active]:text-white"
            >
              <Brain className="w-4 h-4 mr-2" />
              Coping Strategies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Your Wellness Overview</h3>
              <p className="text-muted-foreground">
                Track your progress and see insights from your mental health journey
              </p>
            </div>
            <WellnessDashboard />
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <MoodTracker />
            </div>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Personalized Wellness Strategies</h3>
              <p className="text-muted-foreground">
                Discover coping techniques tailored to your needs and mood patterns
              </p>
            </div>
            <CopingStrategies />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur border-t border-border/50 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              WellnessMind - Supporting student mental health with AI-driven insights
            </p>
            <p>
              Remember: This platform complements but doesn't replace professional mental health care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;