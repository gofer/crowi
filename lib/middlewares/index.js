module.exports = (crowi, app) => ({
  AccessTokenParser: require('./accessTokenParser')(crowi, app),
  AdminRequired: require('./adminRequired')(crowi, app),
  ApplicationInstalled: require('./applicationInstalled')(crowi, app),
  ApplicationNotInstalled: require('./applicationNotInstalled')(crowi, app),
  AwsEnabled: require('./awsEnabled')(crowi, app),
  BasicAuth: require('./basicAuth')(crowi, app),
  ClientContext: require('./clientContext')(crowi, app),
  CsrfVerify: require('./csrfVerify')(crowi, app),
  EncodeSpace: require('./encodeSpace')(crowi, app),
  FileAccessRightOrLoginRequired: require('./fileAccessRightOrLoginRequired')(crowi, app),
  I18next: require('./i18next')(crowi, app),
  LoginChecker: require('./loginChecker')(crowi, app),
  LoginRequired: require('./loginRequired')(crowi, app),
  SwigFilters: require('./swigFilters')(crowi, app),
  SwigFunctions: require('./swigFunctions')(crowi, app),
})