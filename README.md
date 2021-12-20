# Bayt dynamic dahsboard front end assignment.

This project is an assignment for Bayt.com, which consists of some requirments:

We want you to build a Javascript plugin/component for a Dynamic Dashboard Builder:
- A dashboard is a mix of widgets (Pie charts, Line Charts, Numeric, HTML content, ..etc)
- Each widget based on the type, might have a title or not
- It has to be very dynamic, there needs to be a configurator (init file) that controls the following:
  ● Widget type (Chart-Pie, Chart-Line, Chart-Grid, Numeric, ..etc)
  ● Widget order
  ● Widget position in the grid, size/width
  ● Data source, which could be set directly or the data source API URL
  ● Priority; it means which widget should be fetched and rendered first, e.g. widgets with priority 1
    should be rendered before 2 and 3
- It needs to be very dynamic and takes performance into consideration
- You can pick your own preferred chart plugin/library
- Feel free to mock your own data sources
- Push your code to Github and share with us the link.

### Solution built on 2 main billars.
1- A calss with interfaces and models to build the Widget model.
`src/models/index.ts`
2- A widget factory to build the most final widget object ready for rendering.
`src/services/Widget-factory.ts`

### Note: 
`src/init.ts`, is the main config file where you can manipulate your widgets before rendering.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
