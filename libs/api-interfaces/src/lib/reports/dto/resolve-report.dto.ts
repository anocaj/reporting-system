import { UpdateReportDto } from "./update-report.dto";

export interface ResolveReportDto extends UpdateReportDto {
    ticketState: "RESOLVED"
}
