describe("template spec", () => {
  it("Log in on amazona", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#signin").click();
    cy.get("#email").type("admin@example.com");
    cy.get("#password").type("1234");
    cy.get("#signinformular").click();
    cy.get("#adminButton").should("exist");
  });
});
