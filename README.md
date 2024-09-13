# Birthday Buddy App

This is a simple React application called **Birthday Buddy**, where you can display a list of people along with their name, age, and image. The app also allows you to clear the list of people with a button click.
The application is hosted live at: https://nazrin-birthday-buddy.netlify.app/

## Features
- Display a list of people, including their name, age, and picture.
- Show the total number of people in the list.
- Clear the list of people with a button.

## Installation
- Clone the repository using `git clone <repo-url>`.
- Navigate to the project directory using `cd birthday-buddy-app`.
- Install dependencies using `npm install`.
- Start the development server using `npm start`.
- Open `http://localhost:3000` in your browser to see the app running.


## State Management

The state of the list is managed using React’s `useState` hook. Initially, the state is set to the data imported from `data.js`. The button allows users to clear the list by resetting the state to an empty array, which automatically updates the UI.

## Usage

When the app starts, you will see the list of people with their name, age, and image.  
The total number of people is displayed at the top.  
There is a button labeled **"Clear List"** that will clear the list when clicked.

## Conclusion

The **Birthday Buddy** app is a simple React project that demonstrates component-based design, state management with `useState`, and how to render lists dynamically. It offers a basic yet practical example for those looking to understand how to manage and manipulate state in a React application. The app can be easily expanded and customized for more complex use cases.

