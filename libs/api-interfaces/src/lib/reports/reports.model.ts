export enum ReportStates {
    OPEN = "OPEN",
    BLOCKED = "BLOCKED",
    RESOLVED = "RESOLVED",
    CLOSED = "CLOSED"
}
export type ReportState = "OPEN" | "BLOCKED" | "RESOLVED" | "CLOSED"
type ReportReferenceType = "REPORT"
export type ReportType = "SPAM" | "INFRINGES_PROPERTY" | "VIOLATES_POLICIES"
type ReportReferenceResourceType = "ARTICLE" | "REPLY" | "POST"
interface ReportReference {
    referenceId: string,
    referenceType: ReportReferenceType
}
interface ReportPayload {
    source: ReportReferenceType,
    reportType: ReportType,
    message: string,
    reportId: string,
    referenceResourceId: string,
    referenceResourceType: ReportReferenceResourceType
}
export interface Report {
    id: string,
    source: ReportReferenceType,
    sourceIdentityId: string,
    reference: ReportReference,
    state: ReportState,
    payload: ReportPayload,
    created: string
}

export interface ReportsEntity {
    id: string,
    state: ReportState,
    type: ReportType,
    message: string
}
