# INF 554 Assignment 7

## Description

- Use data from A1 limited to 10 countries and 1 year.
- Describe the data and cite your source in page.
- Load the data in JSON format and implement a D3 bar chart complete with axes, axes labels, tick marks, tick mark labels and title.
- Use margin conventions and D3 data join, scales and axes to create the bar chart.
- Use separate HTML, CSS and JS files.
- Implement buttons in HTML and style to let the user know what is selected:
 1. Reset
 2. Order: "Alphabetic by name", "Ascending by value" and "Descending by value"
 3. Filter: "All 10", "Top 5" and "Bottom 5"
- Note that filter and order are independent and reset is the starting state for all 10 countries sorted alphabetically. 
- With D3 implement transitions based on the buttons the user selects; use smooth transitions when object constancy is needed to help the user follow the data.
- Use incremental commits that are consistent and tested.
- Publish in a7 folder on server
- Add a link to the published file in `README.md`. All files should be stored in the repository.

__MUST USE STABLE D3 VERSION FROM NODE__

## Rubric

__15% of the grade is for artifacts generated and committed in class as requested by the instructor.__

### Bar chart (5 pts)

|               | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Chart well formatted, data is well formatted, imported as JSON, using margin conventions, uses D3 data join, axes, axes labels, tick marks, tick mark labels and title are well formatted, using scales appropriately. |
| Competent     | 2-3    | Chart is not well formatted, data is not well formatted or JSON improperly used, improper use of margin conventions, improper uses of D3 data join, axes, axes labels, tick marks, tick mark labels and title are not well formatted, not using scales appropriately.|
| Needs work    | 0-1    | Chart is not formatted, data is not formatted or JSON is not used, not using margin conventions, not using of D3 data join, axes, axes labels, tick marks, tick mark labels and title are not included, not using scales. |

### Smooth transitions (5 pts)

|               | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Smooth transitions based on user input reorder the bars and update the axes, axes labels, tick marks, tick mark labels and title are working well between in any two combinations. Allows to show: all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. |
| Competent     | 2-3    | Smooth transitions based on user input to reorder the bars not working well. Updates to the axes, axes labels, tick marks, tick mark labels and title are not working well between in any two combinations. Does not allow to show well: all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. |
| Needs work    | 0-1    | Smooth transitions based on user input to reorder the bars not working. Updates to the axes, axes labels, tick marks, tick mark labels and title are not working between in any two combinations. Does not allow to show: all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. |

### Development & published page (5 pts)

|               | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | GIT repository is well set-up with node and includes all needed files. Using js, css and html files. Using node  libraries. Deployment is documented (includes link to published page in README!). Page is well formatted. Page describes the data and cite data source. Page is deployed and works well. |
| Competent     | 2-3    | GIT repository is not well set-up with node and includes all needed files. Not using well js, css and html files. Not using well node libraries. Deployment is not well documented (includes link to published page in README!). Page is not well formatted. Page does not describe the data or cite data source well. Page is not well deployed and does not work well. |
| Needs work    | 0-1    | GIT repository is not set-up with node and does not include all needed files. Not using js, css and html files. Not using node libraries. Deployment is not documented (does not includes link to published page in README!). Page is not formatted. Page does not describe the data and cite data source. Page is not deployed and does not work well. |

## Homework Guidelines

- Homework repository must be updated before the deadline
- Commits after the deadline will not be considered unless requested
- Late policy: 10% of total available points per each late day; duration less than 24 hours counts as one whole day
- Homework is expected to work in CHROME
