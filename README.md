# n8n-utils
A JavaScript library to provide common utilities to n8n for usage in "code" nodes.


## Installation

```bash
npm install --save-dev @exploreimpact/n8n-utils
```

Or globally:

```bash
npm install -g @exploreimpact/n8n-utils
```

## Usage

An example of how to use the utils:

```javascript
const {
  parseBool,
} = require('@exploreimpact/n8n-utils');

return items.map(item => ({
  json: {
    ...item.json,
    isWonderful: parseBool(item.json.wonderful),
  },
}));
```

## Release flow

To release a new package version, bump the version inside the package.json.
A GitHub workflow will automatically create a GitHub release and publish to npm.
