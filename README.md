### Pagination & Content Filter


- JavaScript
- JQuery
- HTML
- CSS
- Progressive Enhancement
- Unobtrusive JavaScript
- WebStorm
- GitHub/Version Control

![students](https://cloud.githubusercontent.com/assets/10632591/21155280/2b5b4e40-c137-11e6-90a1-c4cd36c4406f.png)

#### Progressive Enhancement
- Basic content is accessible to browsers that don't support JavaScript.
- Content and functionality related to JavaScript is added programmatically by JavaScript.
- Pagination buttons and search are not added directly to the index.html file.


#### Requirements:
- [x] If JavaScript is not enabled, the entire list of students will be displayed.

If JavaScript is enabled, the following behavior should happen:

- [x] When the page loads, your program should hide all but the first 10 students in the list.

- [x] Calculate the number of pages needed and add the appropriate number of pagination links dynamically to the bottom of the page. "1" should be active when page initially loads.

- [x] When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.

- [x] If user clicks on "2" in the pagination, it should be the "active" page. If the user clicks "3", then "3" should be active, etc.

- [x] The program should work for any number of students. 

- [ ] Include a search component so that a user could search for a particular student or students:
```
        <!-- student search HTML to add dynamically -->
        <div class="student-search">
          <input placeholder="Search for students...">
          <button>Search</button>
        </div>
        <!-- end search -->
```        
- [ ] When the "Search" button is clicked, the list of students is filtered to match the search. For example if the name Phillip is typed into the box list all students whose name or email includes Phillip.
- [ ] If no matches are found by the search, include a message in the HTML to tell the user there are no matches.






