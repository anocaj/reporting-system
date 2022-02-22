import { ReportsEntity, ReportState, ReportType } from "@reporting-system/api-interfaces";

export function createReportsEntity(id: string, message:string = 'Message', state:ReportState = "OPEN",type:ReportType = "SPAM"): ReportsEntity {
    return {
        id,
        message,
        state,
        type
    }
}