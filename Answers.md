1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter, and reduce do not produce side effeects. The method for creating new objects while exstneing the properties of another object is map.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are something the app is wanting to do that the view has transposed. 

Reducers take the action in and hand out the proper function to change the state in the store.

The Store is where the state is actually stored.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is going to be global while a state on a componet is only going to be accessed by that componet.

1.  What is middleware?

Middleware lets us do different things before we pass some data into the store from the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A middleware that allows for async functions to be run before data is passed to the store.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
