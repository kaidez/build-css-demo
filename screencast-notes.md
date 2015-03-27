BEFORE YOU START THE SCREENCAST!!!!!! 

1. run "gcheckall" on the "tutorial-branch" if you need to

2. turn down the volume

3. make sure "tutorial-branch" was deleted

4. run "gulp jade" to reset "build/index.html"

5. delete "css-build/styles.css" & "build/css/styles.min.css" 

6. make sure "css-build" and "build/css" folders are expanded



DELIVERING THE GOODS:

* reading data to understand slow page-loads & what we can do to speed them up.

* tracking latency with tools like Webpage Test 

* Expanded on Webpage Test's Speed Index 

* talked about familiar stuff like async javascript loading & gzipping images.


* Where I first heard about "critical CSS"






* The catch with inline critical CSS is that it doesn't cache since it's in the HTML page.

* show col-md-4, then show that it's gone after outputting w/ outputCss

* talk about how the current CSS build trends/tools are definitely geared towards single-page apps (SPAS). It's not easy with CMSs like WordPress...I think this will change.