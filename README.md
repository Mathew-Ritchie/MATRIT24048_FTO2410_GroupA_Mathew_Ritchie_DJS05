# MATRIT24048_FTO2410_GroupA_Mathew_Ritchie_DJS05

DJS05 Redux inspired store.

# Instructions:

Counter when loaded will have an initial state value of 0.

The state can be called to the console by using dispatch(getState()) in the scripts.js file.

calling dispatch(add()), will increase the state by a value of 1, and dispatch(subtract()); will decrease the state by one.

calling dispatch(reset()); will reset the state back to a value of 0.

# Approach

The appraoch I used what very similar to the approach in Schalks video, it is Redux inspired.

It includes having an folder with an action.js, reducers.js, and store.js file.

The Store.js is where the global state is stored.

The reducer.js contains the logic for the add(), subtract(), and reset() functions.

The actions.js returns actions objects for add, subtract, and reset. These are used in the reducers Switch/case statement.

# Challenges

Still trying to completely rap my head around the concept of the store. But I believe it is a way to keep all data regarding the state in one central space, and having functions in other components/files able to subscribe to that store, know when there is a change in the stats, and use the state.
