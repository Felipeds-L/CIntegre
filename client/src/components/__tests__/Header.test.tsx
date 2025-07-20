import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("Renders header with nav link to Ranking", () => {
    render(<Header />);

    const rankingLink = screen.getByRole("link", { name: /ranking/i });
    expect(rankingLink).toBeInTheDocument();
    expect(rankingLink).toHaveAttribute("href", "/ranking");
  });

  it("Renders header with nav link to main page", () => {
    render(<Header />);

    const mainLink = screen.getByRole("link", { name: /logo cintegre/i });
    expect(mainLink).toBeInTheDocument();
    expect(mainLink).toHaveAttribute("href", "/");
  });

  it("Renders header with nav link to Activities", () => {
    render(<Header />);

    const activitiesLink = screen.getByRole("link", {
      name: /Pedidos Disponíveis/i,
    });
    expect(activitiesLink).toBeInTheDocument();
    expect(activitiesLink).toHaveAttribute("href", "/activities");
  });

  it("Renders header with nav link to My Activities", () => {
    render(<Header />);

    const myActivitiesLink = screen.getByRole("link", {
      name: /Meus Pedidos/i,
    });
    expect(myActivitiesLink).toBeInTheDocument();
    expect(myActivitiesLink).toHaveAttribute("href", "/my-activities");
  });

  it("Renders header with nav link to Profile", () => {
    render(<Header />);

    const profileLink = screen.getByRole("link", {
      name: /profile/i,
    });
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute("href", "/profile");
  });
});
