import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Brain, 
  Heart, 
  Zap, 
  Moon, 
  Coffee, 
  Music, 
  BookOpen, 
  Users,
  Phone,
  CheckCircle
} from "lucide-react";

const strategies = [
  {
    id: 1,
    title: "Deep Breathing Exercise",
    description: "Take 5 minutes to practice mindful breathing to reduce anxiety and stress.",
    category: "mindfulness",
    duration: "5 min",
    difficulty: "Easy",
    icon: Heart,
    color: "wellness-calm"
  },
  {
    id: 2,
    title: "Progressive Muscle Relaxation",
    description: "Tense and release muscle groups to reduce physical tension and mental stress.",
    category: "relaxation",
    duration: "15 min",
    difficulty: "Medium",
    icon: Moon,
    color: "wellness-anxious"
  },
  {
    id: 3,
    title: "Journaling & Reflection",
    description: "Write down your thoughts and feelings to process emotions healthily.",
    category: "self-reflection",
    duration: "10 min",
    difficulty: "Easy",
    icon: BookOpen,
    color: "wellness-happy"
  },
  {
    id: 4,
    title: "Physical Movement",
    description: "Light exercise or stretching to boost endorphins and improve mood.",
    category: "physical",
    duration: "20 min",
    difficulty: "Medium",
    icon: Zap,
    color: "wellness-energetic"
  },
  {
    id: 5,
    title: "Connect with Friends",
    description: "Reach out to someone you trust for support and social connection.",
    category: "social",
    duration: "Varies",
    difficulty: "Easy",
    icon: Users,
    color: "primary"
  },
  {
    id: 6,
    title: "Listen to Calming Music",
    description: "Use music therapy to regulate emotions and create a peaceful environment.",
    category: "creative",
    duration: "10-30 min",
    difficulty: "Easy",
    icon: Music,
    color: "accent"
  }
];

const emergencyContacts = [
  { name: "Crisis Text Line", number: "Text HOME to 741741", available: "24/7" },
  { name: "Campus Counseling", number: "(555) 123-4567", available: "M-F 8AM-6PM" },
  { name: "Student Health Center", number: "(555) 123-4568", available: "24/7" },
];

export default function CopingStrategies() {
  const [completedStrategies, setCompletedStrategies] = useState<number[]>([]);

  const markComplete = (strategyId: number) => {
    if (!completedStrategies.includes(strategyId)) {
      setCompletedStrategies([...completedStrategies, strategyId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Emergency Support */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Phone className="w-5 h-5" />
            Need Immediate Support?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            If you're experiencing a crisis or having thoughts of self-harm, please reach out immediately:
          </p>
          <div className="grid gap-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg">
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.available}</p>
                </div>
                <Button variant="outline" size="sm" className="font-mono">
                  {contact.number}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Coping Strategies */}
      <Card className="border-0 shadow-wellness bg-gradient-calm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Personalized Coping Strategies
          </CardTitle>
          <p className="text-muted-foreground">
            Based on your recent mood patterns, here are recommended strategies:
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {strategies.map((strategy) => {
              const Icon = strategy.icon;
              const isCompleted = completedStrategies.includes(strategy.id);
              
              return (
                <div
                  key={strategy.id}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-primary/10 border-primary/30' 
                      : 'bg-card border-border hover:border-primary/30 hover:shadow-soft'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-${strategy.color}/10 flex-shrink-0`}>
                      <Icon className={`w-5 h-5 text-${strategy.color}`} />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{strategy.title}</h3>
                        {isCompleted && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {strategy.description}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {strategy.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {strategy.difficulty}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs border-${strategy.color}/30 text-${strategy.color}`}
                        >
                          {strategy.category}
                        </Badge>
                      </div>
                      
                      <Button
                        onClick={() => markComplete(strategy.id)}
                        disabled={isCompleted}
                        size="sm"
                        variant={isCompleted ? "secondary" : "default"}
                        className="mt-2"
                      >
                        {isCompleted ? "Completed ✓" : "Try This Strategy"}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Wellness Tips */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-accent" />
            Daily Wellness Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-secondary/20 rounded-lg">
            <p className="text-sm">
              💡 <strong>Tip of the day:</strong> Try the 5-4-3-2-1 grounding technique when feeling overwhelmed.
            </p>
          </div>
          <div className="p-3 bg-accent/10 rounded-lg">
            <p className="text-sm">
              🌱 <strong>Growth mindset:</strong> Remember that setbacks are temporary and part of your growth journey.
            </p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <p className="text-sm">
              🎯 <strong>Small wins:</strong> Celebrate completing even small self-care activities today.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}