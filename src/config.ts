interface Config {
  instagram: Record<string, {userId: string, accessToken: string}>
  content: {siteUrl: string}
}

const config: Config = {
  instagram: {
    op: {
      userId: '21686064',
      accessToken: '21686064.1677ed0.7157aa5ab77e47809b1b2d3753005e71',
    },
    ps: {
      userId: '1793053169',
      accessToken: '1793053169.1677ed0.53d593f7deab47c8980aec2a4da080ab',
    },
  },
  content: {
    siteUrl: 'oliverproudlock.wordpress.com',
  },
}

export default config
