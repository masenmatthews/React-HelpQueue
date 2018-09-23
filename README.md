## React Help Queue

## By: Masen Matthews

### This app is designed to serve as an introduction to React. It's being built alongside a tutorial from Learn How to Program. The tutorial can be found in the "weekend homework" section here: https://www.learnhowtoprogram.com/react/react-fundamentals

### Development notes
Launch server by running:
  $ webpack
  $ webpack-dev-server

localhost:8080

Steps to adding statefulness:

1. Create a stateful class-based component that will record whether our app is in the state of displaying questions, or the state of displaying the form.

2. Construct an event to toggle our state value when the user completes our questions. (This event will later be refactored in step 5.)

3. Create a new component to contain the questions we want to appear before the form.

4. Use JSX conditional rendering to change what's displayed depending on the current state.

5. Learn about unidirectional data flow to allow components to communicate and work in sync. (And refactor the event we created in step two.)

Steps to adding conditional rendering (for questions):

1. Create a stateful class-based component that will record whether our app is in the state of displaying questions, or the state of displaying the form.

2. Construct an event to toggle our state value when the user completes our questions. (This event will later be refactored in step 5.)

3. Create a new component to contain the questions we want to appear before the form.

4. Use JSX conditional rendering to change what's displayed depending on the current state.

5. Learn about unidirectional data flow to allow components to communicate and work in sync. (And refactor the event we created in step two.)

Implementing data flow with callbacks:

1. We define a callback function in the parent component where the state or data we want to alter resides. (like NewTicketControl). This function is responsible for doing something with data; like altering state to trigger UI updates.

2. The parent component passes this function into the child component as a prop.

3. The child component can access this method through its props, and call it at the relevant time (like when the Yes button is clicked, in our case).

4. When the child executes the callback method from its props, the method in the parent component is invoked. Because the method resides in the parent class it has access to update the parent's state.

Adding refs, lifting state, and implementing UUID

1. First we'll add something called refs to our form. They will allow us to collect information users place in form fields.

2. Once we're able to gather user-provided data, we'll need to decide where to keep it. We'll learn how to use a concept/best practice called lifting state to structure our React applications and their state in the most efficient manner.

3. Once we've determined where to keep our new state we'll add code that will move user-provided data to this location, similar to the manner we "moved" information between the ConfirmationQuestions and NewTicketControl.

4. Next we'll add code to dynamically render our new stateful list of user-created tickets.

5. Finally, we'll implement a quick-and-easy library called UUID that will assign unique IDs to each ticket.
