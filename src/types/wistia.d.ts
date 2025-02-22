
declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'media-id': string;
      'wistia-popover'?: string;
      aspect?: string;
    }, HTMLElement>;
  }
}
