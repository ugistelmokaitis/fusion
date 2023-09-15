module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'import', 'jest', 'promise', 'n'],
    ignorePatterns: ['**/*.js'],
    extends: ['plugin:react/jsx-runtime', 'prettier', 'plugin:import/typescript'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // !React-ESLint Rules for React applications
        'react/no-typos': 'error', // Disallow common typos
        'react/forbid-elements': 'error', // Forbid certain elements
        'react/forbid-foreign-prop-types': 'error', // Forbid certain propTypes
        'react/forbid-prop-types': 'error', // Forbid certain propTypes
        'react/no-string-refs': 'error', // Prevent using string references
        'react/no-this-in-sfc': 'error', // Disallow this from being used in stateless functional components
        'react/no-unescaped-entities': 'error', // Disallow unescaped HTML entities from appearing in markup
        'react/no-unsafe': 'error', // Disallow usage of unsafe lifecycle methods
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ], // Standardize the way function component get defined
        'react/boolean-prop-naming': 'error', // Allows you to enforce a consistent naming pattern for props which expect a boolean value
        'react/button-has-type': 'error', // Prevent usage of button elements without an explicit type attribute
        'react/default-props-match-prop-types': 'error', // Enforce all defaultProps are defined and not "required" in propTypes
        'react/destructuring-assignment': 'error', // Rule enforces consistent usage of destructuring assignment in component
        'react/display-name': 'error', // Prevent missing displayName in a React component definition
        'react/forbid-component-props': 'off', // Forbid certain props on Components
        'react/forbid-dom-props': 'error', // Forbid certain props on DOM Nodes
        'react/no-access-state-in-setstate': 'error', // This rule should prevent usage of this.state inside setState calls
        'react/no-adjacent-inline-elements': 'error', // Prevent adjacent inline elements not separated by whitespace
        'react/no-array-index-key': 'off', // Prevent using Array index in key props
        'react/no-arrow-function-lifecycle': 'off', // Prevent passing of children as props also warn against using children and other props together
        'react/no-children-prop': 'error', // Disallow passing of children as props
        'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
        'react/no-danger-with-children': 'error', // Disallow when a DOM element is using both children and dangerouslySetInnerHTML
        'react/no-deprecated': 'error', // Prevent usage of deprecated methods
        'react/no-did-mount-set-state': 'error', // Prevent usage of setState in componentDidMount
        'react/no-did-update-set-state': 'error', // Prevent usage of setState in componentDidUpdate
        'react/no-direct-mutation-state': 'error', // Prevent direct mutation of this.state
        'react/no-find-dom-node': 'error', // Prevent usage of findDOMNode
        'react/no-invalid-html-attribute': 'off', // Disallow usage of invalid attributes
        'react/no-is-mounted': 'error', // Prevent usage of isMounted
        'react/no-multi-comp': 'off', // Disallow multiple component definition per file
        'react/no-namespace': 'error', // Enforce that namespaces are not used in React elements
        'react/no-redundant-should-component-update': 'error', // Disallow usage of shouldComponentUpdate when extending React.PureComponent (react/prefer-pure-component)
        'react/no-render-return-value': 'error', // This rule will warn you if you try to use the ReactDOM.render() return value
        'react/no-set-state': 'error', // Prevent usage of setState
        'react/no-unstable-nested-components': 'error', // Disallow creating unstable components inside components
        'react/no-unused-class-component-methods': 'off', // Disallow declaring unused methods of component class
        'react/no-unused-prop-types': 'error', // Disallow definitions of unused propTypes
        'react/no-unused-state': 'error', // Disallow definitions of unused state
        'react/no-will-update-set-state': 'error', // Disallow usage of setState in componentWillUpdate
        'react/prefer-es6-class': 'error', // Enforce ES5 or ES6 class for React Components
        'react/prefer-exact-props': 'error', // Prefer exact propType definitions
        'react/prefer-read-only-props': 'error', // Enforce that props are read-only
        'react/prefer-stateless-function': 'error', // Enforce stateless React Components to be written as a pure function
        'react/prop-types': 'error', // Disallow missing props validation in a React component definition
        'react/react-in-jsx-scope': 'off', // Disallow missing React when using JSX
        'react/require-default-props': 'off', // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-optimization': 'error', // Enforce React components to have a shouldComponentUpdate method
        'react/require-render-return': 'error', // Enforce ES5 or ES6 class for returning value in render function
        'react/self-closing-comp': 'error', // Disallow extra closing tags for components without children
        'react/sort-comp': 'error', // Enforce component methods order
        'react/sort-prop-types': 'error', // Enforce propTypes declarations alphabetical sorting
        'react/state-in-constructor': 'error', // Enforce class component state initialization style
        'react/static-property-placement': 'error', // Enforces where React component static properties should be positioned
        'react/style-prop-object': 'error', // Enforce style prop value being an object
        'react/void-dom-elements-no-children': 'error', // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        // !React-ESLint JSX-Specific Rules
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx', '.jsx'],
            },
        ], // Disallow file extensions that may contain JSX
        'react/jsx-boolean-value': 'error', // Enforce boolean attributes notation in JSX
        'react/jsx-curly-brace-presence': 'error', // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
        'react/jsx-no-comment-textnodes': 'error', // Prevent comments from being inserted as text nodes
        'react/jsx-no-duplicate-props': 'error', // Prevent duplicate props in JSX
        'react/jsx-newline': 'off', // Require or prevent a new line after jsx elements and expressions
        'react/jsx-no-constructed-context-values': 'error', // Disallows JSX context provider values from taking values that will cause needless rerenders
        'react/jsx-no-literals': 'off', // Disallow usage of string literals in JSX
        'react/jsx-fragments': 'error', // Enforce shorthand or standard form for React fragments
        'react/jsx-handler-names': 'error', // Enforce event handler naming conventions in JSX
        'react/jsx-key': 'error', // Disallow missing key props in iterators/collection literals
        'react/jsx-max-depth': 'off', // Validate JSX maximum depth
        'react/jsx-max-props-per-line': 'off', // Limit maximum of props on a single line in JSX
        'react/jsx-no-bind': 'off', // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-one-expression-per-line': 'off', // Limit to one expression per line in JSX
        'react/jsx-pascal-case': 'error', // Enforce PascalCase for user-defined JSX components
        'react/jsx-props-no-spreading': 'off', // Disallow JSX prop spreading
        'react/jsx-uses-vars': 'error', // Disallow variables used in JSX to be incorrectly marked as unused
        'react/jsx-no-script-url': 'error', // Disallow usage of javascript: URL
        'react/jsx-no-target-blank': 'error', // Disallow target="_blank" attribute without rel="noreferrer"
        'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
        'react/jsx-no-useless-fragment': 'error', // Disallow unnecessary fragments
        'react/jsx-wrap-multilines': 'error', // Prevent missing parentheses around multilines JSX
        'react/sort-default-props': 'error', // Enforce defaultProps declarations alphabetical sorting
        'react/jsx-sort-props': 'off', // Enforce props alphabetical sorting
        'react/jsx-uses-react': 'error', // Disallow React to be incorrectly marked as unused
        // !ESLint-Promise rules
        'promise/param-names': 'error', // Enforce consistent param names when creating new promises.
        'promise/catch-or-return': ['error', { allowFinally: true }], // Avoid wrapping values in Promise.resolve or Promise.reject when not needed.
        'promise/no-native': 'off', // Disallow using promises instead of callbacks in the Node.js API.
        'promise/no-nesting': 'error', // Avoid nested .then() or .catch() statements
        'promise/no-promise-in-callback': 'error', // Avoid using promises inside of callbacks
        'promise/no-callback-in-promise': 'error', // Avoid calling cb() inside of a then() (use nodeify instead)
        'promise/avoid-new': 'off', // Avoid creating new promises outside of utility libs (use pify instead)
        'promise/no-new-statics': 'error', // Avoid calling new on a Promise static method
        'promise/no-return-in-finally': 'error', // Disallow return statements in finally()
        'promise/valid-params': 'error', // Ensure the proper number of arguments are passed to Promise functions
        'promise/prefer-await-to-then': 'error', // Prefer await to then() for reading Promise values'
        'promise/prefer-await-to-callbacks': 'error', // Prefer async/await to the callback pattern
        'promise/always-return': 'error', // Require return statements after callbacks
        'promise/no-return-wrap': 'error', // Disallow wrapping of non-promises inside of promises
        // !React-Hooks-ESLint for React Hooks
        'react-hooks/exhaustive-deps': [
            'error',
            {
                additionalHooks: '(useAsync) | (useCustomHook)', // AdditionalHooks: 'useAsync' | 'useCustomHook' | 'useAsync|useCustomHook'
            },
        ],
        'react-hooks/rules-of-hooks': 'error', // Enforce Rules of Hooks https://legacy.reactjs.org/docs/hooks-rules.html
        // !EsLint Rules
        'no-async-promise-executor': 'error', // Disallow using an async function as a Promise executor
        'array-callback-return': 'off', // Enforce return statements in callbacks of array methods
        'constructor-super': 'error', // Require super() calls in constructors
        'for-direction': 'error', // Enforce “for” loop update clause moving the counter in the right direction
        'getter-return': 'error', // Enforce return statements in getters
        'no-await-in-loop': 'error', // Disallow await inside of loops
        'no-class-assign': 'error', // Disallow reassigning class members
        'no-compare-neg-zero': 'error', // Disallow comparing against -0
        'no-cond-assign': 'error', // Disallow assignment operators in conditional expressions
        'no-const-assign': 'error', // Disallow reassigning const variables
        'no-constant-condition': 'error', // Disallow constant expressions in conditions
        'no-constructor-return': 'error', // Disallow returning value from constructor
        'no-control-regex': 'error', // Disallow control characters in regular expressions
        'no-debugger': 'error', // Disallow the use of debugger
        'no-dupe-args': 'error', // Disallow duplicate arguments in function definitions
        'no-dupe-else-if': 'error', // Disallow duplicate conditions in if-else-if chains
        'no-dupe-keys': 'error', // Disallow duplicate keys in object literals
        'no-duplicate-case': 'error', // Disallow duplicate case labels
        'no-empty-character-class': 'error', // Disallow empty character classes in regular expressions
        'no-empty-pattern': 'error', // Disallow empty destructuring patterns
        'no-ex-assign': 'error', // Disallow reassigning exceptions in catch clauses
        'no-fallthrough': 'error', // Disallow fallthrough of case statements
        'no-func-assign': 'error', // Disallow reassigning function declarations
        'no-import-assign': 'error', // Disallow assigning to imported bindings
        'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
        'no-inner-declarations': 'error', // Disallow variable or function declarations in nested blocks
        'no-irregular-whitespace': 'error', // Disallow irregular whitespace
        'no-new-symbol': 'error', // Disallow new operators with the Symbol object
        'no-sparse-arrays': 'error', // Disallow sparse arrays
        'no-obj-calls': 'error', // Disallow calling global object properties as functions
        'no-invalid-regexp': 'error', // Disallow invalid regular expression strings in RegExp constructors
        'no-prototype-builtins': 'error', // Disallow calling some Object.prototype methods directly on objects
        'no-setter-return': 'error', // Disallow returning values from setters
        'no-promise-executor-return': 'error', // Disallow calling global object properties as functions
        'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings
        'no-this-before-super': 'error', // Disallow this/super before@typescript-eslint/no-parameter-properties calling super() in constructors
        'no-unreachable': 'error', // Disallow unreachable code after return, throw, continue, and break statements
        'no-undef': 'error', // Disallow initializing variables to undefined
        'no-unmodified-loop-condition': 'error', // Disallow unmodified loop conditions
        'no-unreachable-loop': 'error', // Disallow loops with a body that allows only one iteration
        'no-unsafe-negation': 'error', // Disallow negating the left operand of relational operators
        'valid-typeof': 'error', // Enforce comparing typeof expressions against valid strings
        'no-unsafe-finally': 'error', // Disallow control flow statements in finally blocks
        'no-unsafe-optional-chaining': 'error', // Disallow use of optional chaining in contexts where the undefined value is not allowed
        'no-unused-private-class-members': 'off', // Disallow unused private class members
        'use-isnan': 'error', // Require calls to isNaN() when checking for NaN
        'require-atomic-updates': 'error', // Disallow assignments that can lead to race conditions due to usage of await or yield
        'no-useless-backreference': 'error', // Disallow useless back-references in regular expressions
        'no-self-assign': 'error', // Disallow assignments where both sides are exactly the same
        'no-self-compare': 'error', // Disallow comparisons where both sides are exactly the same
        // !ESLint Best Practices
        'accessor-pairs': 'error', // Require grouped accessor pairs in object literals and classes
        'arrow-body-style': 'error', // Require braces around arrow function bodies
        'capitalized-comments': 'off', // Enforce or disallow capitalization of the first letter of a comment
        'class-methods-use-this': 'error', // Enforce that class methods utilize this
        'func-name-matching': 'error', // Require function names to match the name of the variable or property to which they are assigned
        complexity: 'off', // Enforce a maximum cyclomatic complexity allowed in a program
        'max-nested-callbacks': 'error', // Enforce a maximum depth that callbacks can be nested
        'consistent-this': 'error', // Enforce consistent naming when capturing the current execution context
        'func-names': 'error', // Require function names to match the name of the variable or property to which they are assigned
        'id-length': 'off', // Enforce minimum and maximum identifier lengths
        'func-style': 'error', // Enforce the consistent use of either function declarations or expressions
        curly: 'error', // Enforce consistent brace style for all control statements
        eqeqeq: 'error', // Require the use of === and !==
        'max-lines-per-function': 'off', // Enforce a maximum number of lines of code in a function
        'new-cap': 'off', // Require constructor names to begin with a capital letter
        'grouped-accessor-pairs': 'error', // Require grouped accessor pairs in object literals and classes
        'consistent-return': 'error', // Require return statements to either always or never specify values
        'max-lines': 'off', // Enforce a maximum number of lines per file
        'max-params': 'off', // Enforce a maximum number of parameters in function definitions
        'max-statements': 'off', // Enforce a maximum number of statements allowed in function blocks
        'multiline-comment-style': 'error', // Enforce a particular style for multiline comments
        'guard-for-in': 'error', // Require for-in loops to include an if statement
        'no-implicit-globals': 'error', // Disallow var and named functions in global scope
        'id-denylist': 'error', // Disallow specified identifiers in assignments and function definitions
        'no-else-return': 'error', // Disallow else blocks after return statements in if statements
        'id-match': 'error', // Require identifiers to match a specified regular expression
        'max-depth': 'error', // Enforce a maximum depth that blocks can be nested
        'max-classes-per-file': 'error', // Enforce a maximum number of classes per file
        'no-empty': 'error', // Disallow empty block statements
        'no-console': 'error', // Disallow the use of console
        'no-case-declarations': 'error', //  Disallow lexical declarations in case clauses
        'no-alert': 'error', // Disallow the use of alert, confirm, and prompt
        'no-delete-var': 'error', // Disallow deleting variables
        'default-case-last': 'error', // Enforce default clauses in switch statements to be last
        'no-div-regex': 'error', // Disallow division operators explicitly at the beginning of regular expressions
        'no-continue': 'error', // Disallow continue statements
        'no-extra-bind': 'error', // Disallow unnecessary calls to .bind()
        'block-scoped-var': 'error', // Enforce the use of variables within the scope they are defined
        'default-case': 'error', // Require default cases in switch statements
        'no-eval': 'error', //  Disallow the use of eval()
        'no-caller': 'error', // Disallow the use of arguments.caller or arguments.callee
        'no-bitwise': 'error', // Disallow bitwise operators
        'no-extra-boolean-cast': 'error', // Disallow unnecessary boolean casts
        'no-extra-label': 'error', // Disallow unnecessary labels
        'no-global-assign': 'error', // Disallow assignments to native objects or read-only global variables
        'no-implicit-coercion': 'error', // Disallow shorthand type conversions
        'no-inline-comments': 'error', // Disallow inline comments after code
        'no-restricted-globals': 'error', // Disallow specified global variables
        'no-label-var': 'error', // Disallow labels that share a name with a variable
        'no-labels': 'error', // Disallow labeled statements
        'no-plusplus': 'error', // Disallow the unary operators ++ and --
        'require-unicode-regexp': 'error', // Enforce the use of u flag on RegExp
        'no-regex-spaces': 'error', // Disallow multiple spaces in regular expressions
        'no-lonely-if': 'error', // Disallow if statements as the only statement in else blocks
        'no-new-object': 'error', // Disallow Object constructors
        'no-multi-str': 'error', // Disallow multiline strings
        'no-negated-condition': 'error', // Disallow negating the left operand of relational operators
        'no-new': 'error', // Disallow new operators outside of assignments or comparisons
        'no-new-func': 'error', // Disallow new operators with the Function object
        'no-nested-ternary': 'error', // Disallow nested ternary expressions
        'no-new-wrappers': 'error', // Disallow new operators with the String, Number, and Boolean objects
        'no-shadow-restricted-names': 'error', // Disallow shadowing of names such as arguments
        'no-nonoctal-decimal-escape': 'error', // Disallow use of Object.prototypes builtins directly
        'no-octal': 'error', // Disallow octal literals
        'no-octal-escape': 'error', // Disallow octal escape sequences in string literals
        'no-param-reassign': 'error', // Disallow reassigning function parameters
        'no-unneeded-ternary': 'error', // Disallow ternary operators when simpler alternatives exist
        'no-proto': 'error', // Disallow the use of the __proto__ property
        'no-ternary': 'off', // Disallow ternary operators
        'no-var': 'error', // Require let or const instead of var
        'no-undefined': 'off', // Disallow the use of undefined as an identifier
        'no-void': 'error', // Disallow void operators
        'prefer-arrow-callback': 'error', // Require using arrow functions for callbacks
        'no-multi-assign': 'error', // Disallow use of chained assignment expressions
        'object-shorthand': 'error', // Require or disallow method and property shorthand syntax for object literals
        'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
        'prefer-promise-reject-errors': 'error', // Require using Error objects as Promise rejection reasons
        'no-restricted-exports': 'error', // Disallow specified names in exports
        'no-sequences': 'error', // Disallow comma operators
        'no-undef-init': 'error', // Disallow initializing variables to undefined
        'sort-keys': 'off', // Require object keys to be sorted
        'sort-vars': 'off', // Require variables within the same declaration block to be sorted
        'spaced-comment': 'error', // Enforce consistent spacing after the // or /* in a comment
        'no-unused-labels': 'error', // Disallow unused labels
        'no-useless-rename': 'error', // Disallow renaming import, export, and destructured assignments to the same name
        'no-restricted-properties': 'error', // Disallow certain properties on certain objects
        'one-var': 'off', // Require or disallow newlines around variable declarations
        'no-restricted-syntax': 'error', // Disallow specified syntax in regular expressions
        'no-return-assign': 'error', // Disallow assignment operators in return statements
        'no-iterator': 'error', // Disallow the use of the __iterator__ property
        'no-script-url': 'error', // Disallow javascript: urls
        'no-underscore-dangle': 'error', // Disallow dangling underscores in identifiers
        'sort-imports': 'off', // Enforce sorted import declarations within modules
        yoda: 'error', // Require or disallow "Yoda" conditions
        'no-useless-call': 'error', // Disallow unnecessary calls to .call() and .apply()
        'no-useless-return': 'error', // Disallow redundant return statements
        'no-warning-comments': 'error', // Disallow specified warning terms in comments
        'no-useless-catch': 'error', // Disallow unnecessary catch clauses
        'prefer-numeric-literals': 'error', // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
        'require-yield': 'error', // Require generator functions to contain yield
        'no-useless-computed-key': 'error', // Disallow unnecessary computed property keys in objects and classes
        'no-useless-concat': 'error', // Disallow unnecessary concatenation of literals or template literals
        'operator-assignment': 'error', // Require or disallow assignment operator shorthand where possible
        'no-useless-escape': 'error', // Disallow unnecessary escape characters
        'prefer-const': 'error', // Require const declarations for variables that are never reassigned after declared
        'no-with': 'error', // Disallow with statements
        'prefer-spread': 'error', // Require spread operators instead of .apply()
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
        ], // Require destructuring from arrays and/or objects
        'prefer-exponentiation-operator': 'error', // Disallow the use of Math.pow in favor of the ** operator
        'prefer-named-capture-group': 'error', // Enforce using named capture group in regular expression
        'prefer-object-spread': 'error', // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
        'prefer-template': 'error', // Require template literals instead of string concatenation
        'prefer-rest-params': 'error', // Require rest parameters instead of arguments
        strict: 'error', // Require or disallow strict mode directives
        radix: 'error', // Enforce the consistent use of the radix argument when using parseInt()
        'prefer-regex-literals': 'error', // Disallow use of the RegExp constructor in favor of regular expression literals
        'symbol-description': 'error', // Require symbol descriptions
        'vars-on-top': 'error', // Require var declarations be placed at the top of their containing scope
        // !ESLint stylistic rules for Typescript-ESLint
        'array-element-newline': [
            'error',
            {
                ArrayExpression: 'consistent',
                ArrayPattern: { minItems: 3 },
            },
        ], // Enforce line-breaks after opening and before closing array brackets
        'function-call-argument-newline': 'off', // Enforce line breaks between arguments of a function call
        'line-comment-position': 'error', // Enforce position of line comments to maintain consistent code style
        'max-len': 'off', // Enforce a maximum line length
        'max-statements-per-line': 'error', // Enforce a maximum number of statements allowed per line
        'multiline-ternary': 'off', // Enforce newlines between operands of ternary expressions
        'new-parens': 'error', // Require parentheses when invoking a constructor with no arguments
        'object-property-newline': 'off', // Enforce placing object properties on separate lines
        // !An ESLint rules for TypeScript code-bases
        'brace-style': 'off', // Enforce consistent brace style for blocks
        'no-empty-function': 'off', // Disallow empty functions
        camelcase: 'off', // Enforce camelCase naming convention
        indent: 'off', // Enforce consistent indentation
        'comma-dangle': 'off', // Require or disallow trailing commas
        'comma-spacing': 'off', // Enforce consistent spacing before and after commas
        'default-param-last': 'off', // Enforce default parameters to be last
        'func-call-spacing': 'off', // Require or disallow spacing between function identifiers and their invocations
        'init-declarations': 'off', // Require or disallow initialization in variable declarations
        'space-infix-ops': 'off', // Require spacing around infix operators
        'dot-notation': 'off', // Enforce dot notation whenever possible
        'keyword-spacing': 'off', // Enforce consistent spacing before and after keywords
        'lines-between-class-members': 'off', // Require or disallow an empty line between class members
        'no-array-constructor': 'off', // Disallow Array constructors
        'no-shadow': 'off', // Disallow variable declarations from shadowing variables declared in the outer scope
        'no-dupe-class-members': 'off', // Disallow duplicate class members
        'no-throw-literal': 'off', // Disallow throwing literals as exceptions
        'no-duplicate-imports': 'off', // Disallow duplicate module imports
        quotes: 'off', // Enforce the consistent use of either backticks, double, or single quotes
        'object-curly-spacing': 'off', // Disallow whitespace before properties
        'no-extra-parens': 'off', // Disallow unnecessary parentheses
        'require-await': 'off', // Disallow async functions which have no await expression
        'no-extra-semi': 'off', // Disallow unnecessary semicolons
        'no-useless-constructor': 'off', // Disallow unnecessary constructors
        'no-implied-eval': 'off', // Disallow the use of eval()-like methods
        'no-unused-vars': 'off', // Disallow unused variables
        'no-invalid-this': 'off', // Disallow use of this in contexts where the value of this is undefined
        'no-loss-of-precision': 'off', // Disallow literal numbers that lose precision
        'no-restricted-imports': 'off', // Disallow specified modules when loaded by import.
        'no-magic-numbers': 'off', // Disallow magic numbers
        'padding-line-between-statements': 'off', // Require or disallow padding lines between statements
        'no-use-before-define': 'off', // Disallow the use of variables before they are defined
        'no-unused-expressions': 'off', // Disallow unused expressions
        'no-redeclare': 'off', // Disallow variable redeclaration
        'no-return-await': 'off', // Disallow unnecessary return await
        'no-loop-func': 'off', // Disallow function declarations that contain unsafe references inside loop statements
        'space-before-function-paren': 'off', // Enforce consistent spacing before function parenthesis
        semi: 'off', // require or disallow semicolons instead of ASI
        // !Typescript-ESLint Extension Rules
        '@typescript-eslint/default-param-last': 'error', // Enforce default parameters to be last
        '@typescript-eslint/dot-notation': 'error', // Enforce dot notation whenever possible
        '@typescript-eslint/init-declarations': 'error', // Require or disallow initialization in variable declarations
        '@typescript-eslint/lines-between-class-members': 'error', // Require or disallow an empty line between class members
        '@typescript-eslint/no-array-constructor': 'error', // Disallow generic Array constructors
        '@typescript-eslint/no-dupe-class-members': 'error', // Disallow duplicate class members
        '@typescript-eslint/no-empty-function': 'error', // Disallow empty functions
        '@typescript-eslint/no-extra-parens': 'off', // Disallow unnecessary parentheses
        '@typescript-eslint/no-extra-semi': 'error', // Disallow unnecessary semicolons
        '@typescript-eslint/no-implied-eval': 'error', // Disallow the use of eval()-like methods
        '@typescript-eslint/no-invalid-this': 'error', // Disallow this keywords outside of classes or class-like objects
        '@typescript-eslint/no-loop-func': 'error', // Disallow function declarations that contain unsafe references inside loop statements
        '@typescript-eslint/no-loss-of-precision': 'error', // Disallow literal numbers that lose precision
        '@typescript-eslint/no-magic-numbers': 'off', // Disallow magic numbers
        '@typescript-eslint/no-redeclare': 'error', // Disallow variable redeclaration
        '@typescript-eslint/no-restricted-imports': 'error', // Disallow specified modules when loaded by import
        '@typescript-eslint/no-shadow': 'error', // Disallow variable declarations from shadowing variables declared in the outer scope
        '@typescript-eslint/no-throw-literal': 'error', // Disallow throwing literals as exceptions
        '@typescript-eslint/no-unused-expressions': 'error', // Disallow unused expressions
        '@typescript-eslint/no-unused-vars': 'error', // Disallow unused variables
        '@typescript-eslint/no-use-before-define': 'error', // Disallow the use of variables before they are defined
        '@typescript-eslint/no-useless-constructor': 'error', // Disallow unnecessary constructors
        '@typescript-eslint/padding-line-between-statements': 'error', // Require or disallow padding lines between statements
        '@typescript-eslint/require-await': 'error', // Disallow async functions which have no await expression
        '@typescript-eslint/return-await': 'error', // Enforce consistent returning of awaited values
        // !@Typescript-ESLint Supported Rules
        '@typescript-eslint/adjacent-overload-signatures': 'error', // Require that function overload signatures be consecutive
        '@typescript-eslint/array-type': 'error', // Require consistently using either T[] or Array<T> for arrays
        '@typescript-eslint/await-thenable': 'error', // Disallow awaiting a value that is not a Thenable
        '@typescript-eslint/ban-ts-comment': 'error', // Disallow @ts-<directive> comments or require descriptions after directives
        '@typescript-eslint/ban-tslint-comment': 'error', // Disallow // tslint:<rule-flag> comments
        '@typescript-eslint/ban-types': 'error', // Disallow certain types
        '@typescript-eslint/class-literal-property-style': 'error', // Enforces consistent usage of type assertions
        '@typescript-eslint/consistent-indexed-object-style': 'error', // Require or disallow the Record type
        '@typescript-eslint/consistent-type-assertions': 'error', // Enforce consistent usage of type assertions
        '@typescript-eslint/consistent-type-definitions': 'off', // Enforce type definitions to consistently use either interface or type
        '@typescript-eslint/consistent-type-exports': 'error', // Enforce consistent usage of type exports
        '@typescript-eslint/consistent-type-imports': 'error', // Enforce consistent usage of type imports
        '@typescript-eslint/explicit-function-return-type': 'off', // Require explicit return types on functions and class methods
        '@typescript-eslint/explicit-member-accessibility': 'error', // Require explicit accessibility modifiers on class properties and methods
        '@typescript-eslint/explicit-module-boundary-types': 'error', // Require explicit return and argument types on exported functions' and classes' public class methods
        '@typescript-eslint/member-delimiter-style': 'error', // Require a specific member delimiter style for interfaces and type literals
        '@typescript-eslint/member-ordering': 'error', // Require a consistent member declaration order
        '@typescript-eslint/method-signature-style': 'error', // Enforce using a particular method signature syntax
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
            }, // Enforce using a particular method signature syntax

            {
                selector: 'objectLiteralProperty',
                format: null,
                modifiers: ['requiresQuotes'],
            }, // Enforce using a particular method signature syntax
        ],
        '@typescript-eslint/no-base-to-string': 'error', // Require .toString() to only be called on objects which provide useful information when stringified
        '@typescript-eslint/no-confusing-non-null-assertion': 'error', // Disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-confusing-void-expression': 'off', // Require expressions of type void to appear in statement position
        '@typescript-eslint/no-dynamic-delete': 'error', // Disallow non-null assertion in locations that may be confusing
        '@typescript-eslint/no-duplicate-enum-values': 'error', // Disallow duplicate enum member values
        '@typescript-eslint/no-duplicate-type-constituents': 'error', // Disallow duplicate constituents of union or intersection types
        '@typescript-eslint/no-empty-interface': 'error', // Disallow the declaration of empty interfaces
        '@typescript-eslint/no-explicit-any': 'error', // Disallow the any type
        '@typescript-eslint/no-extra-non-null-assertion': 'error', // Disallow extra non-null assertions
        '@typescript-eslint/no-extraneous-class': 'error', // Disallow classes used as namespaces
        '@typescript-eslint/no-floating-promises': 'error', // Require Promise-like statements to be handled appropriately
        '@typescript-eslint/no-for-in-array': 'error', // Disallow iterating over an array with a for-in loop
        '@typescript-eslint/no-import-type-side-effects': 'error', // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
        '@typescript-eslint/no-inferrable-types': 'error', // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
        '@typescript-eslint/no-invalid-void-type': 'error', // Disallow void type outside of generic or return types
        '@typescript-eslint/no-meaningless-void-operator': 'error', // Disallow the void operator except when used to discard a value
        '@typescript-eslint/no-misused-new': 'error', // Enforce valid definition of new and constructor
        '@typescript-eslint/no-misused-promises': 'off', // Disallow Promises in places not designed to handle them
        '@typescript-eslint/no-mixed-enums': 'error', // Disallow enums with members that have initializers
        '@typescript-eslint/no-namespace': 'error', // Disallow TypeScript namespaces
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error', // Disallow non-null assertions in the left operand of a nullish coalescing operator
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // Disallow non-null assertions after an optional chain expression
        '@typescript-eslint/no-non-null-assertion': 'error', // Disallow non-null assertions using the ! postfix operator
        '@typescript-eslint/no-redundant-type-constituents': 'error', // Disallow members of unions and intersections that do nothing or override type information
        '@typescript-eslint/no-require-imports': 'error', // Disallow invocation of require()
        '@typescript-eslint/no-this-alias': 'error', // Disallow aliasing this
        '@typescript-eslint/no-type-alias': 'off', // Disallow type aliases
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // Disallow unnecessary equality comparisons against boolean literals
        '@typescript-eslint/no-unnecessary-condition': 'error', // Disallow conditionals where the type is always truthy or always falsy
        '@typescript-eslint/no-unnecessary-qualifier': 'error', // Disallow unnecessary namespace qualifiers
        '@typescript-eslint/no-unnecessary-type-arguments': 'error', // Disallow type arguments that are equal to the default
        '@typescript-eslint/no-unnecessary-type-assertion': 'error', // Disallow type assertions that do not change the type of an expression
        '@typescript-eslint/no-unnecessary-type-constraint': 'error', // Disallow unnecessary constraints on generic types
        '@typescript-eslint/no-unsafe-argument': 'error', // Disallow calling a function with a value with type any
        '@typescript-eslint/no-unsafe-assignment': 'error', // Disallow assigning a value with type any to variables and properties
        '@typescript-eslint/no-unsafe-call': 'error', // Disallow calling a value with type any
        '@typescript-eslint/no-unsafe-enum-comparison': 'error', // Disallow comparing enums to anything other than numbers or other enums
        '@typescript-eslint/no-unsafe-member-access': 'error', // Disallow member access on a value with type any
        '@typescript-eslint/no-unsafe-return': 'error', // Disallow returning a value with type any from a function
        '@typescript-eslint/no-useless-empty-export': 'error', // Disallow empty exports that don't change anything in a module file
        '@typescript-eslint/no-var-requires': 'error', // Disallow require statements except in import statements
        '@typescript-eslint/non-nullable-type-assertion-style': 'error', // Enforce non-null assertions over explicit type casts
        '@typescript-eslint/parameter-properties': 'error', // Require or disallow parameter properties in class constructors
        '@typescript-eslint/prefer-as-const': 'error', // Enforce the use of as const over literal type
        '@typescript-eslint/prefer-enum-initializers': 'error', // Require each enum member value to be explicitly initialized
        '@typescript-eslint/prefer-for-of': 'error', // Enforce the use of for-of loop over the standard for loop where possible
        '@typescript-eslint/prefer-function-type': 'error', // Enforce using function types instead of interfaces with call signatures
        '@typescript-eslint/prefer-includes': 'error', // Enforce includes method over indexOf method
        '@typescript-eslint/prefer-literal-enum-member': 'error', // Require all enum members to be literal values
        '@typescript-eslint/prefer-namespace-keyword': 'error', // Require using namespace keyword over module keyword to declare custom TypeScript modules
        '@typescript-eslint/prefer-nullish-coalescing': 'error', // Enforce using the nullish coalescing operator instead of logical chaining
        '@typescript-eslint/prefer-optional-chain': 'error', // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
        '@typescript-eslint/prefer-readonly': 'off', // Require private members to be marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
        '@typescript-eslint/prefer-reduce-type-parameter': 'error', // Enforce using type parameter when calling Array#reduce instead of casting
        '@typescript-eslint/prefer-regexp-exec': 'error', // Enforce RegExp#exec over String#match if no global flag is provided
        '@typescript-eslint/prefer-return-this-type': 'error', // Enforce that this is used when only this type is returned
        '@typescript-eslint/prefer-string-starts-ends-with': 'error', // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
        '@typescript-eslint/prefer-ts-expect-error': 'error', // Enforce using @ts-expect-error over @ts-ignore
        '@typescript-eslint/promise-function-async': 'error', // Require any function or method that returns a Promise to be marked async
        '@typescript-eslint/require-array-sort-compare': 'error', // Require Array#sort calls to always provide a compareFunction
        '@typescript-eslint/restrict-plus-operands': 'error', // Require both operands of addition to be the same type and be bigint, number, or string
        '@typescript-eslint/restrict-template-expressions': 'error', // Enforce template literal expressions to be of string type
        '@typescript-eslint/strict-boolean-expressions': 'off', // Disallow certain types in boolean expressions
        '@typescript-eslint/switch-exhaustiveness-check': 'error', // Require switch-case statements to be exhaustive with union type
        '@typescript-eslint/triple-slash-reference': 'error', // Disallow certain triple slash directives in favor of ES6-style import declarations
        '@typescript-eslint/typedef': 'error', // Require type annotations in certain places
        '@typescript-eslint/unbound-method': 'error', // Enforce unbound methods are called with their expected scope
        '@typescript-eslint/unified-signatures': 'error', // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
        // !ESLint plugin with rules that help validate proper imports
        'import/no-unresolved': 'off', // Ensure imports point to a file/module that can be resolved.
        'import/named': 'error', // Ensure named imports correspond to a named export in the remote file.
        'import/default': 'error', // Ensure a default export is present, given a default import.
        'import/namespace': 'off', // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        'import/no-restricted-paths': 'off', // Restrict which files can be imported in a given folder
        'import/no-absolute-path': 'error', // Forbid import of modules using absolute paths
        'import/no-dynamic-require': 'error', // Forbid require() calls with expressions
        'import/no-internal-modules': 'off', // Prevent importing the submodules of other modules
        'import/no-webpack-loader-syntax': 'error', // Forbid webpack loader syntax in imports
        'import/no-self-import': 'error', // Forbid a module from importing itself
        'import/no-cycle': 'error', // Forbid a module from importing a module with a dependency path back to itself
        'import/no-useless-path-segments': 'error', // Prevent unnecessary path segments in import and require statements
        'import/no-relative-parent-imports': 'off', // Forbid importing modules from parent directories
        'import/no-relative-packages': 'error', // Prevent importing packages through relative paths
        'import/export': 'error', // Disallow modules from importing themselves
        'import/no-named-as-default': 'off', // Report any invalid exports, i.e. re-export of the same name
        'import/no-named-as-default-member': 'error', // Report use of exported name as identifier of default export
        'import/no-deprecated': 'error', // Report imported names marked with @deprecated documentation tag
        'import/no-extraneous-dependencies': 'off', // Forbid the use of extraneous packages
        'import/no-mutable-exports': 'error', // Forbid the use of mutable exports with var or let
        'import/no-unused-modules': 'error', // Report modules without exports, or exports without matching import in another module
        'import/unambiguous': 'error', // Report potentially ambiguous parse goal (script vs. module)
        'import/no-commonjs': 'error', // Report CommonJS require calls and module.exports or exports.*
        'import/no-amd': 'error', // Report AMD require and define calls.
        'import/no-nodejs-modules': 'error', // No Node.js builtin modules
        'import/no-import-module-exports': 'error', // Ensure all exports appear after other statements
        'import/first': 'error', // Report repeated import of the same module in multiple places
        'import/exports-last': 'off', // Report repeated import of the same module in multiple places
        'import/no-duplicates': 'error', // Report repeated import of the same module in multiple places
        'import/no-namespace': 'off', // Report namespace imports
        'import/extensions': 'off', // Ensure consistent use of file extension within the import path
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
            },
        ], // Enforce a convention in module import order
        'import/newline-after-import': 'error', // Enforce a newline after import statements
        'import/prefer-default-export': 'off', // Prefer a default export if module exports a single name
        'import/max-dependencies': 'off', // Limit the maximum number of dependencies a module can have
        'import/no-unassigned-import': 'off', // Forbid unassigned imports
        'import/no-named-default': 'off', // Forbid named default exports
        'import/no-default-export': 'off', // Forbid anonymous values as default exports
        'import/no-named-export': 'off', // Forbid named exports
        'import/no-anonymous-default-export': 'error', // Forbid anonymous values as exports
        'import/group-exports': 'off', // Prefer named exports to be grouped together in a single export declaration
        'import/dynamic-import-chunkname': 'error', // Enforce a leading comment with the webpackChunkName for dynamic imports
        // !ESLint-Jest plugin with rules that help validate proper Jest testing
        'jest/consistent-test-it': 'error', // Enforce test and it usage conventions
        'jest/expect-expect': 'error', // Enforce assertion to be made in a test body
        'jest/max-expects': 'error', // Enforces a maximum number assertion calls in a test body
        'jest/max-nested-describe': 'error', // Enforces a maximum depth to nested describe calls
        'jest/no-alias-methods': 'error', // Disallow alias methods
        'jest/no-commented-out-tests': 'error', // Disallow commented out tests
        'jest/no-conditional-expect': 'error', // Disallow calling expect conditionally
        'jest/no-conditional-in-test': 'error', // Disallow conditional logic in tests
        'jest/no-deprecated-functions': 'error', // Disallow use of deprecated functions
        'jest/no-disabled-tests': 'error', // Disallow disabled tests
        'jest/no-done-callback': 'error', // Disallow using a callback in asynchronous tests and hooks
        'jest/no-duplicate-hooks': 'error', // Disallow duplicate setup and teardown hooks
        'jest/no-export': 'error', // Disallow using exports in files containing tests
        'jest/no-focused-tests': 'error', // Disallow focused tests
        'jest/no-hooks': 'error', // Disallow setup and teardown hooks
        'jest/no-identical-title': 'error', // Disallow identical titles
        'jest/no-interpolation-in-snapshots': 'error', // Disallow string interpolation inside snapshots
        'jest/no-jasmine-globals': 'error', // Disallow Jasmine globals
        'jest/no-large-snapshots': 'error', // Disallow large snapshots
        'jest/no-mocks-import': 'error', // Disallow manually importing from __mocks__
        'jest/no-restricted-matchers': 'error', // Disallow specific matchers & modifiers
        'jest/no-standalone-expect': 'error', // Disallow using expect outside of it or test blocks
        'jest/no-test-prefixes': 'error', // Require using .only and .skip over f and x
        'jest/no-test-return-statement': 'error', // Disallow explicitly returning from tests
        'jest/prefer-called-with': 'error', // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
        'jest/prefer-comparison-matcher': 'error', // Suggest using the built-in comparison matchers
        'jest/prefer-each': 'error', // Prefer using .each rather than manual loops
        'jest/prefer-equality-matcher': 'error', // Suggest using the built-in equality matchers
        'jest/prefer-expect-assertions': 'error', // Suggest using expect.assertions() OR expect.hasAssertions()
        'jest/prefer-expect-resolves': 'error', // Prefer await expect(...).resolves over expect(await ...) syntax
        'jest/prefer-hooks-in-order': 'error', // Prefer having hooks in a consistent order
        'jest/prefer-hooks-on-top': 'error', // Suggest having hooks before any test cases
        'jest/prefer-lowercase-title': 'error', // Enforce lowercase test names
        'jest/prefer-mock-promise-shorthand': 'error', // Prefer mock resolved/rejected shorthands for promises
        'jest/prefer-snapshot-hint': 'error', // Prefer including a hint with external snapshots
        'jest/prefer-spy-on': 'error', // Suggest using jest.spyOn()
        'jest/prefer-strict-equal': 'error', // Suggest using toStrictEqual()
        'jest/prefer-to-be': 'error', // Suggest using toBe() for primitive literals
        'jest/prefer-to-contain': 'error', // Suggest using toContain()
        'jest/prefer-to-have-length': 'error', // Suggest using toHaveLength()
        'jest/prefer-todo': 'error', // Suggest using test.todo()
        'jest/require-hook': 'error', // Require setup and teardown code to be within a hook
        'jest/require-to-throw-message': 'error', // Require a message for toThrow()
        'jest/require-top-level-describe': 'error', // Require test cases and hooks to be inside a describe block
        'jest/valid-describe-callback': 'error', // Enforce valid describe() callback
        'jest/valid-expect': 'error', // Enforce valid expect() usage
        'jest/valid-expect-in-promise': 'error', // Require promises that have expectations in their chain to be valid
        'jest/valid-title': 'error', // Enforce valid titles
        // !Jsx a11y rules for accessibility
        'jsx-a11y/no-static-element-interactions': 'error', // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        'jsx-a11y/role-has-required-aria-props': 'error', // Enforce that elements with ARIA roles must have all required attributes for that role.
        'jsx-a11y/role-supports-aria-props': 'error', // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        'jsx-a11y/scope': 'error', // Enforce scope prop is only used on <th> elements.
        'jsx-a11y/img-redundant-alt': 'error', // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
        'jsx-a11y/interactive-supports-focus': 'error', // Enforce that elements with interactive handlers like onClick must be focusable.
        'jsx-a11y/label-has-associated-control': 'error', // Enforce that <label> elements have the htmlFor prop.
        'jsx-a11y/lang': 'error', // Enforce lang attribute has a valid value.
        'jsx-a11y/no-noninteractive-tabindex': 'error', // tabIndex should only be declared on interactive elements.
        'jsx-a11y/no-onchange': 'error', // Enforce usage of onBlur over onChange on select menus for accessibility.
        'jsx-a11y/no-redundant-roles': 'error', // Enforce explicit role property is not the same as implicit/default role property on element.
        'jsx-a11y/tabindex-no-positive': 'error', // Enforce tabIndex value is not greater than zero.
        'jsx-a11y/media-has-caption': 'error', // Enforces that <audio> and <video> elements must have a <track> for captions.
        'jsx-a11y/mouse-events-have-key-events': 'error', // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        'jsx-a11y/no-access-key': 'error', // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screen-reader.
        'jsx-a11y/accessible-emoji': 'error', // Enforce emojis are wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelled-by.
        'jsx-a11y/alt-text': 'error', // Enforce all elements that require alternative text have meaningful information to relay back to end user.
        'jsx-a11y/anchor-has-content': 'error', // Enforce all anchors to contain accessible content.
        'jsx-a11y/anchor-is-valid': 'error', // Enforce all anchors are valid, navigable elements.
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error', // Enforce elements with aria-active descendant are tabbable.
        'jsx-a11y/aria-props': 'error', // Enforce all aria-* props are valid.
        'jsx-a11y/aria-proptypes': 'error', // Enforce ARIA state and property values are valid.
        'jsx-a11y/aria-role': 'error', // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        'jsx-a11y/aria-unsupported-elements': 'error', // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        'jsx-a11y/click-events-have-key-events': 'error', // Enforce a clickable non-interactive element has at least one keyboard event listener.
        'jsx-a11y/heading-has-content': 'error', // Enforce heading (h1, h2, etc) elements contain accessible content.
        'jsx-a11y/html-has-lang': 'error', // Enforce <html> element has lang prop.
        'jsx-a11y/iframe-has-title': 'error', // Enforce iframe elements have a title attribute.
        'jsx-a11y/no-autofocus': 'error', // Enforce autoFocus prop is not used.
        'jsx-a11y/no-distracting-elements': 'error', // Enforce distracting elements are not used.
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error', // Interactive elements should not be assigned non-interactive roles.
        'jsx-a11y/no-noninteractive-element-interactions': 'error', // Non-interactive elements should not be assigned mouse or keyboard event listeners.
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error', // Non-interactive elements should not be assigned interactive roles.
        // !ESLint-node for Node.js
        'n/no-process-exit': 'error', // Disallow the use of process.exit()
        'n/no-unsupported-features/node-builtins': 'off', // Disallow unsupported Node.js built-in APIs on the specified version
        'n/prefer-global/url': 'error', // Enforce the use of global URL over require('url').URL
        'n/prefer-promises/dns': 'error', // Enforce require("dns").promises
        'n/prefer-promises/fs': 'error', //  Enforce require("fs").promises
        'n/prefer-global/console': 'error', // Prefer global console over require('console')
        'n/prefer-global/process': 'error', // Prefer global process over require('process')
        'n/prefer-global/text-decoder': 'error', // Prefer global TextDecoder over require('util').TextDecoder
        'n/prefer-global/text-encoder': 'error', //  Prefer global TextEncoder over require('util').TextEncoder
        'n/file-extension-in-import': 'off', // Enforce either module.exports or exports
        'n/no-extraneous-require': 'error', // Disallow new operators with calls to require
        'n/exports-style': 'error', // Enforce either module.exports or exports
        'n/no-unsupported-features/es-builtins': 'off', // Disallow unsupported ECMAScript built-ins on the specified version
        'n/no-unpublished-require': 'error', // Disallow require() expressions which import private modules
        'n/no-new-require': 'error', // Disallow new operators with calls to require
        'n/no-path-concat': 'error', // Disallow string concatenation with __dirname and __filename
        'n/process-exit-as-throw': 'error', // Enforce throwing instead of calling process.exit()
        'n/shebang': 'error', //  Enforce using Node.js shebang
        'n/no-deprecated-api': 'error', // Disallow deprecated API
        'n/handle-callback-err': 'error', // Enforce error handling in callbacks
        'n/no-callback-literal': 'error', // Disallow literal values in callbacks
        'n/no-exports-assign': 'error', // Disallow assigning to exports
        'n/no-unpublished-bin': 'error', // Disallow bin files that npm ignores
        'n/no-missing-import': 'off', // Disallow assigning to imported bindings
        'n/no-missing-require': 'error', // Disallow new operators with calls to require
        'n/no-sync': 'error', // Disallow synchronous methods
        'n/prefer-global/buffer': 'error', // Prefer global Buffer over require('buffer').Buffer
        'n/prefer-global/url-search-params': 'error', // Enforce the use of global URLSearchParams over require('url').URLSearchParams
        'n/no-extraneous-import': 'error', // Disallow assigning to imported bindings
        'n/callback-return': 'error', // Enforce return after a callback
        'n/no-unsupported-features/es-syntax': 'off', // Disallow unsupported ECMAScript features on the specified version
        'n/global-require': 'error', // Enforce require() on top-level module scope
        'n/no-mixed-requires': 'error', // Disallow require calls to be mixed with regular variable declarations
        'n/no-process-env': 'off', // Disallow the use of process.env
        'n/no-restricted-import': 'error', // Disallow specified modules when loaded by import
        'n/no-restricted-require': 'error', // Disallow specified modules when loaded by require
    },
};
