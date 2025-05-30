import type { Meta, StoryObj } from '@storybook/vue3-vite';
import List from './List.vue';
import type { ListItem } from './List.vue';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the list items.',
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'divided'],
      description: 'Visual style of the list.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    ordered: {
      control: 'boolean',
      description: 'Whether to render as an ordered list (ol) or unordered list (ul).',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    interactive: {
      control: 'boolean',
      description: 'Whether list items are interactive (clickable).',
      table: { category: 'Behavior', defaultValue: { summary: false } },
    },
    showDividers: {
      control: 'boolean',
      description: 'Whether to show dividers between list items.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    role: {
      control: 'text',
      description: 'ARIA role for the list.',
      table: { category: 'Accessibility', defaultValue: { summary: 'undefined' } },
    },
  },
  args: {
    size: 'medium',
    variant: 'default',
    ordered: false,
    interactive: false,
    showDividers: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A flexible list component for displaying structured data with support for icons, avatars, actions, and various layouts. Perfect for navigation menus, data lists, and content organization.\n\n**Features:**\n\n- Multiple sizes and variants\n- Support for icons, avatars, and badges\n- Interactive and non-interactive modes\n- Trailing actions and content\n- Ordered and unordered lists\n- Full accessibility support\n- Customizable dividers and borders\n\n**Usage:**\n\n```vue\n<List :items="listItems" interactive />\n<List :items="menuItems" variant="bordered" size="large" />\n```',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems: ListItem[] = [
  { id: 1, primary: 'First Item', secondary: 'Description for first item' },
  { id: 2, primary: 'Second Item', secondary: 'Description for second item' },
  { id: 3, primary: 'Third Item', secondary: 'Description for third item' },
];

const iconItems: ListItem[] = [
  { id: 1, icon: 'house', primary: 'Home', secondary: 'Go to homepage' },
  { id: 2, icon: 'user', primary: 'Profile', secondary: 'View your profile' },
  { id: 3, icon: 'settings', primary: 'Settings', secondary: 'Manage preferences' },
  { id: 4, icon: 'circle-help', primary: 'Help', secondary: 'Get support' },
];

const avatarItems: ListItem[] = [
  {
    id: 1,
    avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM2MzY2ZjEiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cjwvc3ZnPgo=',
    primary: 'John Doe',
    secondary: 'Software Engineer',
    trailingText: 'Online'
  },
  {
    id: 2,
    avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNlZjQ0NDQiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cjwvc3ZnPgo=',
    primary: 'Jane Smith',
    secondary: 'Product Manager',
    trailingText: '2h ago'
  },
  {
    id: 3,
    avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxMGI5ODEiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cjwvc3ZnPgo=',
    primary: 'Mike Johnson',
    secondary: 'Designer',
    trailingText: 'Away'
  },
];

