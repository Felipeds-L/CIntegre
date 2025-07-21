import { render, screen } from "@testing-library/react";
import ActivityCard from "../general/ActivityCard";

describe("ActivityCard component", () => {
  // Mock data for the ActivityCard component
  const mockApiData = {
    id: 25,
    title: "Campanha de arrecadação de alimentos",
    ngoName: "ONG Menos Fome",
    date: "25/12/2024",
    description:
      "Ajude a combater a fome arrecadando alimentos não perecíveis.",
    tags: ["alimentos", "solidariedade", "comunidade"],
    imageUrl: "https://example.com/image.jpg",
  };

  it("Renders the ActivityCard with provided data", () => {
    render(<ActivityCard apiData={mockApiData} />);

    // Check if the title is rendered
    expect(screen.getByText(mockApiData.title)).toBeInTheDocument();

    // Check if the NGO name is rendered
    expect(screen.getByText(mockApiData.ngoName)).toBeInTheDocument();

    // Check if the date is rendered
    expect(screen.getByText(mockApiData.date)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(mockApiData.description)).toBeInTheDocument();

    // Check if the tag is rendered
    expect(screen.getByText(`#${mockApiData.tags[0]}`)).toBeInTheDocument();
  });

  it("Renders the link to support the activity with correct href", () => {
    render(<ActivityCard apiData={mockApiData} />);

    const linkElement = screen.getByRole("link", { name: "Apoiar!" });
    expect(linkElement).toHaveAttribute("href", `activities/${mockApiData.id}`);
  });

  it("Does not render the component if apiData is null", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { container } = render(<ActivityCard apiData={null as any} />);
    expect(container.firstChild).toBeNull();
  });
});
