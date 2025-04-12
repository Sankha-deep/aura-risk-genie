
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Risk {
  id: string;
  name: string;
  category: string;
  level: "low" | "medium" | "high" | "unknown";
  date: string;
}

const mockRecentRisks: Risk[] = [
  {
    id: "RISK-2023-001",
    name: "Supply chain disruption",
    category: "Operational",
    level: "high",
    date: "2023-12-15",
  },
  {
    id: "RISK-2023-002",
    name: "Data breach potential",
    category: "Compliance",
    level: "medium",
    date: "2023-12-14",
  },
  {
    id: "RISK-2023-003",
    name: "Currency exchange fluctuation",
    category: "Financial",
    level: "low",
    date: "2023-12-12",
  },
  {
    id: "RISK-2023-004",
    name: "New competitor entry",
    category: "Strategic",
    level: "medium",
    date: "2023-12-10",
  },
  {
    id: "RISK-2023-005",
    name: "Regulatory change impact",
    category: "Compliance",
    level: "high",
    date: "2023-12-09",
  },
];

const RecentRisks = () => {
  const getRiskLevelColor = (level: Risk["level"]) => {
    switch (level) {
      case "low":
        return "bg-risk-low text-white";
      case "medium":
        return "bg-risk-medium text-white";
      case "high":
        return "bg-risk-high text-white";
      default:
        return "bg-risk-unknown text-white";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Risks</CardTitle>
        <CardDescription>Newly identified or updated risks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecentRisks.map((risk) => (
            <div
              key={risk.id}
              className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className={cn(getRiskLevelColor(risk.level), "capitalize")}>
                    {risk.level}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{risk.id}</span>
                </div>
                <h4 className="font-medium">{risk.name}</h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{risk.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">
                    Added on {new Date(risk.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center self-end sm:self-auto">
                <button className="text-sm font-medium text-primary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentRisks;
