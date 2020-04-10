# Pro-React-16_11_Stateful-components

Based on Chapter 11 of Pro-React-16

## Set up 

- Run `npm install` to install dependencies
- Run `npm start` to start the development server

### 1. [Preparation](https://github.com/davidtrussler/Pro-React-16_11_Stateful-components/tree/Preparation)

- Updates files from Chapter 10 

### 2. [Creating a Stateful Component](https://github.com/davidtrussler/Pro-React-16_11_Stateful-components/tree/Create-Stateful-Component)

- Converts SimpleButton from stateless to stateful component
- Adds State Data via the contructor and reads it in the component

### 3. [Modifies state data](https://github.com/davidtrussler/Pro-React-16_11_Stateful-components/tree/Modify-state-data)

- Uses setState method to modify state

### 4. [Defining state data using Hooks](https://github.com/davidtrussler/Pro-React-16_11_Stateful-components/tree/Defining-State-Data-with-Hooks)

- Adds HooksButton component
- Updates Summary to use HooksButton

### 5. [Lifting up state data](https://github.com/davidtrussler/Pro-React-16_11_Stateful-components/tree/Lifting-up-State-Data)

- Converts Summary to a class-based component defining a counter value
- Replaces State Data with props in SimpleButton
- Replaces State Data with props in HooksButton
- Lifts State Data beyond parent
  - Converts App to be a stateful component with Hooks
  - Removes state data from Summary
- Defines Prop Types and Default Values
