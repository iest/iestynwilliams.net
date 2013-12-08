{{{
    "title"    : "Chosem: an ember select component",
    "date"     : "8-4-2013"
}}}

- Basic intro to ember
  - Bindings (real objects to DOM elements)
  - Ember run loop (how bindings actually work)
- Breakdown of required behaviour of the select
- Different stages in jsbin embeds
  - Open/close & listing
  - Highlighting & selecting
  - Search filtering
  - Multiple selections
- Plug on github, source & contribute


I've been using Ember for roughly 6 months now, and have helped ship 3 products that are built with it. This article is aimed at anyone interested in ember – if you already know why Ember is a joy to use, [skip to the next section](#) to get into the good stuff.

## Ember?
Ember is a fairly hefty javascript framework (~238KB minified) that enables you to build ambitious web applications. Written by a core team with a lot of experience, and helped by many many contributors, it aims to solve a lot of the common problems in web application development. 

### Organisation & structure
Ember uses a strict naming convention to enforce the structure of the application logic, which is split into 3 main areas:
- Routes
The "locations" in your app. An example could be a blog post list page; another could be a blog post editing page. A route sits at the top of the hierarchy, and will typically populate a matching controller with some kind of data model.

- Controllers
Often where the majority of application logic sits. Controllers will manipulate models, but will also usually control a matching template

- Templates
Templates are at the bottom of the hierarchy, and are what the user can actually see. These will typically get manipulated by a parent controller.

You start by defining your routes. As an example, if you're building a blogging application, you could have a route to list all posts at `/posts`, and a route to edit a given post at `/posts/:post_id/edit`.
**JSBIN EXAMPLE HERE**
Lets say you wanted to call the first route "Posts", you would define that as a route inside Ember's router:

```
var App = Ember.Application.create();

App.Router.map({
	this.route('posts');
});
```

All we're doing here is defining the ember application on line 1, then mapping routes to the app's router.

Ember will auto-generate all thie



### Data binding
### Routing & templates