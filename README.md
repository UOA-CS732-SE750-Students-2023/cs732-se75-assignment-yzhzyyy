# cs732-se75-assignment-yzhzyyy
cs732-se75-assignment-yzhzyyy created by GitHub Classroom

# Topic: Using React Native and Expo to Creact a Mobile App in iOS <br>

## What is React Native (RN)? <br>

#### 1. Introduction <br>
  RN is a derivative of React for native mobile application platforms and an open-source UI software framework. Based on JavaScript mobile framework, RN can be used to develop applications for iOS and Android platforms. Additionally, RN allows us to write only one codebase that can be applied to both iOS and Android.<br>
  Some advantages of using RN:  
  *  Easy  
  * Reusable components  
  * One-way data binding, easy to debug large-scale applications.  

#### 2. Difference Between React and React Native <br>

|  | React | React Native |
| --- | --- | --- |
| User interface | HTML tags | JSX tags |
| Style | CSS | JavaScript |
| Randering | virtual DOM | native APIs |
| Route | React Router | Navigator library |<br>

## What is expo? <br>
  Expo is a set of tools, libraries, and services for building native iOS and Android applications using JavaScript.  
  Expo allows for rapid iteration and testing across different mobile platforms.  
  
# 'My-Library' App

## 1. User Guide  

### Step 1:
Download the `my-library` folder and open it with a code editor (using VSCode as an example).  
### Step 2:
Open the terminal in VSCode and enter the following code to install the necessary tools. <br>
* install npm:  
``` 
npm install 
```
* install expo-cli:  
``` 
npm install -g expo-cli 
```
* Install the dependency package of react-native version 0.71.6 in the current project:    
``` 
npx expo install react-native@0.71.6 
```
* Start npm:  
``` 
npm start 
```  

Then you will see the following message:<br>
<img src="./images/Metro.jpg" width = "70%" height = "70%"/><br>

### Step 3:
Download the `Expo Go` app on your mobile phone.<br> For iOS, you can open your camera and scan the QR code to enter, and for Android, you can scan the QR code with the Expo Go app.<br>** Using iOS is a good choice. **

## 2. Project Files Overview
<img src="./images/catalog.jpg" width="15%" height = "15%"/><br>

> * `/app`: It stores the main display pages, including the `index.js` and `modal.js` page.  
> * `/components`: It stores the components used in the project, including three custom components: `ScreenHeaderBtn`, `Pokemon`, and `Search`.  
> * `/constants`: It stores `icons.js`, which is used to make the image resources constant so that they can be accessed directly in the project without specifying their paths again.  
> * `/images`: It stores the images used in the project.  
> * `pokemon.json`: Store Pokemon information using an array, including id, url, and name.

<br>

## 3. File Details

### /app/_layout.js
This is a layout route for a directory <br>
In this file, I created a React functional component called `Layout` which defines a stack navigation using the Expo Router library.<br>This Component returns a `<Stack>` component. There are two screens defined within the `<Stack>` component: `<home>` and `<modal>`. The `home` screen represents the main content and the `modal` screen represents a modal that can be displayed on top of the main content. <br> The Expo Router library provides navigation functionality for moving between screens in the stack.

### /app/home.js
This file implements the redirection functionality.<br> When the stack in `_layout.js` pushes out the home page, the index component in `home.js` is called, which uses the `<Redirect>` component to redirect to `index.js`. <br> In `index.js`, the actual home page is defined. This enables the mobile end to display the main page.<br>

### /app/index.js
This is the main page of the mobile app.<br>
It uses various components such as `Stack`, `SafeAreaView`, `LinearGradient`, `ScrollView`, `ScreenHeaderBtn`, `Search`, and `Pokemon` to create a user interface with a header section and a body section.<br> It defines a screen in a Stack Navigator in a React Navigation application. The screen is customized using some specific options for the navigation header. <br>
> **Components**<br>
> * `<Text>`: This is a React Native text component which is used for displaying plain text.
> * `<Stack.Screen>`: <br>This component allows you to define options for each screen, including the title, style, navigation bar behavior, and stack parameters. It helps to build the perfect navigation experience.<br>
> * `<SafeAreaView>`: <br>SafeAreaView is provided by `react-native-safe-area-context`. It ensures that the content is displayed within the safe areas of the device's screen. This is important because on devices like the iPhone X or newer models, the top screen notch can obstruct a portion of the screen. SafeAreaView helps prevent content from being obstructed by the device's hardware, and ensures that it is displayed within the visible screen area.
> * `<LinearGradient>`: <br>LinearGradient is provided by the `Expo` library for creating a linear gradient effect by specifying a range of colors and positions along a linear axis. 
> * `<ScrollView>`: <br>ScrollView is provided by  `react-native-gesture-handler`. It provides a scrollable view for displaying content that is larger than the visible area of the screen.<br> `showsVerticalScrollIndicator={false}` means hide the display of the vertical scroll bar in this component.<br>
> * `<ScreenHeaderBtn>`,`<Search>` and `<Pokemon>` are three custom components, which will be explained later.<br>  



