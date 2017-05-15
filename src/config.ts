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
      accessToken: '1793053169.1677ed0.355f2352a70541f4aac229b746b637ad',
    },
  },
  content: {
    siteUrl: 'oliverproudlock.wordpress.com',
  },
}

export default config
