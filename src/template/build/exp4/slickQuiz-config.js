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
            "q": " Which one of the following is a variable area meter??",
            "a": [
                {"option": "venturimeter",      "correct": false},
                {"option": "orificemeter",     "correct": false},
                {"option": "Rotameter",      "correct": true},
                {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Rotameter</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Rotameter</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " Constant coefficient of discharge for venturimeter connected to 2 to 8’ pipe diameters is approximately around?",
            "a": [
                {"option": "0.6",               "correct": false},
                {"option": "0.98",   "correct": true},
                {"option": "1",               "correct": false},
                {"option": "0.2", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:less</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:less</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Flow –head relationship for venture meter is.",
            "a": [
                {"option": "linear",           "correct": false},
                {"option": "nonlinear",                  "correct": true},
                {"option": "cannot say",  "correct": false}
               // {"option": "Q/16",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:greater than</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:greater than</p>" // no comma here
        },
        { // Question 4
            "q": "Diff. Pressure created by a venture tube is",
            "a": [
                {"option": "directly propotional to square of flow rate",    "correct": true},
                {"option": "directly propotional to the flow rate",     "correct": false},
		 {"option": "inversely propotional to square of flow rate",     "correct": false},
		 {"option": "	inversely propotional to the flow rate",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:directly propotional to square of flow rate</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:directly propotional to square of flow rate</p>"  // no comma here
        },
        { // Question 5
            "q": " 	Venturimeter can be used for measuring the flow rate of",
            "a": [
                {"option": "liquid only",    "correct": false},
                {"option": "gasses only",     "correct": false},
		 {"option": "both for liquids and gases",  "correct": true},
               // {"option": "Reynolds number and relative roughness.",  "correct": true} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:both for liquids and gases</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:both for liquids and gases</p>"  // no comma here
        } // no comma here
    ]
};
