import { Component, h } from 'preact' /** @jsx h */

import { isBrowser, tokens } from '../config'

export default class Adsense extends Component {
  componentDidMount () {
    console.log(`Adsense componentDidMount, isBrowser: ${isBrowser}`)
    if (isBrowser) {
      console.log('ad push')
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    }
  }

  shouldComponentUpdate () {
    console.log(`Adsense shouldComponentUpdate, isBrowser: ${isBrowser}`)
    return false
  }

  render (props, _, { store }) {
    console.log(`Adsense render, isBrowser: ${isBrowser}`)
    return (
      <div {...props}>
        <ins
          key={Math.random()}
          class='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={tokens.adsense}
          data-ad-slot='2581488270'
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      </div>
    )
  }

  // componentDidMount () {
  //   const { store } = this.context
  //   if (store.app.isServerRendered) return
  //   if (isBrowser) {
  //     console.log('ad push')
  //     ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  //   }
  // }

  // shouldComponentUpdate () {
  //   console.log('Adsense shouldComponentUpdate')
  //   const { store } = this.context
  //   if (store.app.isServerRendered) return false
  //   return true
  // }

  // shouldComponentUpdate () {
  //   console.log(`Adsense shouldComponentUpdate, isBrowser: ${isBrowser}`)
  //   return false
  // }

  // render (props, _, { store }) {
  //   console.log(`Adsense render, isBrowser: ${isBrowser}`)

  //   if (isBrowser) {
  //     return <div dangerouslySetInnerHTML={{ __html: '' }} />
  //   }

  //   return (
  //     <div {...props}>
  //       <ins
  //         class='adsbygoogle'
  //         style={{ display: 'block' }}
  //         data-ad-client={tokens.adsense}
  //         data-ad-slot='2581488270'
  //         data-ad-format='auto'
  //         data-full-width-responsive='true'
  //       />
  //       <script
  //         dangerouslySetInnerHTML={{
  //           __html: 'console.log("ad push"); (adsbygoogle = window.adsbygoogle || []).push({})'
  //         }}
  //       />
  //     </div>
  //   )
  // }
}