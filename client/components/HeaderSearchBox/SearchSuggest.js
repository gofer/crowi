import React from 'react'
import PropTypes from 'prop-types'

import queryString from 'query-string'
import Icon from 'components/Common/Icon'
import ListView from 'components/PageList/ListView'

export default class SearchSuggest extends React.Component {
  constructor(props) {
    super(props)

    this.buildSearchUrl = this.buildSearchUrl.bind(this)
    this.renderList = this.renderList.bind(this)
  }

  buildSearchUrl(type) {
    const q = this.props.searchingKeyword
    const query = queryString.stringify({ q, type })
    return `/_search?${query}`
  }

  renderList(title, icon, type, pages) {
    return (
      pages.length > 0 && (
        <div className="grouped-page-list">
          <h5>
            <Icon name={icon} regular />
            <span className="title">{title}</span>
            <a className="more text-muted" href={this.buildSearchUrl(type)}>
              もっと見る<Icon name="caret-right" />
            </a>
          </h5>
          <ListView pages={pages} />
        </div>
      )
    )
  }

  render() {
    if (!this.props.focused) {
      return <div />
    }

    if (this.props.searching) {
      return (
        <div className="search-suggest" id="search-suggest">
          <i className="searcing fa fa-circle-o-notch fa-spin fa-fw" /> Searching ...
        </div>
      )
    }

    if (this.props.searchError !== null) {
      return (
        <div className="search-suggest" id="search-suggest">
          <i className="searcing fa fa-exclamation-triangle" /> Error on searching.
        </div>
      )
    }

    const numberOfResults = Object.values(this.props.searchedPages)
      .map((r = []) => r.length)
      .reduce((p, c) => p + c, 0)
    if (numberOfResults < 1) {
      if (this.props.searchingKeyword !== '') {
        return (
          <div className="search-suggest" id="search-suggest">
            No results for &quot;{this.props.searchingKeyword}&quot;.
          </div>
        )
      }
      return <div />
    }

    const { portalPages, publicPages, userPages } = this.props.searchedPages

    return (
      <div className="search-suggest" id="search-suggest">
        {this.renderList('Portal', 'circle', 'portal', portalPages)}
        {this.renderList('Public', 'file', 'public', publicPages)}
        {this.renderList('User', 'user', 'user', userPages)}
      </div>
    )
  }
}

SearchSuggest.propTypes = {
  searchedPages: PropTypes.object.isRequired,
  searchingKeyword: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  searchError: PropTypes.object,
  focused: PropTypes.bool,
}

SearchSuggest.defaultProps = {
  searchedPages: {},
  searchingKeyword: '',
  searchError: null,
  searching: false,
  focused: false,
}
