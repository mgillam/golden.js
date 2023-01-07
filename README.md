# Golden.js

### Because *silence* is *golden*.

This library is a single import that monkeypatches as squelches several built-in functions in the browser that are used to prove script execution has been achieved when testing for cross-site scripting flaws.

## Usage
Import with a script tag for default behavior.

```html
<script src="golden.min.js"></script>
```

To override with custom options, add a `data-golden-options` attribute to the script tag. E.g.

```html
<script src="golden.min.js" data-golden-options="3"></script>
```

### Options values

Each option is enabled (supressing a behavior) if the value is included, disabled if the value is not. Options can be combined by supplying the sum of them. For example, if you wanted to allow `console` events, but suppress popups and `document.write`, you would combine use the sum of `2` + `4`, so your `data-golden-options` would be set to `"6"`.

| Value | Effect |
| --- | --- |
| 1 | Supress `console.log` and similar (`console.debug`, `console.warn`, etc.) |
| 2 | Supress popups (`alert`, `prompt`, `confirm`) |
| 4 | Supress `document.write`


## FAQ

#### Are you sure this is a good idea?
> I'm relatively sure it's not a good idea. You don't want cross-site scripting flaws in your application. They need to be fixed.

#### Will this really prevent people from finding cross-site scriptng flaws?
> Not if they're reasonably proficient. It may trip up someone who is not well-versed in web stuff, or is inattentive. But you don't want these flaws anyway. Fix them.

#### Why did you make this?
> This was put together just for fun, for humor, and for entertainment purposes.