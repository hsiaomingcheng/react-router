# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

因為只是練習，登入狀態寫在context裡面，暫時需要透過手動方式更改user狀態才可檢查登入畫面。  

待處裡
1. 將更改使用者登入狀態的方法與狀態，都寫在context(因為不想裝redux)
2. 使用者輸入其他未存在頁面路徑的時候，導頁到404 page
3. 使用者在登入狀態時，再進入/login路徑，要導到/(首頁)去

## 日程紀錄
**2020/11/30**  
    新增 react-router與全局context   
    新增 Code-Splitting lazy load page    
    新增 修正react-router 404失效問題，原因是switch必須接著包route否則會造成路徑判斷失效問題，[參考文章](https://github.com/ReactTraining/react-router/issues/7076)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
