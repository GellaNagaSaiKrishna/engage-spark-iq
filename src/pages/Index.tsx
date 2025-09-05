import { MetricCard } from "@/components/MetricCard";
import { EngagementChart } from "@/components/EngagementChart";
import { LearnerRiskCard } from "@/components/LearnerRiskCard";
import { NudgePanel } from "@/components/NudgePanel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Users, TrendingUp, AlertTriangle, RefreshCw, Settings } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Engagement Intelligence</h1>
              <p className="text-sm text-muted-foreground">Real-time learner retention dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Activity className="h-3 w-3 mr-1" />
                Live
              </Badge>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${dashboardHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">Predictive Learning Analytics</h2>
            <p className="text-lg opacity-90">Proactive engagement monitoring with AI-powered insights</p>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Active Learners"
              value="2,847"
              change={12}
              changeType="increase"
              subtitle="Last 24 hours"
            />
            <MetricCard
              title="Avg Engagement"
              value="82%"
              change={-3}
              changeType="decrease"
              subtitle="Weekly average"
            />
            <MetricCard
              title="At-Risk Learners"
              value="23"
              change={-18}
              changeType="increase"
              subtitle="High priority"
            />
            <MetricCard
              title="Retention Rate"
              value="94.2%"
              change={5}
              changeType="increase"
              subtitle="Monthly cohort"
            />
          </div>
        </section>

        {/* Analytics & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Engagement Chart - spans 2 columns */}
          <div className="lg:col-span-2">
            <EngagementChart />
          </div>
          
          {/* Nudge Panel */}
          <div>
            <NudgePanel />
          </div>
        </div>

        {/* At-Risk Learners */}
        <section className="mt-6">
          <LearnerRiskCard />
        </section>

        {/* Quick Actions */}
        <section className="mt-8 p-6 bg-card rounded-lg border shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-12 bg-gradient-to-r from-primary to-primary-glow border-0">
              <Users className="h-4 w-4 mr-2" />
              Send Bulk Reminder
            </Button>
            <Button variant="outline" className="h-12">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Generate Risk Report
            </Button>
            <Button variant="outline" className="h-12">
              <Activity className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;