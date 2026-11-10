import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("affiche la marque Expert Nextcloud", () => {
  render(<App />);
  const brands = screen.getAllByText(/Nextcloud/i);
  expect(brands.length).toBeGreaterThan(0);
});
