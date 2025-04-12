
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Search, Filter, CalendarIcon, ChevronDown } from "lucide-react";

const reportData = [
  {
    id: "RPT-2023-001",
    title: "Quarterly Risk Assessment",
    date: "Dec 15, 2023",
    type: "Quarterly",
    status: "Final",
    riskScore: 65,
  },
  {
    id: "RPT-2023-002",
    title: "Cybersecurity Risk Analysis",
    date: "Dec 10, 2023",
    type: "Special",
    status: "Final",
    riskScore: 78,
  },
  {
    id: "RPT-2023-003",
    title: "Supply Chain Vulnerability Assessment",
    date: "Dec 5, 2023",
    type: "Special",
    status: "Final",
    riskScore: 42,
  },
  {
    id: "RPT-2023-004",
    title: "Financial Risk Trend Analysis",
    date: "Nov 28, 2023",
    type: "Monthly",
    status: "Final",
    riskScore: 55,
  },
  {
    id: "RPT-2023-005",
    title: "Compliance Gap Analysis",
    date: "Nov 15, 2023",
    type: "Quarterly",
    status: "Final",
    riskScore: 38,
  },
];

const draftReports = [
  {
    id: "DFT-2023-001",
    title: "Emerging Market Entry Risk Assessment",
    date: "Dec 18, 2023",
    type: "Special",
    status: "Draft",
    progress: 75,
  },
  {
    id: "DFT-2023-002",
    title: "Monthly Risk Dashboard - December",
    date: "Dec 16, 2023",
    type: "Monthly",
    status: "Draft",
    progress: 90,
  },
];

const getRiskScoreColor = (score: number) => {
  if (score < 40) return "bg-risk-low text-white";
  if (score < 70) return "bg-risk-medium text-white";
  return "bg-risk-high text-white";
};

const Reports = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground mt-2">
          Access your risk analysis reports and insights
        </p>
      </div>

      <Tabs defaultValue="published" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>Date Range</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search reports..." className="h-9" />
        </div>

        <TabsContent value="published" className="space-y-4">
          {reportData.map((report) => (
            <Card key={report.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      {report.id}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {report.date}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {report.type}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-medium">{report.title}</h3>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Risk Score:
                      </span>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${getRiskScoreColor(
                          report.riskScore
                        )}`}
                      >
                        {report.riskScore}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 bg-muted/50 p-4 sm:w-48">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-1">
                    <FileText className="h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          {draftReports.map((report) => (
            <Card key={report.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      {report.id}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {report.date}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {report.type}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-medium">{report.title}</h3>
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Completion:
                      </span>
                      <div className="h-2 w-24 rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${report.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">{report.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 bg-muted/50 p-4 sm:w-48">
                  <Button size="sm" variant="secondary" className="gap-1">
                    Continue Editing
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
              <CardDescription>
                Start a new report using one of our pre-defined templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Quarterly Risk Assessment",
                    description: "Comprehensive review of all risk categories",
                    icon: <FileText className="h-8 w-8 text-primary/70" />,
                  },
                  {
                    title: "Monthly Risk Dashboard",
                    description: "Key metrics and indicators summary",
                    icon: <FileText className="h-8 w-8 text-primary/70" />,
                  },
                  {
                    title: "Compliance Analysis",
                    description: "Regulatory compliance status and gaps",
                    icon: <FileText className="h-8 w-8 text-primary/70" />,
                  },
                ].map((template, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer flex-col items-center rounded-lg border p-4 text-center transition-all hover:border-primary/50 hover:bg-muted"
                  >
                    <div className="mb-2">{template.icon}</div>
                    <h3 className="text-md font-medium">{template.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {template.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
