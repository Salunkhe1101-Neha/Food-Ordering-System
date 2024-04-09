# React + Vite

# episode 4 Talk is Cheap, Show me code
1) Component:- components is nothing but a nirmal javascript function which is return some jsx code.
2) Component Composition :-
3) JSX :-
4) style in react :- in react inline css we give in the form of object.
5) Props :- props is short form for properties. Properties is something which is passed to the component. Suppose i want to pass some dynamically data to component then we pass it as a props. Props are like functional argument.
6) Config drivan UI:- Our wesite is drivan by data. Contring your UI on the basis of Data (config). And this config is comes from backEnd.(Ui is derivan by config). And what is config the API contained data is a config.


# episode 5 let's get hooked.
- React make dom operation superfast
1) Virtual Dom : Virtual Dom is representation of actual Dom. Virtual dom is nothing but a normal js object.
1) When ever the state variable updates react re-render the component.
1) Reconciliation Algoritham (Also known as react fibar) :- React fibar is new way to finding the difference and updating the dom.
1) why react is fast:- bacause it done dom manipulation fast. bacause it has virtual dom, react can find difference bet updated virtual dom to previous virtual dom and update UI so it becaomes fast. 
1) Diff Algoritham:-


# episode no 9 notes Optimising Our App
1) different names for lazy loading
        Chunking
        Code Spliting
        lazy loading
        on demand loading
        dynamic import







# episode no 12 notes
1) Redux is not mandetory, use when it really node_modules
2) React and redux are two separate parts
3) Redux is another library which will we need to install in our app
4) Like redux there are another libraries are used to manage state like Zustand
5) redux is used to handling state of our application, it offeres easy debugging. it works with other libraries anfd framework
6) There are two two libraries offers redux team. -react-redux and react-toolkit
7) we are using react-toolkit. why react-toolkit :- react-toolkit gives standared way to write Redux Logic

# redux store and slice
1) what is redux store :- redux store is nothing but a big javascript object with lots of data inside this and it is kept in global central place. It is central place and component in our app can acess it.
2) what is slice :- we can assume a slice is a small portion in a redux store. We create miltiple slices inside redux store. We make slices to store data separete. Suppose we want add products into cart then we create slice to keep that data.

# how redux works
1) when we click on button it 'dispatch' an action after it calls an 'function (reducer)' and this function modify the card. (This process used to add data in slice)
1) How how to read data from slice, for this we need to used 'selector'. (subscribing to the store)
Add Data==>
onClick -> dispatch action -> calling reducer function -> which update slice in redux store

Read Data==> Selector (subscribing store)

1) Install @redux/toolkit and react-redux
2) Build our store
3) Connect our store to our app
4) Slice (cartSlice)
5) dispatch (action)
6) Selector

(configureStore,createSlice,Provider,useSelector,useDispatch)
--- configureStore is used to build store
--- Inside this we make slice
--- Provider is used to Connect our store to our app
--- createSlice is used to create slice
--- useSelector
--- useDispatch

# episode 13 testing
Types of testing
1) Unit testing
2) Integration testing
3) end to end testing - e2e testing


# Setting up Testing in our app

- Install React Testing Library ==> npm i -D @testing-library/react
- Install Jest                  ==> npm i -D jest
- Install Babel Dependencies    ==> npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configure Babel
- Configure Parcel Config File to disable default Babel transpilation
- Jest - `npx jest --init`
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom

