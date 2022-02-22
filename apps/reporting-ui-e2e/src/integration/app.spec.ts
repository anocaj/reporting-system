import { getReportingListItem } from "../support/app.po";

describe('reporting-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display SpamReportingListItem', () => {
    // Function helper example, see `../support/app.po.ts` file
    getReportingListItem().should('be.visible');
  });
});