> **hook**<br>
> * `useRouter()`: This hook is used to get access to the routing object. It allows the developer to programmatically navigate to another page using the `push()` method. For example:
```
const router = useRouter();
<ScreenHeaderBtn onPress={() => router.push('./modal')}/>
```
This would navigate the user to the `/modal` page.<br>


### /app/modal.js
This code provides a basic modal screen with a message and a dismiss button. When the user clicks on the menu button in the top right corner, a floating window will pop up.<br><br>
A Modal page is a UI design component that pops up as a floating layer on the current page to display temporary content. <br><br>
The `<StatusBar>` component sets the status bar color to white, and the `<Text>` component displays a message indicating that the Pokemon list is under construction.

### Search.jsx
In `search.jsx`, I defined a component named `Search` which returns a `<View>` component containing a search button and a text input field. The search button includes a `<TouchableOpacity>` component with the `searchBtn` style class and an `<Image>` component.<br>
> * `<TouchableOpacity>` component provides touchable feedback for both Android and iOS platforms.
> * `<TextInput>` allows users to input text into an application. `placeholder="Search..."` sets a default text "Searh..."

### Pokemon.jsx
`<Pokemon>` component is defined in this file which renders a list of Pokemon cards in a scrollable view.<br> 
Inside `<ScrollView>` component, `data.map` function is used to iterate through the array of Pokemon objects and create a `<TouchableOpacity>` element for each item to show every Pokemon. <br>
> * `require()` function: This is a built-in Node.js function that allows you to load modules or files in your code. <br>After obtaining the data variable, use the `map()` function within a `<ScrollView>` component to render each Pokemon in the data variable to the content defined below. <br>

### ScreenHeaderBtn.jsx
The `<ScreenHeaderBtn>` component takes three props: `iconUrl`, `dimension`, `onPress`.<br>
* In `<TouchableOpacity>` component, when the user presses on this component, the `onPress()` function passed as a prop is triggered.<br>
* In `<Image>` component, `resizeMode='cover'` is to ensure that the image completely covers the Image component's container.<br>
* The `dimension` prop is passed to the btnImg function as an argument to set the size of the Image component.<br>

### screenheader.style.js
This file exports a StyleSheet object named styles that contains two styles: `btnImg` and `btnContainer`.<br>
> * `StyleSheet.create` is used to create a reusable StyleSheet object. The `StyleSheet` object returned by can then be referenced in components to apply the defined styles. In components, we can access styles by referencing the property names of the style sheet object such as: `styles.btnImg(dimension)`.
> * `btnImg` style is a function takes a `dimension` parameter which is used to set width and height of the `Image` component. When the user clicks on the Image component, the dimension parameter will be passed back to btnImg.<br>


### Pokemon.style.js and Search.style.js
These two files define the styles for the `<Pokemon>` and `<Search>` components, respectively. The styles are then referenced in components using a syntax like `<styles.pokemonName>`.<br>

### icons.js
This file makes image resources available as constants for later references, without the need to use URLs.<br>

## 4. Style system
### Style sheet object
"Style sheet object" refers to a way of encapsulating style properties and values into a JavaScript object for defining styles on React Native components. The style sheet object is used to define the styles of a component in a structured and reusable way, allowing for easy modification and consistency across the application. It is a core feature of the React Native styling system.<br>
For example:<br>
``` JS
const styles = StyleSheet.create({
    container:{
        marginTop: 0,
    })}
```

### Inline styles
"Inline styles" refers to a way of defining styles for a React Native component by directly adding style properties and values as attributes in the component's JSX code. <br>
For example:<br>
``` JS
<SafeAreaView style={{flex:1, backgroundColor: "#ecccc5"}}>
```
