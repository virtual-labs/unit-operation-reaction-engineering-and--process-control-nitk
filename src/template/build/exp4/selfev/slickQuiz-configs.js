// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": " Principle behind the working of venturimeter is?",
            "a": [
                {"option": "		Bernoullis principle",      "correct": true},
                {"option": "		Newtons law",     "correct": false},
                {"option": "		Stokes law",      "correct": false}
               // {"option": "cannot say",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For a venturimeter, if you plot log( flow rate) vs log(pressure drop),the slope of the straight  line is?",
            "a": [
                {"option": "		0.2",               "correct": false},
                {"option": "		2",   "correct": false},
                {"option": "0.5",               "correct": false},
               {"option": "		5", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ergun equation</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ergun equation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "  -------------------- is the characteristic of a venturimeter.",
            "a": [
                {"option": "		vena contracta",           "correct": true},
                {"option": "throat",                  "correct": false}
              //  {"option": "a concentric hole",  "correct": false},		
               // {"option": "		Nozzle",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:same as</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:same as</p>" // no comma here
        },
        { // Question 4
            "q": " Around -----------% of pressure is recovered in venturimeter.",
            "a": [
                {"option": "60%",    "correct": false},
                {"option": "		40%",     "correct": true},
		 {"option": "90%",     "correct": false},
		 {"option": "10%",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:proportional to the velocity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:proportional to the velocity</p>"  // no comma here
        },
       { // Question 5
            "q": " Pressure recovery takes place in ---------------of the venturimeter",
            "a": [
                {"option": "throat",    "correct": false},
                {"option": "diverging section",     "correct": true},
		 {"option": "converging section",  "correct": false},

                {"option": "all of the above",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:nonlinear</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:nonlinear</p>"  // no comma here
        } // no comma here
    ]
};
