# Self-Assessment: ShoppingCart.jsx

## 1. Functionality
- **Does the component meet the requirements?**
  - [ ] Does it handle all the specified features (e.g., adding, removing, or updating books)?
        I used useState to store the input values and the list of items.  
        All inputs are controlled, with value and onChange.  
        I used .map() to show all items on the page.  
        I added add item and delete item functions.  
        I made a separate Item.jsx component to display each cart item.   

  - [ ] Are edge cases handled (e.g., empty inputs, duplicate entries)?
        I used required so users cannot leave important fields empty.  
        Duplicate items are allowed, which is fine for the given task.

  - [ ] Are there any bugs or unexpected behaviors?
        At the beginning there was an error of adding and deleting items. And fixed it accordingly.  
        
- **How well does the component integrate with other parts of the application?**
  - [ ] Are props and state managed appropriately?
        Props and state are handled well. The Item component gets the item and delete function without any problems.  

## 2. Code Quality
- **Readability**
  - [ ] Is the code easy to understand for other developers?
        My code is easy to read because the names are clear.

  - [ ] Are variable and function names descriptive and meaningful?
        The variable names are clear and meaningful.  

- **Reusability**
  - [ ] Can the component or parts of it be reused in other parts of the application?
        The Item component can be reused anywhere else in the app if needed.  
        The form structure can also be reused for other components.    

- **Comments and Documentation**
  - [ ] Are there comments explaining complex logic?
        The logic is simple and easy to follow, so many comments were not necessary.  

  - [ ] Is there documentation for how to use the component?  
        The code structure is clear enough without extra documentation.  

## 3. Performance
- **Efficiency**
  - [ ] Are there any unnecessary re-renders or performance bottlenecks?  
        The component is small and efficient. No unnecessary re-renders.
        It handles a normal amount of items well.
  - [ ] Is the component optimized for large datasets (if applicable)?

- **State Management**
  - [ ] Is state managed efficiently (e.g., minimal state, derived state)?
  - [ ] Are hooks (e.g., `useState`, ) used correctly?
        State is managed correctly using multiple useState hooks.    
        The items list uses a single state array, which is the correct pattern.  
        Hooks are used properly.  

## 4. Overall Assessment
- **Strengths**
  - List the strengths of the component.All assignment requirements are completed.
    Clean and easy-to-read the code.  
    Correct use of useState and controlled inputs.  
    Item component is extracted properly.  
    Adding and deleting items works without issues.  
  
- **Areas for Improvement**
  - List areas where the component could be improved.
    Could add validation for numbers (e.g., subtotal, tax).  
    Could prevent duplicate items.  
    Could add more styling for a better look.  

- **Action Plan**
  - Outline specific steps to address the areas for improvement.
    Add basic number validation.  
    Improve the CSS for a nicer interface.  
    Add checks to avoid adding the same item twice.  

## 5. Additional Notes
- Add any other relevant observations or feedback about the component.
  This task helped me learn how to manage multiple input fields in React, how to use controlled components.
  And also practiced Git branching.