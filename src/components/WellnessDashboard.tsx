import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, Calendar, Target, Award } from "lucide-react";

const moodData = [
  { date: 'Mon', mood: 7, wellness: 6 },
  { date: 'Tue', mood: 8, wellness: 7 },
  { date: 'Wed', mood: 6, wellness: 5 },
  { date: 'Thu', mood: 9, wellness: 8 },
  { date: 'Fri', mood: 7, wellness: 7 },
  { date: 'Sat', mood: 8, wellness: 9 },
  { date: 'Sun', mood: 9, wellness: 8 },
];

const stats = [
  { 
    title: "Average Mood", 
    value: "7.7/10", 
    change: "+0.5", 
    icon: TrendingUp,
    color: "wellness-happy"
  },
  { 
    title: "Check-in Streak", 
    value: "12 days", 
    change: "+2", 
    icon: Calendar,
    color: "wellness-energetic"
  },
  { 
    title: "Wellness Goal", 
    value: "85%", 
    change: "+10%", 
    icon: Target,
    color: "wellness-calm"
  },
  { 
    title: "Achievements", 
    value: "3 badges", 
    change: "+1", 
    icon: Award,
    color: "primary"
  },
];

export default function WellnessDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-soft bg-card/50 backdrop-blur">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm text-${stat.color} font-medium`}>
                      {stat.change} this week
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}/10`}>
                    <Icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mood Trends */}
        <Card className="border-0 shadow-wellness bg-gradient-calm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Weekly Mood Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Wellness Progress */}
        <Card className="border-0 shadow-wellness bg-gradient-mood">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Wellness Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="wellness"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  fill="hsl(var(--accent) / 0.3)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bars */}
      <Card className="border-0 shadow-soft">
        <CardHeader>
          <CardTitle>Today's Wellness Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Mindfulness Practice</span>
              <span>3/5 sessions</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Physical Activity</span>
              <span>45/60 minutes</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Social Connection</span>
              <span>2/3 interactions</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}