
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../../TodoList";
//import { act } from "react-dom/test-utils";
import { act } from "react";
import "@testing-library/jest-dom";


describe("TodoList Component", () => {
  test("renders correctly with initial todos", () => {
     act(() => {
       render(<TodoList />);
     });
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/learn testing/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
     act(() => {
       render(<TodoList />);
     });
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add todo/i);

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
     act(() => {
       render(<TodoList />);
     });
    const todoItem = screen.getByText(/learn react/i);

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
     act(() => {
       render(<TodoList />);
     });
    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[0]); // Clicks the first Delete button

    fireEvent.click(deleteButton);
    expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
  });
});
