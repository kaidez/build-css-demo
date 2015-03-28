BEFORE YOU START THE SCREENCAST!!!!!! 

1. run "gcheckall" on the "tutorial-branch" if you need to

2. turn down the volume

3. make sure "tutorial-branch" was deleted

4. run "gulp jade" to reset "build/index.html"

5. delete "css-build/styles.css" & "build/css/styles.min.css" 

6. make sure "css-build" and "build/css" folders are expanded




WHAT I SAY
==========
Keep seeing complaints that imply that bootstrap is too bulky to use.  We have tools to deal with this.

This is NOT a tutorial, just a demo. Push you to read up on this 	

Link to the code on GitHub is in the blog/in the youtube link. tweet me questions or leave a comment on the blog post.



DELIVERING THE GOODS by Paul Irish...talk about a lot on 2014 conference circuit.

* discussed tools and techniques we can use to speed up page loading.

* Gathered data to using tools like Webpage Test to review latency issues and check the Speed Index. 

* talked about familiar stuff like miniyfing your code and async javascript loading & gzipping images.

* Where I first heard about "critical CSS".

I bookmarked it in my brain, read a few things about that along with some other techniques. But didn't really use it yet. 

THEN!!!!!!!

CSS PERFORMANCE TOOLING by Addy Osmani at CSSconf EU 2014

* A great talk where he demos how to measure performance with things like Web Page Test and the Chrome's Device Mode, what the tooling looks like and so on.

* mentioned critical path CSS.

* He fleshes out the tooling even more, how to use grunt & gulp, plugins like critical and penthouse and all the various tools and whatnot. And that's what really pushed me to understand all this stuff.

Great timing! I suddenly had a lot of projects where I could use this stuff! So I started playing with it.

REAL QUICK!!! What is Critical CSS?

if your page fold is say 400 px, the critical CSS is the styling code ABOVE that point. 

WALK THROUGH CSS, JADE...say that coffeescript & js won't be discussed.








walk through grunt file first, then gulp file.

* The catch with inline critical CSS is that it doesn't cache since it's in the HTML page.

* show col-md-4, then show that it's gone after outputting w/ outputCss

* talk about how the current CSS build trends/tools are definitely geared towards single-page apps (SPAS). It's not easy with CMSs like WordPress...I think this will change.