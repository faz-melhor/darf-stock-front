# darf-stock-front

It's the front-end of the application the darf generator web application. This app is meant to help stock traders that are bound to pay tributes oblige by Brazilian law nº 11.033/2004.

# Rules of tribute

Individual net profit in stock market operations are tributed if the total value of sells overflows the amount of 20.001,00 R$ in a month. If instead of profit the set of operations in the month turns out to be a loss, said loss can be deducted on the following months of the year.

## How is it done?

Basically, when someone buys something on the stock market a brokerage invoice is generated, the price of the asset being bought and the fees related to the acquisition will be written in it. For the calculation the sum of all fees plus the value paid for the asset is called cost of purchase.

After some time someone decides to sell a portion or all of its shares, the p/l (profit/loss) is calculated by this equation:

*amount-bought \*price-bought-((amount-sold\*price-sold)+((amount-sold/amount-bought)\*buying-fee)+selling-fee)*

If the result is a negative number than the operation ended in loss otherwise it ended in profit, and if all sells in the month should surpass the total value of 20.001,00 this profit should be tributed.

# How the system works?

The user should upload all the brokerage invoice he has, the system will read the invoices and calculate how much tax the user needs to pay.

# More information

* https://apet.jusbrasil.com.br/noticias/2164112/venda-de-acoes-acima-de-r-20-mil-por-mes-pode-pagar-ir/amp
* http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2004/Lei/L11033.htm

 Linked repositories: [darf-stock-back](https://github.com/lucasnathan/darf-stock-back)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
