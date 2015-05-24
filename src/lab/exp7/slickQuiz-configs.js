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
            "q": " Batch process is preferred over continuous process, when the?",
            "a": [
                {"option": "reactants are in gaseous phase",      "correct": true},
                {"option": "sales demand of product is not steady",     "correct": false},
                {"option": "reactions are accompanied with release of energy",      "correct": false},
                {"option": "	none",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In case of batch reactor ,the input and output terms of material balance equation are zero?",
            "a": [
                {"option": "	True",               "correct": false},
                {"option": "False",   "correct": false}
             //   {"option": "		5% conversion is achieved in one minute",               "correct": false},
              // {"option": "		none of these", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ergun equation</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ergun equation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " The conversion of a reactant, undergoing a first-order reaction, at a time equal to three times the half life of the reaction is",
            "a": [
                {"option": "0.87",           "correct": true},
                {"option": "0.5",                  "correct": false},
                {"option": "0.425",  "correct": false},		
                {"option": "Not possible to calculate because of insufficient data",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:same as</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:same as</p>" // no comma here
        },
        { // Question 4
            "q": " Batch process is preferred over continuous process, when the ",
            "a": [
                {"option": "reactants are in gaseous phase",    "correct": false},
                {"option": "	sales demand of product is not steady",     "correct": true},
		 {"option": "reactions are accompanied with release of energy",     "correct": false},
		 {"option": "none",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:proportional to the velocity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:proportional to the velocity</p>"  // no comma here
        },
       { // Question 5
            "q": " The conversion of a reactant, undergoing a first-order reaction, at a time equal to three times the half life of the reaction is",
            "a": [
                {"option": "0.87",    "correct": false},
                {"option": "0.5", "correct": true},
		 {"option": "0.425",  "correct": false},

                {"option": "Not possible to calculate because of insufficient data",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:nonlinear</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:nonlinear</p>"  // no comma here
        } // no comma here
    ]
};
