describe("Complete interaction", () => {
  it("starts with a screen that is neither happy nor sad", () => {
    cy.visit("/");
    cy.get(".overall")
      .find(".face")
      .should("have.class", "neutral");
    cy.url().should("include", "/neutral");
  });

  it("should change the route and make screen 100% sad", () => {
    cy.get(".overall").click({ force: true });
    cy.url().should("include", "/sad");
  });

  it("should change the route and open a modal", () => {
    cy.get(".modal-container").should("have.css", "display", "none");
  });
});
