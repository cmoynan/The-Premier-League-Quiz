// variable to keep trak of the questions answered and remaining
let questionTracker = 1;

// variable questions with a string for the questions,Array for the choices and indexing for the correct answer
let questions = [
    {
        question: "Which player scored the fastest hat-trick in the Premier League?",
        choices: ["Sadio Mane", "Wayne Rooney", "Ruud Van Nistlerooy", "Alan Shearer"],
        correct: 0
    },
    {
        question: "Which player, with 653 games, has made the most Premier League appearances?",
        choices: ["Gareth barry", "James Milner", "Ryan Giggs", "Steven Gerrard"],
        correct: 0
    },
    {
        question: "With 260 goals, who is the Premier League's all-time top scorer?",
        choices: ["Wayne Rooney", "Alan Shearer", "Sergio Aguero", "Robbie Fowler"],
        correct: 1
    },
    {
        question: "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
        choices: ["Peter Schemichael", "Joe Hart", "David Seaman", "Petr Cech"],
        correct: 3
    },
    {
        question: "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
        choices: ["Robbie Keane", "Shane Long", "Peter Crouch", "Didier Drogba"],
        correct: 1
    },
    {
        question: "Which player has scored the most Premier League own goals?",
        choices: ["Virgil Van Dijk", "Gary Neville", "Richard Dunne", "Jamie Carragher"],
        correct: 2
    },
    {
        question: "Which team won the first Premier League title?",
        choices: ["Manchester United", "Liverpool", "Leeds United", "Arsenal"],
        correct: 0
    },
    {
        question: "The top transfer fee received by a Premier League club is £106m – who was the player?",
        choices: ["Cristiano Ronaldo", "Luis Suarez", "Moises Caicedo", "Gareth Bale"],
        correct: 2
    },
    {
        question: "Who holds the record for most Premier League assists? ",
        choices: ["Kevin De Bruyne", "Ryan Giggs", "David Beckham", "Mezut Ozil"],
        correct: 1
    },
    {
        question: "Who won the Premier League in 1994-95?",
        choices: ["Manchester United", "Liverpool", "Leeds United", "Blackburn"],
        correct: 3
    },
    {
        question: "Who holds the record for most Premier League games without a loss?",
        choices: ["Chelsea", "Liverpool", "Manchester City", "Arsenal"],
        correct: 0
    },
    {
        question: "What is the nickname of Aston Villa?",
        choices: ["The Clarets", "The Toffees", "The Cherries", "The Villans"],
        correct: 3
    },
    {
        question: "What is the nickname of Bournemouth?",
        choices: ["The Clarets", "The Cherries", "The Saints", "The Gunners"],
        correct: 1
    },
    {
        question: "Which club has recorded the most defeats in Premier League history?",
        choices: ["Aston Villa", "West Ham", "Everton", "Newcastle"],
        correct: 2
    },
    {
        question: " Which player has scored the most free-kicks?",
        choices: ["David Beckham", "Xabi Alonso", "Trent Alexander Arnold", "James Ward-Prowse"],
        correct: 0
    },
    {
        question: "How many teams have never been relegated from the Premier League?",
        choices: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "What year did the Premier League start?",
        choices: ["1991", "1992", "1993", "1994"],
        correct: 1
    },
    {
        question: "Who scored the goal that won Manchester City the title in 2011—12?",
        choices: ["Mario Balotelli", "Carlos Tevez", "David Silva", "Sergio Aguero"],
        correct: 3
    },
    {
        question: "How old was Wayne Rooney when he first played in the Premier League??",
        choices: ["14", "15", "16", "17"],
        correct: 2
    },
    {
        question: "How many clubs competed in the Premier League’s first season?",
        choices: ["18", "20", "22", "24"],
        correct: 2
    },
    {
        question: "Who won the Premier League in 1997-98??",
        choices: ["Arsenal", "Manchester United", "Chelsea", "Liverpool"],
        correct: 0
      },
      {
        question: "Who holds the record for most Premier League wins as a manager?",
        choices: ["Pep Guardiola", "David Moyes", "Alex Ferguson", "Arsene Wenger"],
        correct: 2
      },
      {
        question: "Who holds the record for most Premier League goals in a calendar year?",
        choices: ["Wayne Rooney", "Harry Kane", "Sergio Aguero", "Alan Shearer"],
        correct: 1
      },
      {
        question: "Who holds the record for most Premier League games as club captain?",
        choices: ["Frank Lampard", "Roy Keane", "Patrick Vieira", "Steven Gerrard"],
        correct: 3
      },
      {
        question: "What is the name of Wolverhampton Wanderer's stadium?",
        choices: ["Old Trafford", "Craven Cottage", "Molineux", "Stamford Bridge"],
        correct: 2
      },
      {
        question: "Who are the current Champions of the Premier League?",
        choices: ["Arsenal", "Liverpool", "Manchester City", "Tottenham Hotspur"],
        correct: 2
      },
      {
        question: "Who was the first foreign manager to win a Premier League Title?",
        choices: ["Arsene Wenger", "Jose Mourinho", "Fabio Capello", "Roberto Mancini"],
        correct: 0
      },
      {
        question: "Which of these teams have never played in the Premier league?",
        choices: ["Norwich", "Derby County", "Preston North End", "Charlton Athetic"],
        correct: 2
      },
      {
        question: "Which player has commited the most fouls in the Premier league of all time?",
        choices: ["Roy Keane", "James Milner", "Paul Scholes", "Gareth barry"],
        correct: 3
      },
      {
        question: "With 100 points which team holds the record for the most points in a single season?",
        choices: ["Arsenal", "Liverpool", "Manchester City", "Chelsea"],
        correct: 2
      },
      {
        question: "What is the name of Luton Towns Stadium?",
        choices: ["King Power", "Kenilworth Road", "Turf Moor", "Community Stadium"],
        correct: 1
      },
      {
        question: "What is the name of Burnley's Stadium?",
        choices: ["Turf Moor", "The Amex", "Kenilworth Road", "Vitality Stadium"],
        correct: 0
      },
      {
        question: "What is the name of Brighton's Stadium?",
        choices: ["Emirates", "Vitality Stadium", "The Amex", "Turf Moor"],
        correct: 2
      },
      {
        question: "What is the name of Newcastle's Stadium?",
        choices: ["Sports Direct Arena", "Stadium of Light", "Goodison Park", "St James Park"],
        correct: 3
      },
      {
        question: "What is the name of Crystal Palace's Stadium?",
        choices: ["Vitality", "Craven Cottage", "Selhurst park", "Goodison Park"],
        correct: 2
      },
      {
        question: "What is the name of West Ham's Stadium?",
        choices: ["Upton Park", "London Stadium", "The Boleyn Ground", "Craven Cottage"],
        correct: 1
      },
      {
        question: "Who won the Premier League in 2014-15?",
        choices: ["Arsenal", "Liverpool", "Manchester City", "Chelsea"],
        correct: 3
      },
      {
        question: "Who won the Premier League in 2015-16?",
        choices: ["Arsenal", "Liverpool", "Leicester City", "Manchester City"],
        correct: 2
      },
      {
        question: "What is the nickname of Manchester City?",
        choices: ["City Boys", "Blue Devils", "Citizens", "Blue Moon Army"],
        correct: 2
      },
      {
        question: "What is the nickname of Everton?",
        choices: ["The Eagles", "The Saints", "The Blues", "The Toffees"],
        correct: 3
      },
    
];
/**
 * Keep track of the index of the current question
 * store the number of correct answers
 */
