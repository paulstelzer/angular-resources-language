# Angular Resources Language

This document describes how to create different json-files and merge all of them into one json file. This is helpful if you use Angular + @ngx-translate

## Table of Contents
- [Angular Resources Language](#angular-resources-language)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
        - [Step 1: Install devDependencies](#step-1--install-devdependencies)
        - [Step 2: Copy gulpfile.js](#step-2--copy-gulpfilejs)
        - [Step 3 (Optional): Update your package json](#step-3-optional--update-your-package-json)
        - [Step 4: Create folders and json files](#step-4--create-folders-and-json-files)
    - [Execution](#execution)
    - [Adjustments](#adjustments)

## Installation

### Step 1: Install devDependencies

Install gulp and gulp-merge-json as devDependencies

```sh
npm install gulp gulp-merge-json --save-dev
```

### Step 2: Copy gulpfile.js

Now copy the gulpfile.js and merge it with yours (if you already have a gulpfile.js).

### Step 3 (Optional): Update your package json

You can add to your package.json under "scripts" a new script:

```json
"scripts": {
    "language": "gulp i18n"
}
```

### Step 4: Create folders and json files

In "resources/i18n" Folder (you can adjust the source path - see Adjustments) you can create folders like "home" and there you can create your language files "en.json" / "de.json" etc.

## Execution

Run "gulp i18n" or "npm run language" to merge the json files. The result will be in your "src/assets/i18n" Folder (you can adjust the destionation path - see Adjustments).

## Adjustments

You can adjust your gulpfile.js:

- Line 8: Add more languages
- Line 11: Set the source folder
- Line 14: Set the destionation folder of the merged json file
- Line 21-27: If you use Ionic, you can automatically execute the gulp task