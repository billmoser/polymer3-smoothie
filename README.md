[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/billmoser/polymer3-smoothie.git/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/billmoser/polymer3-smoothie.svg?branch=master)



# SmoothieCharts for Polymer 3

## Running the tutorial code

1. You'll need to install some command-line tools to manage dependencies and to run the demo. See the [full installation instructions on the Polymer website](https://www.polymer-project.org/2.0/docs/tools/polymer-cli).

2.  Clone this repo:

        https://github.com/billmoser/polymer3-smoothie.git

3.  Change directory to your local repo and install dependencies:

        cd polymer3-smoothie
        yarn install
        
4. At the moment, this element is built on Polymer 3.0 preview, which still has a few issues.
   tests are failing due to an issue with lodash, and in order to use the element, you'll need to rename a directory in node_modules after the install:

        mv node_modules/prismjs node_modules/prism

5.  To preview your element, run the Polymer development server from the repo directory:

        polymer serve --npm
        
    Open `localhost:8081` in your browser.


<!--- Note - had to move node_modules/prismjs to node_modules/prism -- this is a known issue, see https://github.com/PolymerElements/marked-element/issues/81 --->
