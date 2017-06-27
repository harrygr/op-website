import * as React from 'react'

interface Props {
  id: string
}

export function VimeoVideo({ id }: Props) {
  return (
    <div className="videowrapper">
      <iframe
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  )
}

export function YoutubeVideo({ id }: Props) {
  return (
    <div className="videowrapper">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&controls=0&showinfo=0?ecver=2`}
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  )
}
