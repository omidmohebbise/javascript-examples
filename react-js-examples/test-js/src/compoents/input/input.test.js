import React from "react";
import { render, screen } from "@testing-library/react";
import { DSInput } from "./input";

describe("DSInput", () => {
  it("renders the input component with the provided props", () => {
    const inputProps = {
      id: "my-input",
      type: "text",
      placeholder: "Enter value",
      value: "Hello",
      onChange: jest.fn()
    };

    render(<DSInput {...inputProps} />);

    const inputElement = screen.getByRole("textbox", { name: /Enter value/i });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Hello");
    expect(inputElement).toHaveAttribute("id", "ds-inputmy-input");
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("placeholder", "Enter value");
    expect(inputProps.onChange).not.toHaveBeenCalled();
  });
});
