# INF 554 Assignment 4

## Description

- From [https://data.worldbank.org](http://data.worldbank.org), download *Rural population (% of total population)* data for 20 countries and a year of your choice.
- __Install D3 using node__.
- Create `index.html` and load D3.
- Describe your data and cite the source in the page.
- Using an SVG tool (Inkscape recommended) design a minimalistic bar chart, a stripchart and a bubble chart using simple geometries (points and rectangles and lines).
- Add svg of your design to the repository and document in README.
- __Use D3 to load the data as `CSV`__ (you can use one or multiple CSV files to realize the table and charts requested).
- __Use D3 data join__ to create a table and the charts according to your design (for axes use append to add them to the svg):

1. HTML table
2. SVG bar chart
3. SVG stripchart
4. SVG bubble chart

- Demonstrate good development practices: in `README.md` explain set-up and deployment, and use incremental commits (commit often after implementing and testing a step) in Git.

## Rubric

__15% of the grade is for artifacts generated and committed in class as requested by the instructor.__

|               | Table  | Graphs                                        | Development, page & chart design |
| ------------- | ------ | --------------------------------------------- | -------------------------------- |
| Sophisticated | Table is well formatted and well presented, supports well visual comparison, uses D3 data join, data is well formatted, imported as CSV (4-5 pts) | Chart is well formatted, uses D3 data join, data is well formatted, imported as CSV (4-5 pts *per chart*) | (Minimalist) charts are well designed and realized according to the design document. D3 is installed with node. Use of GIT, development set-up is well demonstrated and documented, page is well formatted with a proper layout and explanatory text (4-5 pts) |
| Competent     | Table not well formatted, not well presented, support for visual comparison can be improved, improper use of D3 data join, data is not well formatted, not imported in CSV (2-3 pts) | Chart not well formatted, improper use of D3 data join, data not well formatted, not imported as CSV (2-3 pts *per chart*) | (Minimalist) charts are not well designed and/or not realized according to the design document. D3 is not properly installed with node. Use of GIT, development set-up is not well demonstrated, documented, page is not well formatted with proper layout or explanatory text (2-3 pts) |
| Needs work    | Table is not formatted or not presented, do not support visual comparison, does not use D3 data join, data is not formatted, not imported as CSV (0-1 pts) | Chart is not formatted, does not use D3 data join, data is not formatted, not imported as CSV (0-1 pts *per chart*) | (Minimalist) charts are not designed and/or not realized according to the design document. D3 is not installed with node. Use of GIT, development set-up is not demonstrated or documented, page is not formatted with proper layout or explanatory text (0-1 pts) |

## Homework Guidelines

- Homework repository must be updated before the deadline
- Commits after the deadline will not be considered unless requested
- Late policy: 10% of total available points per each late day; duration less than 24 hours counts as one whole day
- Homework is expected to work in CHROME

## Important Note from Graders

__Ensure that you use the same case when referring to files than the actual filename__ as the homework may be assessed on Linux systems. For example, if an image tag refers to `myFile.png` but the actual filename is `myfile.png`, the image will not appear on the web page in Linux systems. We will deduct points if this happens. Use [Visual Studio Code HTML path completion feature](https://code.visualstudio.com/updates/v1_21#_html-path-completion) and/or double-check filenames to avoid this problem.