const actionItems: ListItem[] = [
  {
    id: 1,
    icon: 'file',
    primary: 'Document.pdf',
    secondary: '2.4 MB • Modified 2 hours ago',
    action: true,
    actionIcon: 'ellipsis',
    actionLabel: 'More options'
  },
  {
    id: 2,
    icon: 'image',
    primary: 'Photo.jpg',
    secondary: '1.8 MB • Modified yesterday',
    action: true,
    actionIcon: 'ellipsis',
    actionLabel: 'More options'
  },
  {
    id: 3,
    icon: 'folder',
    primary: 'Projects',
    secondary: '12 items • Modified last week',
    action: true,
    actionIcon: 'ellipsis',
    actionLabel: 'More options'
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithIcons: Story = {
  args: {
    items: iconItems,
    interactive: true,
  },
};

export const WithAvatars: Story = {
  args: {
    items: avatarItems,
    variant: 'bordered',
    showDividers: true,
  },
};

export const WithActions: Story = {
  args: {
    items: actionItems,
    interactive: true,
    showDividers: true,
  },
};

export const Bordered: Story = {
  args: {
    items: iconItems,
    variant: 'bordered',
    interactive: true,
  },
};

export const Divided: Story = {
  args: {
    items: basicItems,
    variant: 'divided',
    showDividers: true,
  },
};

export const Ordered: Story = {
  args: {
    items: basicItems,
    ordered: true,
    variant: 'bordered',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { List },
    setup() {
      const items = [
        { id: 1, icon: 'star', primary: 'Small Size', secondary: 'Compact list item' },
        { id: 2, icon: 'star', primary: 'Medium Size', secondary: 'Standard list item' },
        { id: 3, icon: 'star', primary: 'Large Size', secondary: 'Spacious list item' },
      ];
      return { items };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Small</h3>
          <List :items="[items[0]]" size="small" variant="bordered" />
        </div>
        <div>
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Medium</h3>
          <List :items="[items[1]]" size="medium" variant="bordered" />
        </div>
        <div>
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600;">Large</h3>
          <List :items="[items[2]]" size="large" variant="bordered" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'List component in different sizes.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    items: [
      { id: 1, icon: 'house', primary: 'Home', secondary: 'Navigate to home page' },
      { id: 2, icon: 'user', primary: 'Profile', secondary: 'View your profile', selected: true },
      { id: 3, icon: 'settings', primary: 'Settings', secondary: 'Manage your settings' },
      { id: 4, icon: 'circle-help', primary: 'Help', secondary: 'Get help and support', disabled: true },
    ],
    interactive: true,
    variant: 'bordered',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive list with hover effects, selection states, and disabled items.',
      },
    },
  },
};

export const NavigationMenu: Story = {
  render: () => ({
    components: { List },
    setup() {
      const menuItems = [
        { id: 1, icon: 'house', primary: 'Dashboard', trailingIcon: 'chevron-right' },
        { id: 2, icon: 'users', primary: 'Team', trailingIcon: 'chevron-right' },
        { id: 3, icon: 'folder', primary: 'Projects', badge: '12', trailingIcon: 'chevron-right' },
        { id: 4, icon: 'calendar', primary: 'Calendar', trailingIcon: 'chevron-right' },
        { id: 5, icon: 'funnel', primary: 'Analytics', trailingIcon: 'chevron-right' },
      ];
      return { menuItems };
    },
    template: `
      <List
        :items="menuItems"
        interactive
        variant="bordered"
        size="large"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Navigation menu pattern with icons, badges, and trailing indicators.',
      },
    },
  },
};

export const ContactList: Story = {
  render: () => ({
    components: { List },
    setup() {
      const contacts = [
        {
          id: 1,
          avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2ZjEiLz4KPHN2ZyB4PSIxMCIgeT0iMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSI5IiByPSI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4KPC9zdmc+Cg==',
          primary: 'Alex Johnson',
          secondary: 'alex@company.com',
          description: 'Last seen 2 hours ago',
          action: true,
          actionIcon: 'phone',
          actionLabel: 'Call Alex'
        },
        {
          id: 2,
          avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNlZjQ0NDQiLz4KPHN2ZyB4PSIxMCIgeT0iMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSI5IiByPSI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4KPC9zdmc+Cg==',
          primary: 'Sarah Wilson',
          secondary: 'sarah@company.com',
          description: 'Online now',
          action: true,
          actionIcon: 'message-circle',
          actionLabel: 'Message Sarah'
        },
        {
          id: 3,
          avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMxMGI5ODEiLz4KPHN2ZyB4PSIxMCIgeT0iMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSI5IiByPSI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4KPC9zdmc+Cg==',
          primary: 'David Brown',
          secondary: 'david@company.com',
          description: 'Away',
          action: true,
          actionIcon: 'mail',
          actionLabel: 'Email David'
        },
      ];
      return { contacts };
    },
    template: `
      <List
        :items="contacts"
        interactive
        size="large"
        showDividers
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Contact list with avatars, detailed information, and action buttons.',
      },
    },
  },
};
