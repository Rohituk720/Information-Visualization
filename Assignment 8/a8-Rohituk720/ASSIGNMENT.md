# INF 554 Assignment 8

## Description

Implement several D3 layouts.

__USE STABLE D3 VERSION FROM NODE__

## Rubric

__15% of the grade is for artifacts generated and committed in class as requested by the instructor.__

### Development and published site (5 pts)

Create index.html. Present your the data and cite your source in the page. You are encouraged to break-down the charts code in separate files(.css and .js). Use GIT and node. Use a consistent color scheme for the graphs and the page. Publish the page under `a8` at:

```url
http://pdms.usc.edu/~<username>/a8/
```

Add a link to the **published URL** in `README.md`.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Use of GIT and node is demonstrated. Page is well formatted with a proper layout and explanatory text. Use of colors is appropriate. Page is deployed and working well.  |
| Competent     | 2-3    | Use of GIT and node are not well demonstrated. Page is not well formatted with improper layout and unclear explanatory text. Use of colors is not quite appropriate. Page is deployed but is not working well. |
| Needs work    | 0-1    | Use of GIT and node are not demonstrated. Page is not well formatted and lacks explanatory text. Use of colors is not appropriate. Page is not deployed or is not working. |

### Bubble chart using circle packing (5 pts)

Based on the data and design from assignment 2, create a bubble chart with D3 using the circle packing layout.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Data is well formatted imported as JSON or a delimited format. Bubble chart is well formatted.  Uses D3 data join and circle packing layout. |
| Competent     | 2-3    | Data is not well formatted imported as JSON or a delimited format. Bubble chart is not well formatted. Does not use well D3 data join and circle packing layout. |
| Needs work    | 0-1    | Data is not formatted imported as JSON or a delimited format. Bubble chart is not formatted. Does not use D3 data join and circle packing layout. |

### Line chart (5 pts)

Use 10 countries and the data from assignment 1 to create a line chart similar to what Google charts can generate, complete with a legend.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Data is well formatted imported as JSON or a delimited format. Line chart is well formatted.  Uses margin conventions, D3 data join and line generator. Line selection mechanism works well with pop-out effect. Mechanism to show/hide data points works well. Chart is responsive. |
| Competent     | 2-3    | Data is not well formatted imported as JSON or a delimited format. Line chart is not well formatted. Does not use well margin conventions, D3 data join and line generator. Line selection mechanism does not work well with pop-out effect. Mechanism to show/hide data points does not work well. Chart is not quite responsive. |
| Needs work    | 0-1    | Data is not formatted imported as JSON or a delimited format. Line chart is not formatted. Does not use margin conventions, D3 data join and line generator. Line selection mechanism does not work with pop-out effect. Mechanism to show/hide data points does not work. Chart is not responsive. |

### Pie chart using pie layout (5 pts)

Using 5 countries and the data of your choice, create a pie chart. Using Bootstrap, implement a card to show generic data information and information on how to interact with the chart when the mouse is not hovering on the pie chart. When the mouse is hovering a sector of the pie chart, show information that corresponds to the data for that sector. Add visual feedback on mouse hover.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Data is well formatted imported as JSON or a delimited format. Pie chart is well formatted.  Uses D3 data join and pie layout. Mouse hover on the pie to update the card works well. Visual feedback on mouse hover works well. |
| Competent     | 2-3    | Data is not well formatted imported as JSON or a delimited format. Pie chart is not well formatted.  Does not use well D3 data join and pie layout. Mouse hover on the pie to update the card does not work well. Visual feedback on mouse hover works well. |
| Needs work    | 0-1    | Data is not formatted imported as JSON or a delimited format. Pie chart is not formatted.  Does not use D3 data join and pie layout. Mouse hover on the pie to update the card does not work. Visual feedback on mouse hover does not work. |

## Homework Guidelines

- Homework repository must be updated before the deadline
- Commits after the deadline will not be considered unless requested
- Late policy: 10% of total available points per each late day; duration less than 24 hours counts as one whole day
- Homework is expected to work in CHROME