let currentQuestion = 0;
let correctAnswers = 0;

/**
 * Shuffle function to randomize the order of elements in an array
 *  Returns array of 10 questions out of 20 in random order
 */
function shuffleArray(questions) {
    console.log(questions);
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Shuffle the questions array
shuffleArray(questions);

/**
 * Displays the questions from the string on the Webpage
 * Sets the Text content of the questionText element to be the text of the current question
 * Displays the choices from the choices array on the webpage
 */
function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";

}

// Variable to keep track of the current question index
let currentQuestionIndex = 0;
const totalQuestions = 10;

// Function to show the next question
function showNextQuestion() {
    // Check if there are still questions left to display
    if (currentQuestionIndex < totalQuestions) {
        // Get the current question
        const currentQuestion = questions[currentQuestionIndex];

        // Display the current question 

        // Increment the question index for the next time
        currentQuestionIndex++;
    } else {
        // All questions have been displayed
        console.log("Quiz finished");
    }
}

// Calls the function to show the first question
showNextQuestion();

/**
 * Checks the answer selected against the correct answer
 * Checks what feedback to display if question is correct or incorrect
 * Increments the score if the answer is correct
 */
function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct! :)";
        feedback.style.color = "green";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect! :(";
        feedback.style.color = "red";
    }

    /**
     * Increments the current question
     * checks if there is more questions to display
     * If all questions have been answered displays the result
     */

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < totalQuestions) {
            showQuestion();
            //increment question number each time new question loads
            document.getElementById("question-tracker").innerText = ++questionTracker;


        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<h1>You got ${correctAnswers} out of ${totalQuestions} questions.</h1>`;

            // creating a restart button to display at the end of the quiz
            const newButton = document.createElement('button');
            newButton.textContent = 'Restart';
            quizContainer.appendChild(newButton);
            newButton.id = "restart-Btn";
            newButton.addEventListener("click", restartQuiz);

        }

    }, 1000); // time for page to refresh after answer chosen

    // function that reloads the webpage when the restart button is clicked
    function restartQuiz() {
        window.location.reload();
    }

}
showQuestion();
