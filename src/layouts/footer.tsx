import * as React from 'react';

import {Instagram} from '../services/instagram'

const square = require('./square.png')

interface Props {
  grams: Instagram.Media[]
}

export default function ({grams}: Props) {
  return (
    <footer className="bg-black mt2">
      {grams.length ? (

      <div className="cf">
        <div className="flex">
          {grams.map((gram, index) => (
            <a
              key={index}
              className="db cover bg-center dim"
              href={gram.link}
              target="_blank"
              style={{backgroundImage: `url(${gram.images.standard_resolution.url})`}}
          >
            <img src={square} alt="" className="w-100 h-auth overflow-hidden" />
          </a>
          ))}
        </div>
      </div>
      ) : null}

      <div className="ph4 pv3 flex justify-between items-center white f6 fw3">
        <div>&copy; Copyright {new Date().getFullYear()}</div>
        <div className="ttu tr">Don't just love it, live it</div>
      </div>
    </footer>
  )
}
