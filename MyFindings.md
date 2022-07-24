# Which State Manager Is Right For You?
- TLDR: 
  - Context: Good for small apps that don't require too much data rerendering. Best if the data remains static & the goal is transporting it.
    - MovieList, TodoList, Reciepe App
  - Redux: Best for mid-to-large sized apps that have a decent amount of moving parts.
    - Tic tac toe, Games clones, social media clones
---
  Ask yourself: "How much state will I be needing & will it need constant rerendering?"
  - At this point, 5-7+ values make sense to me to use Redux.


---

|                | **Context**                                                                         | **Redux**                                                                                                                                                    |
|----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Acquiring:** | Built-in to React                                                                   | Additional installation Required, driving up the final bundle size                                                                                           |
| **Set Up:**    | Requires minimal Setup                                                              | Requires extensive setup and boilerplate to integrate into React (Although, there are different flavors of Redux that simplify the process! eg. Easy Peasy)  |
| **Best Fit:**  | Specifically designed for static data, that is not often refreshed or updated       | Works like a charm with both static and dynamic data                                                                                                         |
| **Expansion:** | Adding new contexts requires creation from scratch                                  | Easily extendible due to the ease of adding new data/actions after the initial setup                                                                         |
| **Debugging:** | Debugging can be hard in highly nested React Component Structure even with Dev Tool | Redux offers incredibly powerful Redux Dev Tools to ease debugging                                                                                           |
| **Location:**  | UI logic and State Management Logic are in the same component                       | Better code organization with separate UI logic and State Management Logic                                                                                   |


<div align='center'>

[Resource](https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p)
 | 
[Resource](https://youtu.be/5gUHfe-ETuo)

</div>