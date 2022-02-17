# VTEX "just a Div"

## Description

When live gives you plenty of lemons, you better put them in a box to keep them organized.
The same can happen in development. Sometimes you just need a plain-stupid-simple wrapper div to get things going. 
That's why I've built the most useless but yet handy app in VTEX.


<img  alt="gimme-a-div@2x" src="https://user-images.githubusercontent.com/93577143/154315105-bbbab1c8-d0ad-4013-89e1-a75c60250655.png">


## Table of Contents

- [Usage](#usage)
- [CSS Handles](#css-handles)


## Usage
First, install the app via VTEX Toolbelt. 

```bash
    vtex install vtex.just-a-div@0.x
```

To use this app, you need to import in your dependencies on `manifest.json`.

```json
  "dependencies": {
    "vtex.just-a-div": "0.x"
  }
```

### How it works?
Whenever you need to wrap something in place without adding functionality on top, all you need is a plain div. Just add a new just-a-div block to your config and add the content you want to wrap as children.


### how it's used
The app only supports the very basics: 
* composition of children
* Block classes

```json
"just-a-div#aroundthelinks": {
  "props": {
    "blockClass": "linkWrapper"
  },
  "children":[
	"content#1",
	"content#2",
	"...."
	]	
}
```


## CSS handles
The following CSS handles can be used for styling:

```js
  'justDiv'
```




