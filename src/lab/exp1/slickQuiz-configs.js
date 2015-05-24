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
            "q": "When a fluid flows over a stationary solid surface, the fluid velocity at the fluid – solid interface is?",
            "a": [
                {"option": "Zero",      "correct": true},
                {"option": "equal to free – stream velocity",     "correct": false},
                {"option": "between zero and free – stream velocity",      "correct": false}
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " The unit of viscosity in CGS system is commonly known as Poise. The dimension of Poise is?",
            "a": [
                {"option": "g/cm.s2",               "correct": false},
                {"option": "g.cm/s",   "correct": false},
                {"option": "g.cm2/s",               "correct": false},
               {"option": "g/cm.s", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:g/cm.s</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:g/cm.s</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " If the equivalent length of a 90º elbow is greater than the 45º elbow, the pressure loss across the 90º elbow is ---------  the 45º elbow .",
            "a": [
                {"option": "greater than",           "correct": true},
                {"option": "lesser than",                  "correct": false},
                {"option": "same as",  "correct": false}		
               // {"option": "5",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:greater than</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:greater than</p>" // no comma here
        },
        { // Question 4
            "q": " The loss of pressure head for the laminar flow through pipes varies as ",
            "a": [
                {"option": "square of velocity",    "correct": false},
                {"option": "proportional to the velocity",     "correct": true},
		 {"option": "inverse of velocity",     "correct": false},
		 {"option": "	inverse of the square of velocity",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:proportional to the velocity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:proportional to the velocity</p>"  // no comma here
        },
       { // Question 5
            "q": " Reynolds number is a ratio of",
            "a": [
                {"option": "		momentum diffusivity to thermal diffusivity",    "correct": false},
                {"option": "momentum diffusivity to molecular diffusivity",     "correct": false},
		 {"option": "		inertial force to viscous force",  "correct": true},

                {"option": "		average velocity to velocity of sound",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:inertial force to viscous force</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:inertial force to viscous force</p>"  // no comma here
        },
  { // Question 6
            "q": " Two tubes of diameter 1 cm and 2 cm are filled with mercury to a height of 50 cm. The tubes are open to atmosphere. Now pressure at the bottom of the mercury column will be",
            "a": [
                {"option": "	higher for the tube of dia 1 cm",    "correct": false},
                {"option": "	higher for the tube of dia 2 cm",     "correct": false},
		 {"option": "	the same for both the tubes",  "correct": true},

                {"option": "	none",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:the same for both the tubes</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:the same for both the tubes</p>"  // no comma here
        },
{ // Question 7
            "q": "  Fannings friction factor for a flow with Reynolds number of 1000 is",
            "a": [
                {"option": "0.016",    "correct": true},
                {"option": " 		0.014",     "correct": false},
		 {"option": "		Relative roughness of the pipe should be known to calculate the Friction factor",  "correct": false}

               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:0.016</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:0.016</p>"  // no comma here
        } ,
{ // Question 7
            "q": "  	Water flows laminarly through a tube of dia 1 cm. The average water velocity is uav and the maximum velocity is umax. Then",
            "a": [
                {"option": "umax = 1.5 uav",    "correct": false},
                {"option": " umax = 2 uav",     "correct": true},
		 {"option": "umax = 2.5 uav",  "correct": false},
{"option": "umax = 3 uav",  "correct": false}

               


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:umax = 2 uav</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:umax = 2 uav</p>"  // no comma here
        }  // no comma here
    ]
};
