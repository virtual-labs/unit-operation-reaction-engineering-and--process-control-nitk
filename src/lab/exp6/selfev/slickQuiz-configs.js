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
            "q": "  Bed of particles can be fluidized with gases?",
            "a": [
                {"option": "True",      "correct": true},
                {"option": "false",     "correct": false},
                {"option": "reactions are accompanied with release of energy",      "correct": false},
                {"option": "none of the above ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " Under fluidized condition?",
            "a": [
                {"option": "			frictional force=force of gravity on the particles- Buoyancy force",               "correct": false},
                {"option": "frictional force>force of gravity on the particles- Buoyancy force",   "correct": false},
              {"option": "		frictional force",               "correct": false}
              // {"option": "		none of these", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ergun equation</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ergun equation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "  A sphere settles freely through a pool of liquid and the settling is in stokes’ law range. The terminal velocity of the sphere will",
            "a": [
                {"option": "be independent of the liquid viscosity",           "correct": true},
                {"option": "increase linearly with viscosity",                  "correct": false},
                {"option": "decrease inversely with viscosity",  "correct": false},		
                {"option": "decrease inversely with the square of viscosity",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:same as</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:same as</p>" // no comma here
        },
        { // Question 4
            "q": " A bed constists of particles of density 2000 kg/m3.  If the height of the bed is 1.5 m and its porosity 0.4, the pressure drop required to fluidize the bed is",
            "a": [
                {"option": "25.61 kPa",    "correct": false},
                {"option": "11.77 k Pa",     "correct": true},
		 {"option": "14.86 k Pa",     "correct": false},
		 {"option": "21.13 k Pa",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:proportional to the velocity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:proportional to the velocity</p>"  // no comma here
        },
       { // Question 5
            "q": "  	Sphericity for a spherical particle is",
            "a": [
                {"option": "1",    "correct": false},
                {"option": "0", "correct": true},
		 {"option": "0.5",  "correct": false},

                {"option": "cannot say",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:nonlinear</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:nonlinear</p>"  // no comma here
        } // no comma here
    ]
};
