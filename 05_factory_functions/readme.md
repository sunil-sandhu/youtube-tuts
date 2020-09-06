Factory functions are similar to constructor functions, but instead do not require the use of the 'this' keyword or the use of the 'new' keyword. Factory functions can contain inner values, methods and so on, just like regular functions. The difference is that we always return an object, which will contain any values, methods etc that we would like to expose (make available for use).

Let's continue using the football analogy we had used in the previous video. I'd also recommend taking a look at this video if you'd like to get some more insight into how constructor functions work.

In our previous video, we set up our Team and our Player function like so. You can see that they take parameters and we assign those parameters to values on the respective Player and Team contexts (the this keyword). We then create new Teams and Players by creating variables and assigning them to new Team and New Player.

And now here are our player and team factory functions. You can see that we have named them playerFactory and teamFactory. This isn't a requirement but rather a convention when creating factory functions. 

```
function playerFactory(name) {
  function getName() {
    return name;
  }
  return { getName };
}
```

We see some key differences here between our playerFactory and our Player constructor. While both accept a `name` parameter, the Player constructor assigns it to this.name, whereas we haven't created any internal value that holds the `name` parameter. Instead, we create an inner `getName()` function that returns the `name` parameter. The beauty of this approach is that it removes the ability to be able to update our player's name. So if we created something such as `const sunil = playerFactory('Sunil')`. The only way we could access `sunil.name` is through the `sunil.getName()` function. Therefore, we have the ability to *get* the player name but no ability to *set* the player name (ie, we cannot simply write something such as `sunil.name = "Tony"`). Of course, in reality we could actually write that but it would simply create a new value on sunil. So if we wrote `sunil.name` it would return `"Tony"`, but if we wrote `sunil.getName()`, it would return `"Sunil"`. Now we could prevent this from happening by wrapping the returning object with `Object.freeze`, like so: 

```
function playerFactory(name) {
  function getName() {
    return name;
  }
  return Object.freeze({ getName });
}
```
This would create an immutable object, which basically means that it prevent us from being able to make any changes. As an aside, if you are not writing JavaScript in 'strict' mode, you can try to make changes, such as writing `sunil.name = 'Tony'` and it may look like the mutation occurred. However, it you were to then check for `sunil.name`, it would return undefined. It basically returns what is known as a silent error. However, if you were using strict mode it would usually return a `TypeError`.

So that's how you can go about creating factory functions. They provide a design pattern that helps to remove some of the noise caused by use of the `new` and `this` keywords, and help to promote private values through the techniques we covered, along with the use of closures. I wanted to cover that topic in this video but I think there are some truly powerful things that we can do with closures and they deserve their own video. So be sure to subscribe to the channel as you won't want to miss the next episode!