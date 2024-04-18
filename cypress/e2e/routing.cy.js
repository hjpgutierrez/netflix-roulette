describe("My First Test", () => {
  it("After refresh the page, it should keep the same movie list.", () => {
    cy.visit("http://localhost:3000/"); // ?query=test&genre=&orderby=Release+Date

    cy.get(".form-control").type("test");
    cy.contains("Search").click();
    cy.url().should("include", "query=test");
    cy.contains("The Greatest Showman");
    cy.reload();
    cy.contains("The Greatest Showman");
  });
});
