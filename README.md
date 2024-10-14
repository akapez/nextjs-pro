This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## NextJS Pro Workshop

- Next.js Production Project Setup and Infrastructure
  - Setting up Eslint and Prettier
    ```
    npm install --save-dev eslint-config-prettier prettier prettier-plugin-tailwindcss
    ```
    ```json
    {
    // inside vscode setting.json
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
    }
    ```
    ```json
    // inside .eslintrc.json
    {
      "extends": ["next/core-web-vitals", "prettier"]
    }
    ```
    ##### Additional Prettier Plugins
    ```
    npm install --save-dev @ianvs/prettier-plugin-sort-imports
    ```
    ```json
    // inside .prettierrc.json
    {
      // ... other settings
      "plugins": ["prettier-plugin-tailwindcss", "sort-imports"],
      "importOrder": [
        "^(react/(.*)$)|^(react$)",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "^[./]"
      ]
    } 
    ```
    
  - Storybook
    ```
    npx storybook@latest init
    ```
    
  - Unit Testing
    ```
    npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest ts-node @testing-library/user-event
    ```
    ##### Initializing Jest
    ```
    npm init jest@latest
    ```
    ```json
    // inside package.json
    "scripts": {
      "test": "jest",
      "test:watch": "jest --watch"
    },
    ```
