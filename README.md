# react-design-system

UI design system built in React with tailwind css

## React + TypeScript + Tailwind

This UI component library works on top of tailwindcss, so first make sure that you have tailwind up and running

[Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides)

Assuming that you have tailwind running just install the package

`npm i react-ds-jech33`

And add the minified css to the root of your app

`import 'react-ds-jech33/dist/tailwind.css'`

Then just start importing any component you want!

```js
import { Button as JButton } from "react-ds-jech33";

export default function Page() {
return (
   <>
      <JButton className="bg-red-500" />
   </>
);
}
```

## Eslint & Prettier

We recommend setting up your environment with Eslint and Prettier for a good development experience.

- Configure the top-level `parser, parserOptions and settings` properties like this:

```js
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ["src"],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
```
