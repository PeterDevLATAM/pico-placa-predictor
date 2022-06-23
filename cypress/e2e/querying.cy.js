describe("querying", () => {
  it("User querying ui PROHIBITED circulation", () => {
    cy.visit("http://localhost:3000/");
    // Plate AAA1239
    // date 2022-07-29
    // time 08:57
    cy.viewport(1000, 890);

    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-07-29");
    cy.findByLabelText(/time/i).type("08:57");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.get(".answer__text--denied");
  });
  it("User querying ui PROHIBITED circulation EDGE CASES", () => {
    cy.visit("http://localhost:3000/");
    // Plate AAA1239
    // date 2022-07-29
    // time 06:00
    cy.viewport(1000, 890);

    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-07-29");
    cy.findByLabelText(/time/i).type("06:00");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.get(".answer__text--denied");

    cy.findByLabelText(/plate/i).clear();
    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-07-29");
    cy.findByLabelText(/time/i).type("16:00");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.get(".answer__text--denied");

    cy.findByLabelText(/plate/i).clear();
    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-07-29");
    cy.findByLabelText(/time/i).type("09:30");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.get(".answer__text--denied");

    cy.findByLabelText(/plate/i).clear();
    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-07-29");
    cy.findByLabelText(/time/i).type("21:00");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.get(".answer__text--denied");
  });

  it("User querying ui APPROVED circulation", () => {
    cy.visit("http://localhost:3000/");
    // Plate AAA1239
    // date 2022-07-28
    // time 08:57
    cy.viewport(1000, 890);
    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-07-28");
    cy.findByLabelText(/time/i).type("08:57");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.get(".answer__text--approved");
  });

  it("User querying ui WRONG license plate", () => {
    cy.visit("http://localhost:3000/");
    // Plate AA11239
    // date 2022-07-28
    // time 08:57
    cy.viewport(1000, 890);
    cy.findByLabelText(/plate/i).type("AA11259");
    cy.findByLabelText(/date/i).type("2022-07-28");
    cy.findByLabelText(/time/i).type("08:57");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.findByText(/invalid license plate/i);
  });

  it("User querying ui DATE-BEFORE", () => {
    cy.visit("http://localhost:3000/");
    // Plate AAA1239
    // date 2022-06-09
    // time 08:57
    cy.viewport(1000, 890);
    cy.findByLabelText(/plate/i).type("AAA1259");
    cy.findByLabelText(/date/i).type("2022-06-09");
    cy.findByLabelText(/time/i).type("08:57");
    cy.findByRole("button", {
      name: /consult/i,
    }).click();

    cy.findByText(/date must be ahead in time/i)
  });
});
