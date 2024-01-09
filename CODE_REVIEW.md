## CODE REVIEW

### Task 1:

1. Problems and code smells
    -  Reading list componet can be routed to a seperate page instead of a material drawer (Reduces bundle size by eliminating the import of MatSidenavModule from @angular/material library). 
    - Add to reading list funtionality's states should be moved from reading-list to book. This will improve the grouping of funtionalities based on the UI.

2. Improvements
    - Each book card in the book listing page can be replaced by a atom component (Increase reusability of component and increase coulpling within the book card component) 
    - All state files can be organised and placed in seperate forlders.

3. Accessibility issues
    - Elements lagging in minimum color contrast ratio (Header color and Text color)
    - Search button does not have an alternate text field.

