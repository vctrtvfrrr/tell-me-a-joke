describe("Complete interaction", () => {
  let joke = "";

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

  it("should change the route and generate a random joke in a modal", () => {
    cy.get(".modal-container").should("have.css", "display", "none");
    cy.server();
    cy.route("https://geek-jokes.sameerkumar.website/*").as("geekJokes");
    cy.get(".overall").click({ force: true });
    cy.wait("@geekJokes").then(({ response }) => {
      joke = response.body.joke;
      cy.get(".modal-container").should("not.have.css", "display", "none");
      cy.get(".blockquote").contains(joke);
    });
  });
});
