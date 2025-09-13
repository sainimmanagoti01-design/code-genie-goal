import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Smile, Frown, Zap, CloudRain } from "lucide-react";

const moodOptions = [
  { id: 'happy', label: 'Happy', icon: Smile, color: 'wellness-happy', value: 5 },
  { id: 'calm', label: 'Calm', icon: Heart, color: 'wellness-calm', value: 4 },
  { id: 'energetic', label: 'Energetic', icon: Zap, color: 'wellness-energetic', value: 4 },
  { id: 'anxious', label: 'Anxious', icon: CloudRain, color: 'wellness-anxious', value: 2 },
  { id: 'sad', label: 'Sad', icon: Frown, color: 'wellness-sad', value: 1 },
];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [wellnessLevel, setWellnessLevel] = useState(7);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedMood) {
      setIsSubmitted(true);
      // Here you would typically save the data
      setTimeout(() => setIsSubmitted(false), 2000);
    }
  };

  return (
    <Card className="bg-gradient-calm border-0 shadow-wellness">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">
          Daily Mood Check-in
        </CardTitle>
        <p className="text-muted-foreground text-center">
          How are you feeling today? Your feelings matter.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mood Selection */}
        <div>
          <h3 className="text-lg font-medium mb-3">Select your mood</h3>
          <div className="grid grid-cols-5 gap-3">
            {moodOptions.map((mood) => {
              const Icon = mood.icon;
              return (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedMood === mood.id
                      ? `border-${mood.color} bg-${mood.color}/10 shadow-soft`
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${
                    selectedMood === mood.id ? `text-${mood.color}` : 'text-muted-foreground'
                  }`} />
                  <span className="text-sm font-medium block">{mood.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wellness Level */}
        <div>
          <h3 className="text-lg font-medium mb-3">
            Overall wellness level: {wellnessLevel}/10
          </h3>
          <Progress value={wellnessLevel * 10} className="h-3" />
          <div className="flex justify-between mt-2">
            <button
              onClick={() => setWellnessLevel(Math.max(1, wellnessLevel - 1))}
              className="px-4 py-2 text-sm bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              -
            </button>
            <button
              onClick={() => setWellnessLevel(Math.min(10, wellnessLevel + 1))}
              className="px-4 py-2 text-sm bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Notes */}
        <div>
          <h3 className="text-lg font-medium mb-3">
            Optional notes (What's on your mind?)
          </h3>
          <Textarea
            placeholder="Share what's contributing to your mood today..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px] border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={!selectedMood || isSubmitted}
          className="w-full bg-gradient-wellness hover:opacity-90 text-white font-medium py-6 rounded-xl transition-all duration-300 hover:shadow-wellness"
        >
          {isSubmitted ? "✓ Check-in Saved!" : "Complete Daily Check-in"}
        </Button>
      </CardContent>
    </Card>
  );
}