# ubs-server

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Unique blossom backend Repo

## Getting Started <a name = "getting_started"></a>

for documentation check the _/doc_ folder and open _index.html_ in a browser

### Folder structure

This is what the main folder (src) looks like

```
C:.
│   server.js
│
├───config
│       env.config.js
│
├───controllers
│       messages.controller.js
│
├───database
│   │   connect.js
│   │
│   └───models
│           message.model.js
│
├───middlewares
│       error.middleware.js
│       pre_routes.middleware.js
│       response.middleware.js
│
├───routes
│       messages.routes.js
│       router.js
│
├───services
│       messages.service.js
│
└───utils
        asyncHandler.utils.js
        customError.utils.js
        customLogger.utils.js
        customResponse.utils.js
```

### Installing

Clone repo to your local machine and run

```javascript
    npm install
```

or

```javascript
yarn;
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.
