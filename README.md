# Modern UI Libraries Demo

This project is a comprehensive showcase of popular React UI libraries, including Material UI, Flowbite, shadcn/ui, and Chakra UI. It demonstrates the usage of various components from each library and provides examples of customization.

## Table of Contents

1. [Introduction](#introduction)
2. [Libraries Comparison](#libraries-comparison)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Project Structure](#project-structure)
6. [Library Overviews](#library-overviews)
   - [Material UI](#material-ui)
   - [Flowbite](#flowbite)
   - [shadcn/ui](#shadcnui)
   - [Chakra UI](#chakra-ui)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

This project serves as a learning resource for developers interested in exploring different UI libraries for React. It provides a side-by-side comparison of components from Material UI, Flowbite, shadcn/ui, and Chakra UI, allowing developers to make informed decisions about which library best suits their needs.

## [Live demo is available (https://ui-libraries-demo.vercel.app/)]

## Libraries Comparison

| Feature | Material UI | Flowbite | shadcn/ui | Chakra UI |
|---------|-------------|----------|-----------|-----------|
| Styling Solution | CSS-in-JS | Tailwind CSS | Tailwind CSS | CSS-in-JS |
| Customization | Theme object | Tailwind classes | Tailwind + CSS Variables | Theme object |
| Bundle Size | Larger | Lightweight | Lightweight | Moderate |
| Learning Curve | Moderate | Low | Low | Low |

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone git@github.com:prakash-aryan/ui-libraries-demo.git
   cd modern-ui-libraries-demo
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install additional libraries:
   ```
   npm install @mui/material @emotion/react @emotion/styled
   npm install flowbite flowbite-react
   npm install @radix-ui/react-context-menu
   npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
   ```

4. Install development dependencies:
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```

5. Initialize Tailwind CSS:
   ```
   npx tailwindcss init -p
   ```

## Running the Application

To start the development server:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
|-- components/
|   |-- ui/
|   |   |-- (shadcn/ui components)
|-- pages/
|   |-- MaterialUIPage.js
|   |-- FlowbitePage.js
|   |-- ShadcnPage.js
|   |-- ChakraUIPage.js
|-- App.js
|-- index.js
|-- index.css
```

## Library Overviews

### Material UI

Material UI is a popular React UI framework that implements Google's Material Design. It provides a comprehensive set of pre-built components and tools for building elegant, consistent, and accessible user interfaces.

Components used:
1. Rating - [Documentation](https://mui.com/material-ui/react-rating/)
2. Table with Pagination - [Documentation](https://mui.com/material-ui/react-table/)
3. CircularProgress - [Documentation](https://mui.com/material-ui/react-progress/)

Example component (Rating):

```jsx
import React from 'react';
import Rating from '@mui/material/Rating';

function RatingExample() {
  const [value, setValue] = React.useState(2);

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
```

Customized component (Rating with precision):

```jsx
import React from 'react';
import Rating from '@mui/material/Rating';

function CustomRatingExample() {
  const [value, setValue] = React.useState(2.5);

  return (
    <Rating
      name="custom-rating"
      value={value}
      precision={0.5}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
```

### Flowbite

Flowbite is a set of UI components built on top of Tailwind CSS. It combines the utility-first approach of Tailwind with pre-built components, offering a balance between customization and development speed.

Components used:
1. Radio Buttons - [Documentation](https://flowbite.com/docs/forms/radio/)
2. Hero Section - [Documentation](https://flowbite.com/docs/components/hero/)
3. Badges - [Documentation](https://flowbite.com/docs/components/badge/)

Example component (Hero Section):

```jsx
function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Speak to Sales
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
```

Customized component (Hero Section with gradient background):

```jsx
function CustomHeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Revolutionize Your Workflow
            <span className="block text-yellow-300 mt-2">with Our AI-Powered Platform</span>
          </h1>
          <p className="mt-4 sm:text-xl">
            Boost productivity and streamline your processes with cutting-edge artificial intelligence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="block w-full px-12 py-3 text-sm font-medium rounded shadow bg-white text-purple-600 sm:w-auto hover:bg-gray-100 focus:outline-none focus:ring">
              Get Started
            </button>
            <button className="block w-full px-12 py-3 text-sm font-medium rounded shadow bg-purple-600 text-white sm:w-auto hover:bg-purple-700 focus:outline-none focus:ring">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### shadcn/ui

shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS. It provides a set of accessible, customizable components that can be easily integrated into any React project.

Components used:
1. Context Menu - [Documentation](https://ui.shadcn.com/docs/components/context-menu)
2. Popover - [Documentation](https://ui.shadcn.com/docs/components/popover)
3. Card - [Documentation](https://ui.shadcn.com/docs/components/card)

Example component (Context Menu):

```jsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function ContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
```

Customized component (Context Menu with sub-menu and custom styles):

```jsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu"

function CustomContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm cursor-context-menu">
        Right click for options
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 bg-white">
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48 bg-white">
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuItem>Copy Link</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-red-500">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
```

### Chakra UI

Chakra UI is a simple, modular, and accessible component library that provides building blocks for React applications. It offers a wide range of customizable components with a focus on accessibility and ease of use.

Components used:
1. Badge - [Documentation](https://chakra-ui.com/docs/components/badge)
2. Menu - [Documentation](https://chakra-ui.com/docs/components/menu)
3. Stat - [Documentation](https://chakra-ui.com/docs/components/stat)

Example component (Stat):

```jsx
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

function StatExample() {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Sent</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Clicked</StatLabel>
        <StatNumber>45</StatNumber>
        <StatHelpText>
          <StatArrow type='decrease' />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
}
```

Customized component (Stat with custom colors and layout):

```jsx
import { Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';

function CustomStatExample() {
  return (
    <Flex justify="space-between">
      <Stat>
        <StatLabel fontSize="lg" fontWeight="medium">Total Users</StatLabel>
        <StatNumber fontSize="4xl" fontWeight="bold" color="blue.500">1,024,032</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          12.5% increase
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel fontSize="lg" fontWeight="medium">Revenue</StatLabel>
        <StatNumber fontSize="4xl" fontWeight="bold" color="green.500">$5.6M</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          8.2% increase
        </StatHelpText>
      </Stat>
    </Flex>
  );
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
