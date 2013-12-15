{{{
    "title"    : "About this site",
    "date"     : "12-15-13"
}}}

When I was learning about all this web stuff, it was really hard to find out about all the best tools and techniques. Most websites never detail how that site was built and how it runs, and that's really important information to someone trying to figure all this stuff out.

This post details every useful detail about this website that I can think of – something that 2011 me would have found really useful.

Firstly, if you are new to this stuff, I really recommend learning the basics of the command line (terminal). Although a little daunting at first, it really is worth it.

## Development
I wrote every line of code using [Sublime Text](http://www.sublimetext.com/). I tried almost all the code editors on the mac and it's my favourite by far. I like to develop with sublime open on the left of my screen and chrome (or safari) on the right hand side.

### Back-end
The blog is powered by [poet.js](http://jsantell.github.io/poet/), a blog generator that runs on [expressjs](http://expressjs.com/), a super-awesome node framework. There are plenty of other blog back-ends out there, but I wanted to learn node.

### Front-end
Using node means I can use the awesome [jade templating engine](http://jade-lang.com/), which makes writing HTML super quick: it's indentation-based (so it's impossible not miss a closing html tag), and has all kinds of awesome functionality: template inheritance, mixins, functions, iteration...

Styles are written in [stylus](http://learnboost.github.io/stylus/), then compiled into CSS. Stylus is very similar to jade in that it's indentation based and super powerful – it also doesn't need you to write loads of brackets, colons and semi-colons. The more CSS I write the stupider I think it is (try vertically centering something without flexbox), however stylus helps to make it less stupid. I have a set of [stylus utilities](https://github.com/iest/stylus-start-utils/blob/master/util.styl) that I wrote that help me build stuff quickly too (which I'll be writing about soon).

[Grunt](http://gruntjs.com/) is an indispensable tool which I use *all* the time. If you don't know about grunt, it's a simple javascript-powered task runner. On this site I use it to [compile stylus](https://github.com/gruntjs/grunt-contrib-stylus) to CSS and to [watch for updated files](https://github.com/gruntjs/grunt-contrib-watch) to live-reload the browser. However it can also be used for all kinds of stuff: from concatenating files together and minifying them, to optimising images, and running bash scripts. It should be part of every front-ender's toolbox.

I have a belief that the only images on the web should be photographs (as a computer can't generate them), so I'm using a sub-set of the excellent [Font Awesome](http://fontawesome.io/) for my icons. The iW logo is an svg that I put together in [Sketch](http://www.bohemiancoding.com/sketch/).

The fonts are served by [Typekit](https://typekit.com/). Headings are in Telefon web (a curvy Futura alternative), and body text is PT Sans (a familiar, humanist sans-serif).

This page weighs in at around 255KB with an empty cache, 204KB of that being the external webfonts (so that's ~51KB of CSS, JS and HTML). I could cut the CSS down a bit (as there's a few useless classes), but I'm happy with that overall.

## Hosting
The domain is registered at [Hover](https://www.hover.com/), the best of the domain registars (as they don't try to sell you crap you don't need).

I'm hosting the site on a [Linode](http://linode.com) box. It was a pretty steep learning curve to figure out how to properly set up a web server, but it's totally worth it – I now know what to do if problems arise. I recently rebuilt the box and I'm now using [nginx](http://nginx.com) for the serving-side (as it's fairly straight-forward to setup, and super fast).

## Open source
[This whole site is up on github](https://github.com/iest/iestynwilliams.net), so please check it out if you want to see how this site is put together.

Questions? Comments? Criticism? **Give me a shout [on twitter](https://twitter.com/_iest).**