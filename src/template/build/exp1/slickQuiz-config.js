// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "For laminar flow in a pipe, the Fanning friction factor depends on Reynolds number according to the relation?",
            "a": [
                {"option": "f = 24/ Re",      "correct": false},
                {"option": "f = 18.5/ Re",     "correct": false},
                {"option": "f = 16/ Re",      "correct": true},
                {"option": " none",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:f = 16/ Re</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:f = 16/ Re</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Under otherwise uniform conditions Fanning friction factor for a rough pipe is?",
            "a": [
                {"option": "smaller than that for a smooth pipe",               "correct": false},
                {"option": "greater than that for a smooth pipe",   "correct": true},
                {"option": " equal to that for a smooth pipe",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:greater than that for a smooth pipe</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:greater than that for a smooth pipe</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Applying a pressure drop across a capillary results in a volumetric flow rate Q under laminar flow conditions.  The flow rate, for the same pressure drop, in a capillary of the same length but half the radius is.",
            "a": [
                {"option": "Q/2",           "correct": false},
                {"option": "Q/4",                  "correct": false},
                {"option": "Q/8",  "correct": true},
                {"option": "Q/16",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:Q/8</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Q/8</p>" // no comma here
        },
        { // Question 4
            "q": "Two identical pressure gauges at the foot of two storage tanks that are at the same elevation, the water levels in the tanks are the same, one tank holds 1,00,000 litre (tank 1), the other holds 1000 litre (tank 1),. Say which one is true?",
            "a": [
                {"option": "Pressure gauge reading of tank 1 is greater than that of tank 2",    "correct": false},
                {"option": "Pressure gauge reading of tank 2 is greater than that of tank 1",     "correct": false},
                {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Pressure gauge reading of tank 1 and that of tank 2 are same</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Pressure gauge reading of tank 1 and that of tank 2 are same</p>"  // no comma here
        },
        { // Question 5
            "q": "For hydraulically smooth pipe, the resistance to flow depends only on the?",
            "a": [
                {"option": "flow Reynolds number",    "correct": false},
                {"option": "relative roughness.",     "correct": false},
		 {"option": "absolute roughness",  "correct": false},
                {"option": "Reynolds number and relative roughness.",  "correct": true} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Reynolds number and relative roughness</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Reynolds number and relative roughness</p>"  // no comma here
        } // no comma here
    ]
};
