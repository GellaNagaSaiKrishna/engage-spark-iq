import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const engagementData = [
  { time: '00:00', engagement: 85, predicted: 87 },
  { time: '04:00', engagement: 78, predicted: 80 },
  { time: '08:00', engagement: 92, predicted: 90 },
  { time: '12:00', engagement: 88, predicted: 85 },
  { time: '16:00', engagement: 75, predicted: 73 },
  { time: '20:00', engagement: 82, predicted: 79 },
  { time: '24:00', engagement: 79, predicted: 76 },
];

export const EngagementChart = () => {
  return (
    <Card className="col-span-2 bg-metric-card border-0 shadow-[var(--shadow-card)]">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          Real-time Engagement Trends
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Current vs predicted learner engagement levels
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={engagementData}>
            <defs>
              <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-primary))" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-secondary))" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="hsl(var(--chart-secondary))" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              domain={[60, 100]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Area
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--chart-primary))"
              strokeWidth={2}
              fill="url(#engagementGradient)"
              name="Current Engagement"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="hsl(var(--chart-secondary))"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Predicted Engagement"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};