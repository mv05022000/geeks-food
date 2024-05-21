import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {hii} from './hii';

const meta: Meta<typeof hii> = {
  component: hii,
};

export default meta;

type Story = StoryObj<typeof hii>;

export const Basic: Story = {args: {}};
