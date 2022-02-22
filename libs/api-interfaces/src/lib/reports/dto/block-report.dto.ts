import { UpdateReportDto } from "./update-report.dto";

export interface BlockReportDto extends UpdateReportDto {
    ticketState: "BLOCKED"
}
