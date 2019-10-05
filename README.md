# Alex Fukui Portfolio

## To Do

### High

- Fix the new media query bugs.
- Change margin for 'About' header.
- Change background for top section to fit larger formats.

### Low

- Add favicon.
- Refactor scss to new modular version. [link](http://sass.logdown.com/posts/7858341-the-module-system-is-launched)
- Implement a build version (via gulp?).

## Setup

After installing dependencies, set `paths` to run to proper source and output for your app*. Use `start` to run a live server via browserSync and a watcher to compile sass directory via `browserSync` and `gulp-sass`.**

*In the future, this may have to be set to interpret and map around a more modular css system, especially if I convert this portfolio to a React site.

**This gulp setup is based on this lovely walkthrough by Jatin Varlyani [here](https://levelup.gitconnected.com/how-to-setup-your-workflow-using-gulp-v4-0-0-5450e3d7c512)

## Project Log

- 2019-08-30 01:03:29: Sketching out the framework of the site.

- 2019-08-30 13:13:24: I am drafting a prefix system for ITCSS that will hopefully help me keep the layers organized more efficiently.

- 2019-08-31 12:24:50: Ran into issues with internet connection, prevented getting much work done until later. Got a power wire, works like crazy!!

- 2019-09-04 05:37:22: Added a bunch of nice CSS code, refactored into SCSS, established and received feedback on layouts, wireframes and color themes, established font sizes, created some mixins for gradient shift effect on images utilizing transparencies. Chose fonts and load with site via font-face.

- 2019-09-04 23:29:21: Mobile style is nearly there, I created and implemented a few more background images from my trip to Muir Woods and settled on a template for the Samples section. Just need to finish styling the last few sections and the rest will be fast and easy. Breaking to continue studying React.

-2019-09-06 10:41:16: Mobile and Tablet are palatable, last stretch is the desktop.

- 2019-09-06 15:31:10: Setting up new grids as needed. The off-register background effect has broken on the bottom of the hero image on tablet+ size, need to figure out why.

- 2019-09-09 23:21:29: Think it's good enough! Going to try submitting for review.

- 2019-09-18 15:59:12: Required fixes from submission applied, some bugs left to work out.

- 2019-10-05 12:21:37: Gulp file set to watch scss and run server for page; moved into /src directory. Beginning to reorganize sass files for legibility/ease of use.

- 2019-10-05 14:06:50: Debugged source map.

- 2019-10-05 14:25:13: Removed redundant margins and refined/refactored `offset-bg` mixin and includes to better reflect suggested criteria (top and bottom vs. margins).
