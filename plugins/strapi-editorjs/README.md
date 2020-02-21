# strapi-editorjs

This is a prototype to get strapi to replace the Wysiwyg editor with EditorJs. Not sure
if I'm gonna use strapi, but I'm putting the code for this out in the world anyway. Have fun!

Note: Opening existing posts won't work, because EditorJs can't handle the markdown language
normally used by strapi.

## Installation

1. Install cpx: `@deboxsoft/cpx`
1. Add the script `"postinstall": "cpx node_modules/stapi-editorjs extensions"`
1. Install stapi-editorjs: `npm install --save strapi-editorjs`.

The post install script will copy stapi-editorjs to your extensions folder. This way we can 
override content from a plugin (stapi-plugin-content-manager).
