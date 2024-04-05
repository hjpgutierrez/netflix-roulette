import { fn } from "@storybook/test";
import Dialog from "./Dialog";

export default {
  title: "SharedComponents/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: false,
    title: "Hello!",
    children: "test body",
    onClose: fn(),
  },
};

export const InitialRender = {
  args: {
    isOpen: false,
    title: "Hello!",
    children: "test body",
    onClose: fn(),
  },
};

export const OpenModal = {
  args: {
    isOpen: true,
    title: "OpenModal!",
    children: "test body",
    onClose: fn(),
  },
};
