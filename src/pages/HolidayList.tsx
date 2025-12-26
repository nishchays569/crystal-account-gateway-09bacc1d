import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Holiday {
  date: string;
  name: string;
  type: "global" | "india";
}

const holidays: Holiday[] = [
  { date: "2025-01-01", name: "New Year's Day", type: "global" },
  { date: "2025-01-14", name: "Makar Sankranti", type: "india" },
  { date: "2025-01-26", name: "Republic Day", type: "india" },
  { date: "2025-03-14", name: "Holi", type: "india" },
  { date: "2025-03-31", name: "Eid ul-Fitr", type: "india" },
  { date: "2025-04-10", name: "Mahavir Jayanti", type: "india" },
  { date: "2025-04-14", name: "Ambedkar Jayanti", type: "india" },
  { date: "2025-04-18", name: "Good Friday", type: "global" },
  { date: "2025-04-20", name: "Easter Sunday", type: "global" },
  { date: "2025-05-01", name: "May Day", type: "global" },
  { date: "2025-05-12", name: "Buddha Purnima", type: "india" },
  { date: "2025-06-07", name: "Eid ul-Adha", type: "india" },
  { date: "2025-07-06", name: "Muharram", type: "india" },
  { date: "2025-08-15", name: "Independence Day", type: "india" },
  { date: "2025-08-16", name: "Janmashtami", type: "india" },
  { date: "2025-09-05", name: "Milad un-Nabi", type: "india" },
  { date: "2025-10-02", name: "Gandhi Jayanti", type: "india" },
  { date: "2025-10-02", name: "Dussehra", type: "india" },
  { date: "2025-10-20", name: "Diwali", type: "india" },
  { date: "2025-10-21", name: "Govardhan Puja", type: "india" },
  { date: "2025-11-01", name: "All Saints' Day", type: "global" },
  { date: "2025-11-05", name: "Guru Nanak Jayanti", type: "india" },
  { date: "2025-12-25", name: "Christmas", type: "global" },
  { date: "2025-12-31", name: "New Year's Eve", type: "global" },
];

const HolidayList = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Calendar className="text-primary" size={20} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Holiday List 2025</h1>
          <p className="text-muted-foreground">Global and Indian public holidays</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Holiday</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holidays.map((holiday, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{formatDate(holiday.date)}</TableCell>
                <TableCell>{holiday.name}</TableCell>
                <TableCell>
                  <Badge variant={holiday.type === "global" ? "default" : "secondary"}>
                    {holiday.type === "global" ? "Global" : "India"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HolidayList;
