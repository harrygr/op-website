import * as React from 'react'
const Flickity = require('flickity')
import 'flickity-imagesloaded'

interface Props {
  images: string[]
  className: string
  options?: Partial<FlickityOptions>
}

export default class Carousel extends React.Component<Props, {}> {
  private carousel: HTMLElement
  private flickity: Flickity

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    const options: FlickityOptions = {
      cellSelector: '.carousel-tile',
      contain: true,
      initialIndex: 0,
      accessibility: true,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: false,
      ...this.props.options,
    }
    this.flickity = new Flickity(this.carousel, options)
  }

  render() {
    return (
      <div ref={carousel => this.carousel = carousel} className={`carousel ${this.props.className}`}>
        {this.props.images.map((image, index) => (
          <div className="w-100 carousel-tile" key={index}><img src={image} className="w-100 db"/></div>
        ))}
      </div>
    )
  }
}
