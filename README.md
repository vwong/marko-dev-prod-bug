# Marko: Differences in dev/production mades

This repo aims to demonstrate a bug which results in differences in dev and
production modes.

Try running `npx marko-run dev`. You should see:
```
Page
1
2
3
...
```

Where the first "page" is server rendered and is available immediately,
subsequent pages are lazily loaded as users scroll down.

Then try running `npm run preview`. You will see:
```
Page
2
3
...
```

That is, the first server-rendered page is clobbered. This can be verified by
turning Javascript off in the browser, and you'll see that the first page is
present in the HTML.
