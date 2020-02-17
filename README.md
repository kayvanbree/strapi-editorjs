# strapi-editorjs

This is a prototype to get strapi to replace the Wysiwyg editor with EditorJs. Not sure 
if I'm gonna use strapi, but I'm putting the code for this out in the world anyway. Have fun!

Note: Opening existing posts won't work, because EditorJs can't handle the markdown language
normally used by strapi.

## Installation

### Install dependencies

To install this, add the following dependencies to your strapi project:

```json
{
  "dependencies": {
    "@editorjs/checklist": "^1.1.0",
    "@editorjs/delimiter": "^1.1.0",
    "@editorjs/editorjs": "^2.16.1",
    "@editorjs/embed": "^2.2.1",
    "@editorjs/header": "^2.4.0",
    "@editorjs/link": "^2.1.3",
    "@editorjs/list": "^1.4.0",
    "@editorjs/marker": "^1.2.2",
    "@editorjs/paragraph": "^2.6.1",
    "@editorjs/quote": "^2.3.0",
    "@editorjs/table": "^1.2.1",
    "@natterstefan/react-editor-js": "^0.3.1"
  }
}
```

### Clone this repo

Clone this repo into your extensions folder.

### Build?

Then build it I guess? Not sure on that part yet. Good luck.

(I used `strapi develop --watch-admin` up until now)
