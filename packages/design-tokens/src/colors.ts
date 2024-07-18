export type ColorKeys =
    | 'background-primary'
    | 'background-secondary'
    | 'background-tertiary'
    | 'background-quaternary'
    | 'background-inverse-primary'
    | 'background-accent'
    | 'background-error'
    | 'text-primary'
    | 'text-secondary'
    | 'text-tertiary'
    | 'text-quaternary'
    | 'text-inverse-primary'
    | 'text-accent'
    | 'text-error'
    | 'icon-primary'
    | 'icon-secondary'
    | 'icon-tertiary'
    | 'icon-quaternary'
    | 'icon-inverse-primary'
    | 'icon-accent'
    | 'icon-error'
    | 'border-primary'
    | 'border-secondary'
    | 'border-tertiary'
    | 'border-quaternary'
    | 'border-inverse-primary'
    | 'border-accent'
    | 'border-error'
    | 'system-success'
    | 'system-error'
    | 'system-informative'
    | 'overlay-primary'
    | 'transparent';

export const themeColors: Record<'light' | 'dark', { [key in ColorKeys]: string }> = {
    light: {
        'background-primary': '#ffffff',
        'background-secondary': '#f2f2f2',
        'background-tertiary': '#e6e6e6',
        'background-quaternary': '#d9d9d9',
        'background-inverse-primary': '#1a1a1a',
        'background-accent': '#ff8800',
        'background-error': '#ffcccc',
        'text-primary': '#1a1a1a',
        'text-secondary': '#333333',
        'text-tertiary': '#4d4d4d',
        'text-quaternary': '#666666',
        'text-inverse-primary': '#ffffff',
        'text-accent': '#ff8800',
        'text-error': '#cc0000',
        'icon-primary': '#1a1a1a',
        'icon-secondary': '#333333',
        'icon-tertiary': '#4d4d4d',
        'icon-quaternary': '#666666',
        'icon-inverse-primary': '#ffffff',
        'icon-accent': '#ff8800',
        'icon-error': '#cc0000',
        'border-primary': '#cccccc',
        'border-secondary': '#b3b3b3',
        'border-tertiary': '#999999',
        'border-quaternary': '#808080',
        'border-inverse-primary': '#1a1a1a',
        'border-accent': '#ff8800',
        'border-error': '#cc0000',
        'system-success': '#28a745',
        'system-error': '#cc0000',
        'system-informative': '#17a2b8',
        'overlay-primary': '#ffffffcc',
        transparent: 'rgba(255,255,255,0)',
    },
    dark: {
        'background-primary': '#1b1b1b',
        'background-secondary': '#262626',
        'background-tertiary': '#303030',
        'background-quaternary': '#3b3b3b',
        'background-inverse-primary': '#f5f5f5',
        'background-accent': '#ffcc00',
        'background-error': '#422222',
        'text-primary': '#e0e0e0',
        'text-secondary': '#c2c2c2',
        'text-tertiary': '#a4a4a4',
        'text-quaternary': '#868686',
        'text-inverse-primary': '#1b1b1b',
        'text-accent': '#ffcc00',
        'text-error': '#ff4d4d',
        'icon-primary': '#e0e0e0',
        'icon-secondary': '#c2c2c2',
        'icon-tertiary': '#a4a4a4',
        'icon-quaternary': '#868686',
        'icon-inverse-primary': '#1b1b1b',
        'icon-accent': '#ffcc00',
        'icon-error': '#ff4d4d',
        'border-primary': '#4d4d4d',
        'border-secondary': '#3b3b3b',
        'border-tertiary': '#262626',
        'border-quaternary': '#1b1b1b',
        'border-inverse-primary': '#f5f5f5',
        'border-accent': '#ffcc00',
        'border-error': '#ff4d4d',
        'system-success': '#33cc33',
        'system-error': '#ff4d4d',
        'system-informative': '#3399ff',
        'overlay-primary': '#1b1b1bcc',
        transparent: 'rgba(0,0,0,0)',
    },
} as const;
