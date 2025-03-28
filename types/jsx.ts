declare global {
  namespace JSX {
    interface HtmlTag {
      ['up-main']?: boolean
      ['up-hungry']?: boolean
    }

    interface HtmlAnchorTag {
      ['up-follow']?: boolean
      ['up-target']?: string
      ['up-layer']?: 'new' | 'swap' | 'shatter'
      ['up-accept-location']?: string
      ['up-mode']?: 'root' | 'modal' | 'drawer' | 'popup' | 'cover'
      ['up-on-accepted']?: string
    }

    interface HtmlFormTag {
      ['up-submit']?: boolean
      ['up-target']?: string
    }
  }
}
