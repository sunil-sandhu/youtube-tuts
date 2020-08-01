Have you ever wondered how JavaScript frameworks and libraries such as React, Angular, Vue and
Svelte have become so popular? It's because they're super useful when it comes to creating stateful
component-based applications. Even though these libraries and frameworks are super popular, new
technologies are constantly emerging. It seems like every developer wants their own piece of the
pie. We're no different! Actually, that's not true. But I did wonder what it would be like to create
my own 'React' or 'Vue' and how far I could get with in just a day.

So here is my attempt.

I initially had a Vue setup that I had adopted after watching a video by Evan You on Vue Mastery,
where he goes through creating a 'mini Vue'.

However, I really like React's JSX syntax and I therefore wanted to adopt this. I read a couple
tutorials for inspo and came across https://blog.r0b.io/post/using-jsx-without-react/ which really
helped.

There is a babel transform in there that is the one used by React to transform JSX into
createElement function calls. Although the setup we have uses our own version of createElement, I
would have preferred to have used a standard babel JSX transform. There is one that exists (or
likely quite a few) called babel-plugin-transform-jsx. I tried getting it to work but the
documentation for it is both lacking and what is out there is crap, so I ended up sacking it in and
continued using the react-jsx transform.
