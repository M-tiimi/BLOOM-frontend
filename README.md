# BLOOM-frontend
## M-Team
Juulia Jokinen, Jelena Laakkonen, Veera Leppänen, Anne-Mari Mannila, Areta Santos
## Project idea
This project was created during Haaga-Helia's Software Poject II -course. in fall 2021.
In this project, the idea is to create an app ment for aiding user in taking care of their physical and mental health. This is done with few different functionalities. 
### Flower
The main idea is to take care of a flower which will grow when user is taking care of themselfes, and starts to die when not. The user can add tasks, for example
brushing your teeth, or eating a proper meal, which when done, gives user points which grow the flower.
### Machine learning
The app will ask you daily how are you doing, and prompt you to give answer. You can tell the bot things, and it will suggest actions based on what kinda input you give it.
### Information
There is also an information page for the user to find more resources on how to keep your mind and body happy and healthy.
## Built with
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
## Getting Started
### Set up environment
Clone BLOOM-frontend repository. Run npm install or yarn install depending which one you're using. Install expo app on your phone (App Store or Google Play). Make sure your phone is connected to the same network as your computer. Run expo start and read the QR-code with your phone's camera.
### Using Bloom -app
**First you must create a user to be able to login.** 

![bloom_register_small](https://user-images.githubusercontent.com/70891200/144714962-74ddc25c-681d-4182-955b-7fcc4912b8cf.jpeg)

**Next you should Login with your username and password. It migth take a few minutes before you can login after creating a new user.**

![bloom_login_small](https://user-images.githubusercontent.com/70891200/144714892-d4b09669-b425-41f8-a0b2-94f94a7f7e79.jpeg)

**The app opens to the flower tab, from there you can see the condition of your flower, your tasks and then there's also a button for showing alert. When pressing Show alert button a dialog box opens, and the app asks you "Tell me about your day" and you can send and answer. The app will react in a certain way based on what you answer. If the user input is negative, the app will ask "Do you want to talk?", if you press yes, you are redirected to sekasin24/7 chat where you can talk to a real human, if you press no, you are redirected to the information page of the app. If the user input is positive alert showing "thats nice to hear :)" is shown.**

**In the add task page you can add tasks**

**Growing the flower happends through doing the tasks and collecting points. Doing a task rewards you with 2 points, and the flower will grow when you have more than 6 points, and grows more when you have more than 10 points. If you don't do any tasks, the points will start to decrease after a certain time**

**From the information tab you can find resources on how to better your mental health, and links to instructions on how to make an appointment with mental health professional if you have the need for it.**
