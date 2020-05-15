```shell script
npm ci
npm start
```

Expected:

> { _id: 5..., what: 0 }

```shell script
npm test
```

Output:

> Invalid type used for map!, got: "[object Object]" (UserEvent.what)

Expected similar output to `npm start`.
