# Object Getter Experiment, 11/10/21
Recently I was thinking about how you might write a front end application that understood and could discern between different kinds of back end responses (or if such a design pattern existed.) My friend and I spoke for some time but didn't form any conclusions about how this might work. Initially we thought about modules that could identify certain responses from the back end and return known objects: An `Error` for example. This object would have known methods like `getMessage`, perhaps a bit like a model in MVC.

The purpose of this would be to ensure consistency across the application. If you knew what a `Person` object was, you'd always know that it had `getName` and `getAge` methods. Of course this assumes that the back end returns consistent responses.

Having thought about this more it makes sense that you would use a state library on the front end like Vuex and merely use a "getter" tp return the object or list of objects. As you can see we're able to access the Person class' methods in the People component. I'm not sure whether I prefer this syntax yet but I suppose the original state object is always there if needed.

Expect a blog post soon.