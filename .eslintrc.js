module.exports = {
  root: true,
  parserOptions: {
    'parser': 'babel-eslint',
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  // add your custom rules here
  rules: {
    /**
     * VUE - Best Practices
     */
    // Consistent ordering of components
    'vue/order-in-components': 'warn',
    // Enforces name property casing.
    'vue/name-property-casing': 'error',
    'vue/html-indent': [
      'off',
      2,
      {
        attribute: 1,
        closeBracket: 1,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // camelCase
    // TODO: reevaluate
    'vue/attribute-hyphenation': 'off',
    // don't require default value in component props
    'vue/require-default-prop': 'off',
    // don't worry about attribute order in html templates
    // todo - reevaluate this at a later date
    'vue/attributes-order': 'off',
    /**
     * SPACING
     */
    'no-mixed-spaces-and-tabs': 'warn',
    // make switch case not be on same tab
    indent: ['warn', 2, { SwitchCase: 1 }],
    // trust developers to be adults who don't make lines stupid long without reason,
    // but sometimes it is more readable to have a long line.
    'max-len': 'off',
    /**
     * NORMAL RULES
     */
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // allow console
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // allow undefined vars, but emit a warning for them
    'no-undef': 'warn',
    // allow unused vars, but emit a warning for them
    'no-unused-vars': ['warn', { args: 'none' }],
    // allow function params to be reassigned
    'no-param-reassign': 'off',
    // who even cares about comma dangles?
    'comma-dangle': ['warn', 'always-multiline'],
    // allow exports and default exports to have the same name
    // i.e. export { foo, bar }; export default foo;
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    // let imports appear in any order
    'import/first': 'off',
    // nuxtjs can't resolve imports properly, so yeah...
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // Don't require a default export, named exports is a little safer since it prevents tpyos
    'import/prefer-default-export': 'off',
    // I'll continue with whatever I want!
    'no-continue': 'off',
    // airbnb doesn't like i++ for some reason
    'no-plusplus': 'off',
    // disallows code like x = 1 + 5 * 10;
    // i'll math however i want
    'no-mixed-operators': 'off',
    // allow variables like _privateVar
    'no-underscore-dangle': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: false },
        AssignmentExpression: { array: false, object: false }
      },
      { enforceForRenamedProperties: false }
    ],
    // when using code like ` import {x} from foo; x(bar); `, it thinks we're
    // using x before it is defined
    'no-use-before-define': 'off',
    // it's always 10, calm down.
    radix: 'off',
    // allow arrow functions to have assignments as an implicit return
    // e.g. api.getData().then(result => self.data = result);
    'no-return-assign': 'off',
    // The "smart" option enforces the use of === and !== except for these cases:
    // Comparing two literal values
    // Evaluating the value of typeof
    // Comparing against null
    eqeqeq: ['error', 'smart'],
    // todo - turn this back on
    'no-restricted-syntax': 'off',
    // calm down, windows
    'linebreak-style': 'off'
  }
};
