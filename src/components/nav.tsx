import * as React from 'react'

interface Link {
  url: string
  text: string
  newWindow?: boolean
}

interface Props {
  links: Link[]
  invertOnScroll: boolean
}

interface State {
  inverted: boolean
  open: boolean
}

export default class Carousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      inverted: this.props.invertOnScroll && window.pageYOffset < 50,
      open: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ inverted: this.props.invertOnScroll && window.pageYOffset < 50 })
    })
  }

  toggleMenuOpen = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const inverted = this.props.invertOnScroll && window.pageYOffset < 50
    const socialIcons = [
      { icon: 'twitter', link: 'http://www.twitter.com/oliverproudlock' },
      { icon: 'tumblr', link: 'http://soserge.com/' },
      { icon: 'youtube', link: 'http://www.youtube.com/oliverproudlock' },
      { icon: 'instagram', link: 'http://instagram.com/proudlock' }
    ]
    return (
      <nav
        id="navbar"
        className={`fixed-ns z-5 w-100 bb top-0 bg-animate z-999
      flex items-center justify-between relative
      ${inverted ? 'b--white white' : 'bg-white b--black black'}`}
      >
        <button
          className={`
            br1 black dim pv2 ph3 ma3 ba dn-ns b--black outline-0 button-reset
            ${this.state.open ? 'bg-black-20' : 'bg-white'}
          `}
          onClick={this.toggleMenuOpen}
        >
          <i className="fa fa-bars" />
        </button>

        <ul className={`list pl0 ma0 flex-ns f6 ttu no-underline nav-links db-ns overflow-x-auto w-auto-ns w-100
        ${this.state.open ? 'db shadow-4' : 'dn'}
        `}>
          {this.props.links.map((link, index) => (
            <li className="db dib-ns" key={index}>
              <a
                onClick={() => this.setState({ open: false })}
                href={link.url}
                className="ph3-m ph4 pv3 no-underline dim dib outline-0 w-auto-ns w-100 link color-inherit"
              >{link.text}</a>
            </li>
          ))}
        </ul>

        <ul className="ml-auto list pr2 dn-m db nav-social-icons flex">
          {socialIcons.map(icon => (
            <li>
              <a
                href={icon.link}
                className="link br-pill ba dib f6 inline-flex items-center justify-center mh1 dim color-inherit"
                style={{ height: '27px', width: '27px' }}
                target="_blank"
              >
                <i className={`fa fa-fw fa-${icon.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
