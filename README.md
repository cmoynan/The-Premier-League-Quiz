THE PREMIER LEAGUE QUIZ

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/8ceeeb6f-1737-4d3d-abed-e628744df074)


Hello,

Welcome to my my Premier league quiz website. This site is a simple quiz. There is a total of 40 questions but each time the quiz is started users will only get 10 questions out of the 40 in random order. You get feedback if you answer the question correct or incorrectly and once you have answered 10 questions you will get your result. On the result page there is a restart option that refreshes the webpage and the quiz starts again. You may get repeat questions in a new quiz due to probability but questions will never repeat in the same game so users cn play the game multiple times and generally will have to play muliple times before they get a game where they have already see all the questions asked.

FEATURES : The site is a simple enough quiz.

Each time a question is answered it provides feedback to the user if they got the question correct or incorrect.

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/77192822-fdbe-4646-9dc3-91bbaebae7ae)

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/8b3c46ba-34b2-4137-bff2-f7dc0ef5a69e)

There is a question tracker that indicates to the user what question they're currently on also.

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/718a13ea-cbd5-4236-a754-5d8659f6a9e0)



Once 10 questions are answered it will give the user the amount of correct answers out of 10. On the result page they will be presented with a restart button which will refresh the webpage and give the users a new set of questions. There is 40 questions so the probability of getting the exact same questions in the same order is very slim and this will keep the users interested and wanting to keep playing.

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/d31c0823-fb52-4252-9fe5-73bef1545d7e)

Design:

The Poppins font is used throughout the quiz to create a more fun view of the site and the background colors on the pages give it a cartoon like view. The color of the answer buttons has been made darker in order to make the site more accesible and UI design has been used to make sure the colors are accessible.

The site is functional and accessible over all screen types but there is some movement when viewing mobile screens on dev tools. Tested on my own phone and ther is slight movement to the side and up and down on the screen. I unfortunetly have not been able to fix this.



TESTING :

I have completed the quiz multiple times to ensure all functions run correctly and that there are no bugs. Biggest test was to make sure that questions never repeated in the same session. There was a number of Bugs in the Java code at times from more than 10 questions being asked to Questions not displaying to random questions not working but all have been fixed.

Do all the answer buttons work? - Yes - Tested on a phone/tablet and laptop.
Does the restart Button work? - Yes - Tested on a phone/tablet and laptop.
Is only 10 questions asked each time the quiz is finished - Yes
Are the questions always random and in different order - Yes
Is the website functional on muliple browsers and device sizes - Yes. tested on Dev tools around screen sizes and tried the website on Safari, Chrome, Edge and Mozilla and the quiz functions as it should

Tested HTML on the W3c Markup Validator and got no errors.

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/de550618-ea69-4c81-90b9-8f1ac978654a)


Tested the CSS on W3c CSS validator and no erros were found.

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/b7b750d9-df9a-401c-b53a-820818752aaa)

Using Lighthouse funcion in Devtools I go the below score. Accessibility was an issue due to the contrast and color of the choice buttons but making them darker resolved the accessibility issue.

![image](https://github.com/cmoynan/The-Premier-League-Quiz/assets/150179658/57865843-a21d-4c8d-b094-3cd2cb1ae497)

Tested the website on JShint. Erro that the variable CheckAnswer on line 277 of the code is not used but there is no variable here for that and after searching throughout the code I cannot see a variable declard for checkAnswer so I unfortuntely had to leave this issue without resolving.

DEPLOYMENT :

The site was deployed to GitHub pages. The steps to deploy are as follows: In the GitHub repository, navigate to the Settings tab From the source section drop-down menu, select the Master Branch Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. The live link can be found here - https://cmoynan.github.io/The-Premier-League-Quiz/

CREDITS :

The ShuffleArray function is from the stack overflow website . I was unable to get the randomisation of questions to work without repeating so copied this code from there.

https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

The questions in the quiz are from various quizzes online.

Enjoy the Quiz
