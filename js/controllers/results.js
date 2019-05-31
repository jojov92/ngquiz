(function(){

    angular.module("turtleFacts").controller("resultsCtrl", ResultsController);
    
    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.getAnswerClass = getAnswerClass;
        vm.setActiveQuestion = setActiveQuestion;
        vm.calculatePerc = calculatePerc;
        vm.activeQuestion = 0;

        function calculatePerc(){
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion(index) {
            vm.activeQuestion = index;
        }


        /** checking if the index of that point in the loop (index line 216) is equal to the correct answers index and 
        if it is then it will return the class bg-success, but if it's an answer that's incorrect, it will return bg-danger class*/
        function getAnswerClass(index){
            
            if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                return "bg-success";
            }else if(index === DataService.quizQuestions[vm.activeQuestion].selected) {
                return "bg-danger";
            }
        }
    }
})();