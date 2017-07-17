import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_FAVORITE} from '../constants/TweetFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_FAVORITE]: 'Favorite'
}

export default class Footer extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onShow: PropTypes.func.isRequired
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  render() {
    return (
      <footer className="footer">
        <ul className="filters">
          {[ SHOW_ALL, SHOW_FAVORITE ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    )
  }
}
