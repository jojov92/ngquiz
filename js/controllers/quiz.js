(function (){
    angular.module("turtleFacts").controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.activeQuestion = 0;

        var numQuestionsAnswered = 0;

        function setActiveQuestion(){
            var breakOut = false;
            var quizLength = DataService.quizQuestions.length - 1;

            while(!breakOut){
                vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                if(DataService.quizQuestions[vm.activeQuestion].selected === null) {
                    breakOut = true;
                }
            }
        }


        function questionAnswered() {
            var quizLength = DataService.quizQuestions.length;
// if the number of questions have been answered, then increment the number of total questions answered
            if(DataService.quizQuestions[vm.activeQuestion].selected !== null) {
                numQuestionsAnswered++;
                if(numQuestionsAnswered >= quizLength) {

                }
            }
            vm.setActiveQuestion();
        }
    }

})();