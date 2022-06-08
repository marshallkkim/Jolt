import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "React";
import App from "../client/App";
import { unmountComponentAtNode } from "react-dom";

/**
 * @jest-environment jsdom
 */

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Baseline", () => {
  expect(true).not.toBe(false);
});

test('Renders something with "username"', () => {
  render(<App />, container);
  const username = screen.queryByText("username");
  expect(username).toBeTruthy();
});

test('Renders something with "password"', () => {
  render(<App />, container);
  const password = screen.queryByText("Password");
  expect(password).toBeTruthy();
});

test('Does NOT render something with "blah"', () => {
  render(<App />, container);
  const blah = screen.queryByText("blah");
  expect(blah).not.toBeTruthy();
});

test('Renders something with test-id "PersonIcon"', () => {
  render(<App />, container);
  const PersonIcon = screen.queryByTestId("PersonIcon");
  expect(PersonIcon).toBeTruthy();
});

test('Renders something with test-id "CheckBox"', () => {
  render(<App />, container);
  const CheckBox = screen.queryByTestId("CheckBox");
  expect(CheckBox).toBeTruthy();
});

test('Does NOT render something with test-id "noId"', () => {
  render(<App />, container);
  const noId = screen.queryByTestId("noId");
  expect(noId).not.toBeTruthy();
});

test("Renders at least one button", () => {
  render(<App />, container);
  const button = screen.queryByRole("button");
  expect(button).toBeTruthy();
});

test("Does NOT render at least one table", () => {
  render(<App />, container);
  const table = screen.queryByRole("table");
  expect(table).not.toBeTruthy();
});

test('Renders something called the "sign in" button', () => {
  render(<App />, container);
  const button = screen.getByTestId("signInButton");
  expect(button).toBeTruthy();
});

test('The "Sign In" button is actually a button', () => {
  render(<App />, container);
  const signInButton = screen.getByTestId("signInButton");
  expect(signInButton).toBeInstanceOf(HTMLButtonElement);
});

test('Does NOT find the "Sign Up" button', () => {
  render(<App />, container);
  const signUpButtonArray = screen.queryAllByTestId("signUpButton");
  expect(signUpButtonArray).toEqual([]);
});

test("Should identify if the spy function was called or not", () => {
  const spyFunction = jest.fn();
  spyFunction();
  expect(spyFunction).toHaveBeenCalled();
});
