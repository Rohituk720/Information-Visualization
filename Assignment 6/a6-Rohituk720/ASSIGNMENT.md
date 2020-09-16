# INF 554 Assignment 6

## Description

- From [https://data.worldbank.org](http://data.worldbank.org), download *Rural population (% of total population)* data for 10 countries and a 2 years of your choice.
- Create an HTML document named `a6.html`.
- Describe the data and cite your source in `a6.html`.
- Load the data in `JSON` format. You can use one or multiple data files for the visualizations.
- Create a slopegraph in SVG (Inkscape recommended) to show the data and add it to the page as an SVG image.
- Using D3 data joins, for each year, create a bar graph, a lollipop chart and a bubble chart. The charts should include axes, axes labels, tick marks, and tick mark labels created using D3 axes and scales, use the margin conventions and include titles and legends as needed.
- Demonstrate good development practices in README.md (explain set-up, deployment, AND use incremental commits).
- Publish on your work on USC SCF account ([see instructions below](#usc-scf-publishing-instructions)) and **add a link to the published `a6.html` in `README.md`**. All files, including `a6.html` should be stored in the repository.

## Rubric

__15% of the grade is for artifacts generated and committed in class as requested by the instructor.__

|                | Slopegraph SVG  | Charts                                 | Development & Published Page |
| -------------  | --------------- | -------------------------------------- | ---------------------------- |
| Sophisticated  | Is well designed and formatted, clearly presenting the visual information  (4-5 pts) | Charts are well formatted, use margin conventions, D3 data join, and D3 scales, data is well formatted, imported as JSON. Scatterplots and bar charts have axes, axes labels, tick marks, and tick mark labels and are well formatted. (4-5 pts per chart) | Use of GIT is demonstrated. Set-up and deployment are documented. Page is well formatted with a proper layout and explanatory text (4-5 pts) |
| Competent     | Is not properly designed and formatted, not clearly presenting the visual information (2-3 pts) | Charts not well formatted, improper use margin conventions, D3 data join, and/or D3 scales, data is not well formatted or not imported as JSON. Scatterplots and bar charts axes, axes labels, tick marks, and tick mark labels improperly used or not well formatted (2-3 pts per chart) | Use of GIT is not well demonstrated. Set-up and deployment are not well documented. Page is not well formatted and or not using proper layout and or no explanatory text is provided. (2-3 pts) |
| Needs work    | Is not designed and formatted, does not clearly presenting the visual information (0-1 pts) | Charts not formatted, not using margin conventions, D3 data join, and/or D3 scales, data is is not well formatted or not imported as JSON. Scatterplots and bar charts axes, axes labels, tick marks, and tick mark labels are missing or are not well formatted. (0-1 pts per chart) | Use of GIT is not demonstrated. Set-up and deployment are not documented. Page is not formatted, not using proper layout, no explanatory text is provided. (0-1 pts) |

### USC SCF Publishing Instructions

All USC students are eligible for UNIX Computing Accounts for Students (SCF) accounts. Students that need to access USC UNIX resources may do so using their Student Computing Facility (SCF) accounts. Located at `aludra.usc.edu` and `nunki.usc.edu`, these two servers act as time-sharing hosts for all student accounts. See the [SCF](https://itservices.usc.edu/scf/) page for more details.

You can publish your work in one of several ways:

- Remote login using [SSH](https://itservices.usc.edu/ssh) from a Unix-compatible terminal (On Windows, use [Putty](http://www.putty.org), also available on the [ITS software pages](https://itservices.usc.edu/software/)).
- Connect with [SFTP](https://itservices.usc.edu/sftp) (secure FTP) using a client such as [Filezilla](https://filezilla-project.org). ***Recommended for beginners***
- Use [MobaXterm](http://mobaxterm.mobatek.net/) (support both SSH and SFTP). 

There are three main steps no matter which software you use:

1. Make `public_html` directory (folder) if it does NOT exist
2. Copy your files into `public_html`.
3. Make `public_html` folder and files publicly readable. Check the page is accessible on your browser.

#### SSH Example

```{bash}
$ ssh <username>@aludra.usc.edu  # <username> is your USC username as it appears in your USC email address
$ mkdir public_html  # automatically mapped by Apache to http://www-scf.usc.edu/~username
# you will get an error in previous step if that directory already exists
$ cd public_html  # navigate inside public_html directory
$ cat > a6.html  # paste what follows into a6.html; when done pasting, type Ctrl+D to send EOF to close the file
<html>
   <head>
       <title>HTML Page Template</title>
   </head>
   <body>
       Hello!
   </body>
</html>
$ cat > <filename>  # repeat previous step for other files
$ cd ..  # navigate outside public_html directory
$ chmod -R 755 public_html  # make readable by www user for Apache to access 
```

The page will be visible at: `http://www-scf.usc.edu/~<username>/a6.html`

##### References

- [USC ITS UNIX Computing Accounts for Students (SCF)](https://itservices.usc.edu/scf/)
- [USC ITP Video: Connecting to the USC aludra server with an FTP program](https://www.youtube.com/watch?v=yfDDw4v0bzY)
- [Putty](http://www.putty.org)
- [Filezilla](https://filezilla-project.org)

## Homework Guidelines

- Homework repository must be updated before the deadline
- Commits after the deadline will not be considered unless requested
- Late policy: 10% of total available points per each late day; duration less than 24 hours counts as one whole day
- Homework is expected to work in CHROME
