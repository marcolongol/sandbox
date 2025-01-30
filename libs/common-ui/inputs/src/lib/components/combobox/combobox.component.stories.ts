import type { Meta, StoryObj } from '@storybook/angular';
import { ComboboxComponent } from './combobox.component';

const meta: Meta<ComboboxComponent> = {
  component: ComboboxComponent,
  title: 'ComboboxComponent',
};
export default meta;
type Story = StoryObj<ComboboxComponent>;

export const Primary: Story = {
  args: {},
};
