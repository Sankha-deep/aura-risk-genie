
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

const riskScores = {
  overall: 65,
  financial: 45,
  operational: 78,
  compliance: 60,
  strategic: 70,
};

const RiskOverview = () => {
  const getRiskColor = (score: number) => {
    if (score < 40) return "text-risk-low";
    if (score < 70) return "text-risk-medium";
    return "text-risk-high";
  };

  const getRiskProgressColor = (score: number) => {
    if (score < 40) return "bg-risk-low";
    if (score < 70) return "bg-risk-medium";
    return "bg-risk-high";
  };

  const getRiskIcon = (score: number) => {
    if (score < 40) return <CheckCircle className="h-5 w-5 text-risk-low" />;
    if (score < 70) return <AlertTriangle className="h-5 w-5 text-risk-medium" />;
    return <AlertTriangle className="h-5 w-5 text-risk-high" />;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Overview</CardTitle>
        <CardDescription>Current risk assessment scores across categories</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getRiskIcon(riskScores.overall)}
              <span className="font-medium">Overall Risk</span>
            </div>
            <span className={`font-bold ${getRiskColor(riskScores.overall)}`}>
              {riskScores.overall}%
            </span>
          </div>
          <Progress value={riskScores.overall} className={getRiskProgressColor(riskScores.overall)} />
        </div>

        {Object.entries(riskScores)
          .filter(([key]) => key !== "overall")
          .map(([key, score]) => (
            <div key={key} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getRiskIcon(score)}
                  <span className="text-sm font-medium capitalize">{key} Risk</span>
                </div>
                <span className={`text-sm font-bold ${getRiskColor(score)}`}>
                  {score}%
                </span>
              </div>
              <Progress value={score} className={getRiskProgressColor(score)} />
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default RiskOverview;
