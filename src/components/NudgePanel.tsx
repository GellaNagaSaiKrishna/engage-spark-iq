import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, Zap, Users, Lightbulb, CheckCircle } from "lucide-react";
import { useState } from "react";

interface NudgeAction {
  id: string;
  type: "reminder" | "assessment" | "peer_challenge" | "mentor_connect";
  title: string;
  description: string;
  targetCount: number;
  isActive: boolean;
  successRate: number;
}

const nudgeActions: NudgeAction[] = [
  {
    id: "1",
    type: "reminder",
    title: "Learning Streak Reminder",
    description: "Gentle reminder to maintain daily learning habit",
    targetCount: 12,
    isActive: true,
    successRate: 78
  },
  {
    id: "2", 
    type: "assessment",
    title: "Quick Knowledge Check",
    description: "5-minute micro-assessment to reinforce learning",
    targetCount: 8,
    isActive: true,
    successRate: 85
  },
  {
    id: "3",
    type: "peer_challenge",
    title: "Study Buddy Challenge",
    description: "Connect with peers for collaborative learning",
    targetCount: 5,
    isActive: false,
    successRate: 92
  },
  {
    id: "4",
    type: "mentor_connect",
    title: "Mentor Office Hours",
    description: "Schedule 1:1 time with course mentor",
    targetCount: 3,
    isActive: true,
    successRate: 94
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "reminder":
      return <Bell className="h-4 w-4" />;
    case "assessment":  
      return <Zap className="h-4 w-4" />;
    case "peer_challenge":
      return <Users className="h-4 w-4" />;
    case "mentor_connect":
      return <Lightbulb className="h-4 w-4" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

export const NudgePanel = () => {
  const [actions, setActions] = useState(nudgeActions);

  const toggleAction = (id: string) => {
    setActions(prev => 
      prev.map(action => 
        action.id === id ? { ...action, isActive: !action.isActive } : action
      )
    );
  };

  const triggerNudge = (id: string) => {
    // In a real app, this would trigger the nudge system
    console.log(`Triggering nudge action: ${id}`);
  };

  return (
    <Card className="bg-metric-card border-0 shadow-[var(--shadow-card)]">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          Auto-Nudge System
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Intelligent engagement triggers
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action) => (
          <div
            key={action.id}
            className="p-4 rounded-lg border bg-background/50 hover:bg-background/80 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {getIcon(action.type)}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>
              <Switch
                checked={action.isActive}
                onCheckedChange={() => toggleAction(action.id)}
              />
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">{action.targetCount}</p>
                  <p className="text-xs text-muted-foreground">Targets</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-success">{action.successRate}%</p>
                  <p className="text-xs text-muted-foreground">Success</p>
                </div>
              </div>
              <Badge 
                variant={action.isActive ? "default" : "secondary"}
                className="text-xs"
              >
                {action.isActive ? "Active" : "Paused"}
              </Badge>
            </div>

            {action.isActive && (
              <Button
                size="sm"
                onClick={() => triggerNudge(action.id)}
                className="w-full h-8 text-xs bg-gradient-to-r from-primary to-primary-glow border-0"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Trigger Now
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};