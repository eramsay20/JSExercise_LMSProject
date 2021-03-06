/*------------------------------------------------------------------------------------------------
The team is working on building a learning management system. Part of the system allows students
to take quizzes online and submit them. Information about the student and the quiz are then 
captured and stored in an object. As submissions come in, those objects are stored in an array.
There are several features that the team needs in order to process the data for different use cases, 
which requires your expertise.

Data Model for a Submission:
{
      quizName: "string",
      quizModule: "string",
      quizScore: number,
      studentId: number,
      studentName: "string",
      submissionDate: "string"
}

Notes:
● Each feature should be accessed from one function. That function may call other functions to help 
it do its job (generally called helper functions), and several feature functions may call the same 
helper function.
● Part of a task like this is to create a set of quality test data to ensure that features work correctly
------------------------------------------------------------------------------------------------*/

var testData = [
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 84,
        studentId: 0,
        studentName: "Matt",
        submissionDate: "Monday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 93,
        studentId: 1,
        studentName: "Jess",
        submissionDate: "Monday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 89,
        studentId: 2,
        studentName: "Doug",
        submissionDate: "Tuesday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 81,
        studentId: 3,
        studentName: "John",
        submissionDate: "Tuesday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 76,
        studentId: 4,
        studentName: "Sara",
        submissionDate: "Friday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Linear Algebra",
        quizScore: 87,
        studentId: 5,
        studentName: "May",
        submissionDate: "Tuesday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Statistics",
        quizScore: 76,
        studentId: 6,
        studentName: "Charles",
        submissionDate: "Thursday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Linear Algebra",
        quizScore: 83,
        studentId: 7,
        studentName: "Eric",
        submissionDate: "Monday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Statistics",
        quizScore: 76,
        studentId: 8,
        studentName: "Sandy",
        submissionDate: ""
    },
];
console.log("Initialize: printout of testData used in following functions...")
console.log(testData);


const nameList = ["Matt", "Jess", "Doug", "John", "Sara", "May", "Charles", "Eric", "Sandy"];
const nameList2 = ["Auntie", "Jess", "Ricky",];
const nameList3 = ["Matt", "Jess", "Donnie", "John", "Sara", "May", "Jeff"];
/*
function submitted(list,objects) {
    const subStudents = [];

        for (var i=0; i<list.length; i++) {
            if (objects.some(objects => studentName === list[i]))    {
                console.log(list[i]+" already submitted a test.")
            }
            else {
                subStudents.push(list[i])
            }
        };
    return subStudents;
};
console.log(submitted(namesList, testData)); 
*/

/*------------------------------------------------------------------------------------------------
Filter By Date Feature (filterByDate)
1. Given I have an array of submission objects, when I call the filterByDate function with a date 
and the array of submissions, then an array of submission objects with a submissionDate equal to 
that date are returned to me, so I can see all submissions for a particular date.

2. Given I have supplied a date and an array of submission objects, when the array is empty, or 
the filter by date feature does not find any results, then I am returned an empty array. 
------------------------------------------------------------------------------------------------*/

function filterByDate (subDate) {
    var dateMatch = [];
        for(var i=0; i<testData.length; i++)    { 
            if (testData[i].submissionDate==subDate) {
                dateMatch.push(testData[i]);
                }
    };
    return dateMatch;
};
console.log(`
Part 1: filterByDate function...`)
console.log(filterByDate("Monday")); // test functionality // 


/*------------------------------------------------------------------------------------------------
Filter By StudentId Feature (filterByStudentId)
1. Given I have an array of submission objects, when I supply a studentId and the array to the
 filterByStudentId function, then submission objects with a studentId equal to the studentId I 
 supplied are returned to me, so I can see all submissions for a particular student.

2. Given I have supplied a studentId and an array of submission objects, when the array is
empty, or the filter by studentId feature does not find any results, then I am returned an empty array.
------------------------------------------------------------------------------------------------*/
function filterByStudent (inputSID) {
    var idMatch = [];
    for(var i=0; i<testData.length; i++)    { 
        if (testData[i].studentId==inputSID) {
            idMatch.push(testData[i]);
            }
};
return idMatch;
};
console.log(`
Part 2: filterByStudent function...`)
console.log(filterByStudent(1)); // test functionality // 
// FUNCTION CONDITION 2 SATISFIED ABOVE // 

/*------------------------------------------------------------------------------------------------
Find Unsubmitted Feature (findUnsubmitted)
1. Given I have an array of submission objects, when I supply a date, an array of student names, 
and an array of submission objects (in that order) to the findUnsubmitted function, then I am returned 
an array of names of students that have not completed any quiz on that date

2. Given that the find unsubmitted feature does not find any student names, I am returned an empty array.
------------------------------------------------------------------------------------------------*/
function searchArr (value, array) {
    var results = [];
    var prop = array.indexOf(value);
    while (prop != -1) {
        results.push(prop);
        prop = array.indexOf(value, prop+1);
    }
    return results;
};
//console.log(searchArr("Eric", nameList)); // test searchArr function

