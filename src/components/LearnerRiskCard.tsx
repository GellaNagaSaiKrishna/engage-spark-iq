import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AlertTriangle, User, MessageCircle, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface LearnerData {
  id: string;
  name: string;
  riskScore: number;
  lastActivity: string;
  courseProgress: number;
  riskFactors: string[];
}

const atRiskLearners: LearnerData[] = [
  {
    id: "1",
    name: "Sarah Chen",
    riskScore: 85,
    lastActivity: "3 days ago",
    courseProgress: 45,
    riskFactors: ["Low engagement", "Missed deadlines"]
  },
  {
    id: "2", 
    name: "Marcus Johnson",
    riskScore: 72,
    lastActivity: "1 day ago",
    courseProgress: 62,
    riskFactors: ["Declining performance", "Irregular login"]
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    riskScore: 68,
    lastActivity: "2 days ago", 
    courseProgress: 38,
    riskFactors: ["Low quiz scores", "Peer isolation"]
  }
];

const getRiskLevel = (score: number) => {
  if (score >= 80) return { level: "High", color: "bg-destructive" };
  if (score >= 60) return { level: "Medium", color: "bg-warning" };
  return { level: "Low", color: "bg-success" };
};

export const LearnerRiskCard = () => {
  return (
    <Card className="bg-metric-card border-0 shadow-[var(--shadow-card)]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            At-Risk Learners
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {atRiskLearners.length} alerts
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {atRiskLearners.map((learner) => {
          const risk = getRiskLevel(learner.riskScore);
          return (
            <div
              key={learner.id}
              className="p-4 rounded-lg border bg-background/50 hover:bg-background/80 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs bg-primary/10 text-primary">
                      {learner.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm text-foreground">{learner.name}</p>
                    <p className="text-xs text-muted-foreground">{learner.lastActivity}</p>
                  </div>
                </div>
                <Badge 
                  className={cn(
                    "text-xs px-2 py-1",
                    risk.color,
                    "text-white border-0"
                  )}
                >
                  {risk.level} Risk
                </Badge>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Course Progress</span>
                  <span className="font-medium">{learner.courseProgress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div 
                    className="bg-primary h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${learner.courseProgress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {learner.riskFactors.map((factor, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {factor}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Message
                </Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Assign Task
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};