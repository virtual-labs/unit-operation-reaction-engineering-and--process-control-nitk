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
            "correct": "<p><span>Right answer</span> Ans:Bernoullis principle</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Bernoullis principle</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For a venturimeter, if you plot log( flow rate) vs log(pressure drop),the slope of the straight  line is?",
            "a": [
                {"option": "		0.2",               "correct": false},
                {"option": "		2",   "correct": false},
                {"option": "0.5",               "correct": true},
               {"option": "		5", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:0.5</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:0.5</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "  -------------------- is the characteristic of a venturimeter.",
            "a": [
                {"option": "		vena contracta",           "correct": false},
                {"option": "throat",                  "correct": true},
               {"option": "a concentric hole",  "correct": false},		
                {"option": "		Nozzle",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:throat</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:throat</p>" // no comma here
        },
        { // Question 4
            "q": " Around -----------% of pressure is recovered in venturimeter.",
            "a": [
                {"option": "60%",    "correct": false},
                {"option": "		40%",     "correct": false},
		 {"option": "90%",     "correct": true},
		 {"option": "10%",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:90%</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:90%</p>"  // no comma here
        },
       { // Question 5
            "q": " Pressure recovery takes place in ---------------of the venturimeter",
            "a": [
                {"option": "throat",    "correct": true},
                {"option": "diverging section",     "correct": false},
		 {"option": "converging section",  "correct": false},

                {"option": "All",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:throat</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:throat</p>"  // no comma here
        } // no comma here
    ]
};