function findUnsubmitted(subDate, studentList, objectsArray) {
    let unsubStudents = [];

    for (var i=0; i<studentList.length; i++)   {
        studentMatch = objectsArray[i].studentName;
        //console.log(studentMatch); // see which student is being pulled from obj arr
        //console.log(searchArr(studentMatch, studentList)); // see its position in array, studentList

        if(searchArr(studentMatch, studentList) !== null // i.e. student exists in studentList arr
            && objectsArray[i].submissionDate !== subDate) // & student submission date != subDate input
                { 
                    unsubStudents.push(objectsArray[i].studentName);
                }
    }
        return unsubStudents;
};

console.log(`
Part 3: fundUnsubmitted function...`)
console.log(findUnsubmitted("Tuesday", nameList, testData));
// console.log(findUnsubmitted("Thursday", nameList, testData));
// console.log(findUnsubmitted("Monday", nameList, testData));
// console.log(findUnsubmitted("Tuesday", nameList2, testData));
// console.log(findUnsubmitted("Friday", nameList3, testData));

// console.log(findUnsubmitted("Monday", nameList2, testData));
// console.log(findUnsubmitted("Monday", nameList, testData));

/* << THIS SECTION WORKS >> 
function findUnsubmitted(subDate, objectsArray) {
    let unsubStudents = [];
    for (var i=0; i<objectsArray.length; i++)   {

        for(var i=0; i<objectsArray.length; i++)    {   
                testSubDate = objectsArray[i].submissionDate;
                console.log(testSubDate);
            if (testSubDate !== subDate) {
                unsubStudents.push(objectsArray[i].studentName);
                }
        };
    }
    return unsubStudents;
};
console.log(`
Part 4: fundUnsubmitted function...`)
console.log(findUnsubmitted("Monday", testData));
*/
/*------------------------------------------------------------------------------------------------
Get Quiz Average Feature (getAverageScore)
1. Given I have an array of submission objects, when I supply that array to the getAverageScore 
function, I am returned an average of all the quiz scores.

2. Given that I have received an average of the quiz scores, it has a precision of one decimal 
place (example: 76.6)
------------------------------------------------------------------------------------------------*/
function getAverageScore (objectsArr) {
    const scores = [];
    var scoreTotal = 0;
    for(var i=0; i<objectsArr.length; i++)    { 
        if (testData[i].quizScore!==null) {
            scores.push(objectsArr[i].quizScore);
            scoreTotal = scoreTotal+objectsArr[i].quizScore;
            }
    };
    rawAverage = scoreTotal/scores.length;
    return rawAverage.toFixed(2);
};
console.log(`
Part 4: getAverageScore function...`)
console.log(`The average test score of submitted tests is: `+getAverageScore(testData)); // test functionality //

/*------------------------------------------------------------------------------------------------
Stretch Goals

Quiz Average by Module Feature (getAverageScoreByModule)
1. Given I have an array of submission objects, when I supply that array to the getAverageScoreByModule, 
I am returned an object. 

2. Given that I have received an object from this feature, then there is one key for every unique module 
name in the submission array, and the keys are the module names.

3. Given that I have an array of submission objects from only one module, when I use the quiz average 
by module feature, then the resulting object contains only one key.

4. When I have received an object from this feature, the value of each key should be the average of 
quiz scores from that module.

Example:
      {
            Statistics: 83.5,
            Algebra: 79.6,
            History: 80.1
      }
------------------------------------------------------------------------------------------------*/
// PART 1 --- build function to calculate the module score average for a given module
/*------------------------------------------------------------------------------------------------*/

const getAverageScoreForModX = (modx, objArr) => {
    const modxScore = [];
    var modxScoreTotal = 0;
    
    for(var i=0; i<objArr.length; i++)    { 
        if (objArr[i].quizScore !==null && objArr[i].quizModule === modx) {
            modxScore.push(objArr[i].quizScore);
            modxScoreTotal = modxScoreTotal+objArr[i].quizScore;
            }
        };
    rawAverage = modxScoreTotal / modxScore.length;
    return rawAverage.toFixed(2);
};

console.log(`
Part 5: getAverageScoreByModule function...`);
// console.log(getAverageScoreForModX("Statistics", testData)); // logs... "76.00" ...to console

/*------------------------------------------------------------------------------------------------*/
// PART 2 --- build function to create an array of unique modules from within the objArr
/*------------------------------------------------------------------------------------------------*/

const getModules = (objArr) => {
        modsInData = [];

        for(var i=0; i<objArr.length; i++)    { 
            let modX = objArr[i].quizModule;

            if(modsInData.indexOf(modX) == -1) {
                    modsInData.push(objArr[i].quizModule);
            }
        };
        return(modsInData);
};
// console.log(getModules(testData)); // test getModules function, logs... ["Calculus", "Statistics"]

/*------------------------------------------------------------------------------------------------*/
// PART 3 --- build function to satisfy the requirement
/*------------------------------------------------------------------------------------------------*/

const getAverageScoreByModule = (objArr) => {
    modScoreObj = {};
    allMods = getModules(objArr);

        for(var i=0; i<allMods.length; i++)    { 
            
            for (var i=0; i<objArr.length; i++)
                if(allMods[i] !== undefined){
                modScoreObj[allMods[i]] = getAverageScoreForModX(allMods[i], objArr);
                }
            }
    return modScoreObj;
};

console.log(getAverageScoreByModule(testData));
