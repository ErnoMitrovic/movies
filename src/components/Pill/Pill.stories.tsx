import { Meta, StoryFn } from "@storybook/react";

import { IPillProps } from "./types";
import Pill from "./Pill";
import React from "react";

const meta = {
    title: 'Components/Pill',
    component: Pill,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: false,
                description: `This component is used to display a pill.`,
            }
        }
    },
    argTypes: {
        title: {
            control: 'text',
        },
        color: {
            control: 'select',
            options: ['red', 'green', 'blue', 'yellow']
        }
    },
    tags: ['autodocs']
} as Meta;

export default meta;

const Template: StoryFn<IPillProps> = (args) => <Pill {...args} />;

/**
 * Default state of the Pill component.
 */
export const Default = Template.bind({});
Default.args = {
    title: 'Pill',
    color: 'red'
};

/**
 * Pill component with a different title.
 */
export const DifferentTitle = Template.bind({});
DifferentTitle.args = {
    ...Default.args,
    title: 'Different Pill'
};

/**
 * Pill component with a different color.
 */
export const DifferentColor = Template.bind({});
DifferentColor.args = {
    ...Default.args,
    color: 'yellow'
};