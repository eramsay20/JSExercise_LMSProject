/*
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
*/

var testData = [
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 84,
        studentId: 1,
        studentName: "Matt",
        submissionDate: "Monday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 93,
        studentId: 2,
        studentName: "Jess",
        submissionDate: "Monday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 89,
        studentId: 3,
        studentName: "Doug",
        submissionDate: "Tuesday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 81,
        studentId: 4,
        studentName: "John",
        submissionDate: "Tuesday"
    },
    {
        quizName: "Take Home Math Quiz",
        quizModule: "Calculus",
        quizScore: 76,
        studentId: 5,
        studentName: "Sara",
        submissionDate: "Monday"
    },
];
console.log(testData);

/*
Filter By Date Feature (filterByDate)
1. Given I have an array of submission objects, when I call the filterByDate function with a date 
and the array of submissions, then an array of submission objects with a submissionDate equal to 
that date are returned to me, so I can see all submissions for a particular date.

2. Given I have supplied a date and an array of submission objects, when the array is empty, or 
the filter by date feature does not find any results, then I am returned an empty array.
*/
function filterByDate (subDate) {
    var dateMatch = [];
        for(var i=0; i<testData.length; i++)    { 
            if (testData[i].submissionDate==subDate) {
                dateMatch.push(testData[i]);
                }
    };
    return dateMatch;
};
console.log(filterByDate("Monday"));
// FUNCTION CONDITION 1 SATISFIED ABOVE // 

/*
Filter By StudentId Feature (filterByStudentId)
1. Given I have an array of submission objects, when I supply a studentId and the array to the filterByStudentId function, then submission objects with a studentId equal to the studentId I supplied are returned to me, so I can see all submissions for a particular
student.
2. Given I have supplied a studentId and an array of submission objects, when the array is
empty, or the filter by studentId feature does not find any results, then I am returned an empty array.
Find Unsubmitted Feature (findUnsubmitted)
1. Given I have an array of submission objects, when I supply a date, an array of student names, and an array of submission objects (in that order) to the findUnsubmitted function, then I am returned an array of names of students that have not completed any quiz on that date
2. Given that the find unsubmitted feature does not find any student names, I am returned an empty array.
Get Quiz Average Feature (getAverageScore)
1. Given I have an array of submission objects, when I supply that array to the getAverageScore function, I am returned an average of all the quiz scores.
2. Given that I have received an average of the quiz scores, it has a precision of one decimal place (example: 76.6)
Stretch Goals
Quiz Average by Module Feature (getAverageScoreByModule)
1. Given I have an array of submission objects, when I supply that array to the getAverageScoreByModule, I am returned an object.
2. Given that I have received an object from this feature, then there is one key for every unique module name in the submission array, and the keys are the module names.
3. Given that I have an array of submission objects from only one module, when I use the quiz average by module feature, then the resulting object contains only one key.
4. When I have received an object from this feature, the value of each key should be the average of quiz scores from that module.
Example:
      {
            Statistics: 83.5,
            Algebra: 79.6,
            History: 80.1
      }
*/