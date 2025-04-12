
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const impactLabels = ["Negligible", "Minor", "Moderate", "Major", "Severe"];
const likelihoodLabels = ["Rare", "Unlikely", "Possible", "Likely", "Almost Certain"];

// Mock data for the heatmap - each cell contains the number of risks in that category
const heatmapData = [
  [1, 0, 0, 0, 2], // Rare row
  [0, 1, 2, 3, 1], // Unlikely row
  [0, 2, 4, 2, 2], // Possible row
  [1, 2, 3, 3, 1], // Likely row
  [0, 0, 2, 1, 3], // Almost Certain row
];

const RiskHeatmap = () => {
  const getCellColor = (likelihood: number, impact: number) => {
    // Calculate risk score (1-25)
    const score = (likelihood + 1) * (impact + 1);
    
    if (score <= 4) return "bg-green-100 text-green-800"; // Low risk
    if (score <= 9) return "bg-green-200 text-green-800";
    if (score <= 14) return "bg-yellow-100 text-yellow-800"; // Medium risk
    if (score <= 19) return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800"; // High risk
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Heatmap</CardTitle>
        <CardDescription>
          Distribution of risks by likelihood and impact severity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-xs">
                <th className="w-24 border p-1 text-left font-normal text-muted-foreground">Likelihood / Impact</th>
                {impactLabels.map((label, index) => (
                  <th key={index} className="border p-1 text-center font-normal">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {likelihoodLabels.map((rowLabel, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border p-1 text-xs text-muted-foreground">{rowLabel}</td>
                  {heatmapData[rowIndex].map((count, colIndex) => (
                    <td
                      key={colIndex}
                      className={cn(
                        "border p-3 text-center text-sm font-medium",
                        getCellColor(rowIndex, colIndex)
                      )}
                    >
                      {count}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskHeatmap;
