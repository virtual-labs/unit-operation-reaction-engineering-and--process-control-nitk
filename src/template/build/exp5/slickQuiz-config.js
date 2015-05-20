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
            "q": "Pressure drop in packed bed ------------- with the increase in superficial velocity?",
            "a": [
                {"option": "decreases",      "correct": false},
                {"option": "increases",     "correct": true},
                {"option": "		no effect of superficial velocity on pressure drop",      "correct": false}
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:increases</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:increases</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " For particle Reynolds number above 1000, for packed bed  --------------- forces control?",
            "a": [
                {"option": "viscous",               "correct": false},
                {"option": "inertial",   "correct": true}
              //  {"option": "1",               "correct": false},
               // {"option": "0.2", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:inertial</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:inertial</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Under highly turbulent conditions , the modified friction factor for packed bed  approaches a value of",
            "a": [
                {"option": "150",           "correct": false},
                {"option": "1",                  "correct": false},
                {"option": "1.75",  "correct": true},		
                {"option": "5",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:1.75</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:1.75</p>" // no comma here
        },
        { // Question 4
            "q": "Kozeny Carman equation is valid for -------- flow conditions in packedbed",
            "a": [
                {"option": "laminar",    "correct": true},
                {"option": "turbulent",     "correct": false},
		 {"option": "both laminar and turbulent",     "correct": false}
		 //{"option": "	inversely propotional to the flow rate",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:laminar</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:laminar</p>"  // no comma here
        },
       { // Question 5
            "q": " 	 	Stokes’ law is valid (strictly theoretically) when particle Reynolds number is NRe,p is",
            "a": [
                {"option": "much less than one",    "correct": true},
                {"option": "equal to one",     "correct": false},
		 {"option": "		much greater than one",  "correct": false},

                {"option": "none of the foregoing.",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:much less than one</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:much less than one</p>"  // no comma here
        } // no comma here
    ]
};
