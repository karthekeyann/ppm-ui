Integrated Digital Platform Frontend (**IDP-FE**) v1.3 for release 1708d DFW project
===========================================================================


Prep For Local Development
--------------------------
IDP-FE requires Git version control and Nodejs based tech stack.

Download and install [git-scm for Windows](https://git-scm.com/downloads)[1]

After Git is installed open up GitBash and set some global configurations for git:

```bash
$git config --global http.proxy one.proxy.att.com:8080
$git config --global url."https://".insteadOf git://
$git config --global user.name "Last, First (attuid)"
$git config --global user.email "attuid@att.com"
```


Now we need Nodejs installed. NodeJS creates a system and server JavaScript 
development environment. Node Package Manager (npm) comes with NodeJS. We're also 
going to use Node Version Manager (nvm) to install NodeJS and in the future manage node 
versions between projects. You can easily install, update, and use different versions
of node on the same machine with nvm.

Install nvm-windows[1]: [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases)

Now install nodejs 6.10.1 (a current LTS release for NodeJS):

```bash
$nvm install v6.10.1
$nvm use v6.10.1
```

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

### Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `3000`.

### Chrome Browser Debugging Tools:
* Augury for ng2 debugging
* Redux DevTools for store examination and "time travel" debugging

Now that you have Git and NodeJS ready, we are ready to setup the project on our local.


[1]For Mac probably can install nvm from brew and Linux using apt-get / yum


Git Going
---------

Clone the project from [CodeCloud repo](https://codecloud.web.att.com/projects/ST_IDP/repos/dfw/browse) and install the dependencies, before running:

```bash
$ git clone https://{{attuid}}@codecloud.web.att.com/scm/st_idp/dfw.git
$ cd dfw
$ npm install
$ npm start
```


#### IF you are facing dependency issues
```bash

Please Rerun 
$ npm install
$ npm start
```

___

Working With Git and CodeCloud Primer
-------------------------------------

Here is a quick primer on working with remote git repo on Code Cloud, especially for those new to Git:

To get latest code from CodeCloud (origin) to your local branch "master":

```bash
$ git pull origin master
```

To see what you have changed on your local

```bash
$ git status
```

To commit all changes to "master" in one command:

```bash
$git commit -a -m "[project#/defect#] and 30 characters minimum message to get past CodeCloud prehook check"

Use the $git rebase -i  command to display a list of the last n commits in your default text editor.
Replace pick with reword before each commit message you want to change.
Save and close (escape + : wq ) the commit list file.

```

or add just some file to commit first

```bash
$ git add filename
$ git commit -m "[project#/defect#] and 30 characters minimum message to get past CodeCloud prehook check"

Use the $git rebase -i  command to display a list of the last n commits in your default text editor.
Replace pick with reword before each commit message you want to change.
Save and close (escape + : wq ) the commit list file.
```

Then push changes to CodeCloud so others can use your awesome code:

```bash
$git push -u origin master
```
Note: When Code Cloud asks for password, it is your ITSERVICES password

How to merge changes from origin if there is a conflict:

```bash
$ git mergetool
```

Make your own branch for experimental code changes:

Update your code from another developers machine on experimental branch:

Merge experimental branch code to master when its ready:

Make a change to a file that you don't want to accidentally commit? Edit .gitignore and add file/pattern there

___

The **IDP-FE** Tech Stack
-------------------------
Used [WebPack Angular 2 Starter w/ Bootstrap](https://github.com/ng2-dev/angular2-quick-starter/tree/dev-bootstrap) as base. Includes:
* [Angular 2/4](https://angular.io), [TypeScript](https://www.typescriptlang.org/)
* [NGRX](https://github.com/ngrx) - Redux for Angular2
* [Bootstrap](http://getbootstrap.com/)
* [Karma](https://karma-runner.github.io/1.0/index.html) for unit testing 
* [Protractor](http://www.protractortest.org/#/) for e2e testing
* [Webpack](https://webpack.github.io/) for builds, bundling, hot reload, etc

Custom:
* [Reshape](https://github.com/reshape/standard) for templating / content at author/build time
* [DS2](http://digitaldesign.web.att.com) design / styling
* [json-server](https://github.com/typicode/json-server) for delivering mock JSON api during development


### File Structure

We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:

```
angular2-webpack-starter/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │   └──core/                  * Where IDP-FE Core functionality resides
 │   │   └──reporting/             * Where IDP-FE Reporting functionality resides
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```

### Core

The **Core** does the following functions for the application:

1. Verify the existence of uuid cookie, and if not present calls synchronously to get it created
2. Checks for session timer in localStorage, if not present sets new session timeouts. If present and expired, clears localStorage stores.
3. Manages session timeout warning and expiration. On expiration will clear localStorage stores.
4. Persist stores to localStorage (given to us by ngrx -- but neeed to define stores for app.)
5. Page templates -- Reshape base page templates for page and modals

### Reporting
pending	


Developing with **IDP-FE** v0.1
-------------------------------

### External Stylesheets
Any stylesheets (Sass or CSS) placed in the `src/styles` directory and imported into your project will automatically be compiled into an external `.css` and embedded in your production builds.

For example to use Bootstrap as an external stylesheet:
1) Create a `styles.scss` file (name doesn't matter) in the `src/styles` directory.
2) `npm install` the version of Boostrap you want.
3) In `styles.scss` add `@import 'bootstrap/scss/bootstrap.scss';`
4) In `src/app/app.module.ts` add underneath the other import statements: `import '../styles/styles.scss';`

### Developing a component
Create a new folder under app directory for you new component.
Create these files for your new component:
	* compname.component.ts
	* compname.component.spec.ts
	* compname.component.html
	* compname.component.css
	* compname.e2e.ts
	* index.ts

### Developing a service
pending

### Developing a route/page
pending

### Developing a page template
pending

### Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

### Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

### AoT Don'ts
The following are some things that will make AoT compile fail.

- Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don’t use default exports.
- Don’t use `form.controls.controlName`, use `form.get(‘controlName’)`
- Don’t use `control.errors?.someError`, use `control.hasError(‘someError’)`
- Don’t use functions in your providers, routes or declarations, export a function and then reference that function name
- @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

___

Working With CLI
----------------


### Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

### build files
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
npm run webdriver:update
# this will start a test server and launch Protractor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test both your JIT and AoT builds
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

### use Hot Module Replacement
```bash
npm run server:dev:hmr
```


### In Case of the command failing with a fatal: Authentication failed error

What I've tried, and had worked well was:
set git-bash.exe with Administrator rights.

```bash
$ git config --system --unset credential.helper
```


### GIT COMMANDS 
```bash

This has the documentation for all git commands----
https://www.kernel.org/pub/software/scm/git/docs/

Major GIT commands:

git config
Sets configuration values for your user name, email, gpg key, preferred diff algorithm, file formats and more. Example: git config --global user.name "My Name" git config --global user.email "user@domain.com" cat ~/.gitconfig [user] name = My Name email = user@domain.com

git init
Initializes a git repository – creates the initial ‘.git’ directory in a new or in an existing project. Example: cd /home/user/my_new_git_folder/ git init

git clone
Makes a Git repository copy from a remote source. Also adds the original location as a remote so you can fetch from it again and push to it if you have permissions. Example: git clone git@github.com:user/test.git

git add
Adds files changes in your working directory to your index. Example: git add .

git rm
Removes files from your index and your working directory so they will not be tracked. Example: git rm filename

git commit
Takes all of the changes written in the index, creates a new commit object pointing to it and sets the branch to point to that new commit. Examples: git commit -m ‘committing added changes’ git commit -a -m ‘committing all changes, equals to git add and git commit’

git status
Shows you the status of files in the index versus the working directory. It will list out files that are untracked (only in your working directory), modified (tracked but not yet updated in your index), and staged (added to your index and ready for committing). Example: git status # On branch master # # Initial commit # # Untracked files: # (use "git add <file>..." to include in what will be committed) # # README nothing added to commit but untracked files present (use "git add" to track)

git branch
Lists existing branches, including remote branches if ‘-a’ is provided. Creates a new branch if a branch name is provided. Example: git branch -a * master remotes/origin/master

git checkout
Checks out a different branch – switches branches by updating the index, working tree, and HEAD to reflect the chosen branch. Example: git checkout newbranch

git merge
Merges one or more branches into your current branch and automatically creates a new commit if there are no conflicts. Example: git merge newbranchversion

git reset
Resets your index and working directory to the state of your last commit. Example: git reset --hard HEAD

git stash
Temporarily saves changes that you don’t want to commit immediately. You can apply the changes later. Example: git stash Saved working directory and index state "WIP on master: 84f241e first commit" HEAD is now at 84f241e first commit (To restore them type "git stash apply")

git tag
Tags a specific commit with a simple, human readable handle that never moves. Example: git tag -a v1.0 -m 'this is version 1.0 tag'

git fetch
Fetches all the objects from the remote repository that are not present in the local one. Example: git fetch origin

git pull
Fetches the files from the remote repository and merges it with your local one. This command is equal to the git fetch and the git merge sequence. Example: git pull origin

git push
Pushes all the modified local objects to the remote repository and advances its branches. Example: git push origin master

git remote
Shows all the remote versions of your repository. Example: git remote origin

git log
Shows a listing of commits on a branch including the corresponding details. Example: git log commit 84f241e8a0d768fb37ff7ad40e294b61a99a0abe Author: User <user@domain.com> Date: Mon May 3 09:24:05 2010 +0300 first commit

git show
Shows information about a git object. Example: git show commit 84f241e8a0d768fb37ff7ad40e294b61a99a0abe Author: User <user@domain.com> Date: Mon May 3 09:24:05 2010 +0300 first commit diff --git a/README b/README new file mode 100644 index 0000000..e69de29

git ls-tree
Shows a tree object, including the mode and the name of each item and the SHA-1 value of the blob or the tree that it points to. Example: git ls-tree master^{tree} 100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 README

git cat-file
Used to view the type of an object through the SHA-1 value. Example: git cat-file -t e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 blob

git grep
Lets you search through your trees of content for words and phrases. Example: git grep "www.siteground.com" -- *.php

git diff
Generates patch files or statistics of differences between paths or files in your git repository, or your index or your working directory. Example: git diff


```
