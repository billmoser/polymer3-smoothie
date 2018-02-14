# SmoothieCharts for Polymer 3

## Running the tutorial code

1. You'll need to install some command-line tools to manage dependencies and to run the demo. See the [full installation instructions on the Polymer website](https://www.polymer-project.org/2.0/docs/tools/polymer-cli).

3.  Clone this repo:

        https://github.com/billmoser/polymer3-smoothie.git

4.  Change directory to your local repo and install dependencies:

        cd polymer3-smoothie
        yarn install
        
5.  To preview your element, run the Polymer development server from the repo directory:

        polymer serve --npm
        
    Open `localhost:8081` in your browser.



Note - had to move node_modules/prismjs to node_modules/prism -- this is a known issue, see https://github.com/PolymerElements/marked-element/issues/81
