commit 1: connect() in redux
commit 2: useSelector(), useDispatch() hooks

useSelector(), useDispatch() hooks vs connect in redux
// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings

commit 3: redux-thunk
// it is a function that returns a function
// impoves the action creators and enables to make async requests
// usually action creators must execute immediately and thus can not handle async requests
// redux thunk enables to return a function from action creators instead of just an object
// and inside the function we can do all sorts of API requests
