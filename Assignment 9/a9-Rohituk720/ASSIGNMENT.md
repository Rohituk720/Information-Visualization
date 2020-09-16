# INF 554 Assignment 9

## Description

__IMPORTANT: USE STABLE JAVASCRIPT LIBREARIES FROM NODE, AS WELL AS STABLE D3 VERSION__

- Using D3 and the countries of assignment 1 (one year & 10 countries), build a proportional symbol map and a choropleth map.
- Using D3 and data of your choice from the [County of Los Angeles Open Data website](https://data.lacounty.gov/browse?limitTo=maps&utf8=%E2%9C%93), show the data on a map of the *Los Angeles County*. You can choose the map type. Example datasets are **...ADD 5-6 for points and areas as links**.

All maps should be imported as GeoJSON or TopoJSON. Data can be imported in GeoJSON, TopoJSON, JSON or a delimiter-separated format (e.g. csv, tsv). The page should be properly formatted and the maps should be documented, including labels, legend, and title as appropriate. Use a __single page for all the maps__. It is recommended to split the JS code for each chart in separate .js files. All JS libs should be used through node and D3 must be the must recent stable version.

## Rubric

__15% of the grade is for artifacts generated and committed in class as requested by the instructor.__

### Development and published site (5 pts)

Demonstrate good development practices:

- Document set-up & deployment in [README.md](README.md)
- Use incremental commits that are meaningful e.g. each commit adds one feature/component/bugfix.
- Test that your code works before you commit.
- Do not commit files that are not related to/needed for the assignment.
- Using npm is a good development practice and is strongly encouraged, but not required.
- Using Bootstrap and Angular is also a good development practice and is strongly encouraged, but not required.
- All files needed to deploy the site should be stored in the repository. However, installable node packages should **not** be stored in the repository.

Publish your work on your USC SCF account at:

```url
http://pdms.usc.edu/~<username>/a9/
```

Add a link to the **published URL** in [README.md](README.md). Describe the data and cite your sources in the webpage.

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Use of GIT is demonstrated; **Using node for all JS libraries.** Set-up and deployment are documented; Page is well formatted with a proper layout and explanatory text. |
| Competent     | 2-3    | Use of GIT is not well demonstrated; Set-up and deployment are not well documented; Page is not well formatted and or not using proper layout and or no explanatory text is provided. |
| Needs work    | 0-1    | Use of GIT is not demonstrated; Set-up and deployment are not documented; Page is not formatted, not using proper layout, no explanatory text is provided. |

### Proportional Symbol Map (5 pts)

| Quality       | Points | Description |
| ------------- | ------ | ----------- |
| Sophisticated | 4-5    | Map is well formatted, using appropriate projection **and colors**, uses D3 data join; Data is well formatted, imported using an appropriate format, labels, title; Legend are well formatted, using scales appropriately and well documented. |
| Competent     | 2-3    | Map is not well formatted, projection not appropriate, D3 data join not used well; Data is not well formatted, or not imported using an appropriate format, labels, title; Legend are not well formatted, use of scales inappropriate, not appropriate and not well documented. |
| Needs work    | 0-1    | Map is not formatted, projection inappropriate, D3 data join not used; Data is not formatted, not imported using an appropriate format, labels, title; Legend are not formatted, use of scales is not appropriate and not documented. |

### Choropleth Map (5 pts)

Same rubric as the Proportional Symbol Map.

### Los Angeles County Map (5 pts)

Same rubric as the Proportional Symbol Map.

## Homework Guidelines

- Homework repository must be updated before the deadline
- Commits after the deadline will not be considered unless requested
- Late policy: 10% of total available points per each late day; duration less than 24 hours counts as one whole day
- Homework is expected to work in CHROME
