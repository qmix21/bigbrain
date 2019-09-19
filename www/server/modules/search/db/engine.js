/* global WIKI */

module.exports = {
  activate() {
    // not used
  },
  deactivate() {
    // not used
  },
  /**
   * INIT
   */
  init() {
    // not used
  },
  /**
   * QUERY
   *
   * @param {String} q Query
   * @param {Object} opts Additional options
   */
  async query(q, opts) {
    const results = await WIKI.models.pages.query()
      .column('id', 'title', 'description', 'path', 'localeCode as locale')
      .where(builder => {
        builder.where('isPublished', true)
        if (opts.locale) {
          builder.andWhere('localeCode', opts.locale)
        }
        if (opts.path) {
          builder.andWhere('path', 'like', `${opts.path}%`)
        }
        // TODO: Add user permissions filtering
        builder.andWhere(builderSub => {
          switch (WIKI.config.db.type) {
            case 'postgres':
              builderSub.where('title', 'ILIKE', `%${q}%`)
              builderSub.orWhere('description', 'ILIKE', `%${q}%`)
              break
            case 'mysql':
            case 'mariadb':
              builderSub.whereRaw(`title LIKE '%?%' COLLATE utf8_general_ci`, [q])
              builderSub.orWhereRaw(`description LIKE '%?%' COLLATE utf8_general_ci`, [q])
              break

            // TODO: MSSQL handling
            default:
              builderSub.where('title', 'LIKE', `%${q}%`)
              builderSub.orWhere('description', 'LIKE', `%${q}%`)
              break
          }
        })
      })
      .limit(WIKI.config.search.maxHits)
    return {
      results,
      suggestions: [],
      totalHits: results.length
    }
  },
  /**
   * CREATE
   *
   * @param {Object} page Page to create
   */
  async created(page) {
    // not used
  },
  /**
   * UPDATE
   *
   * @param {Object} page Page to update
   */
  async updated(page) {
    // not used
  },
  /**
   * DELETE
   *
   * @param {Object} page Page to delete
   */
  async deleted(page) {
    // not used
  },
  /**
   * RENAME
   *
   * @param {Object} page Page to rename
   */
  async renamed(page) {
    // not used
  },
  /**
   * REBUILD INDEX
   */
  async rebuild() {
    // not used
  }
}
