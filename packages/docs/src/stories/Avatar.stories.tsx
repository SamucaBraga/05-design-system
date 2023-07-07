import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@study-ignite-ui/react'

export default {
  title: 'Data displat/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/SamucaBraga.png',
    alt: 'Samuel Braga',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
