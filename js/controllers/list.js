(function() {
     angular.module("turtleFacts").controller("listCtrl", ListController);

        ListController.$inject = ['quizMetrics', 'DataService'];
        function ListController(quizMetrics, DataService){
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.data = DataService.turtlesData;
            vm.activeTurtle = {}; //object that will hold in the information of the currently active turtle
            vm.changeActiveTurtle = changeActiveTurtle;
            vm.activateQuiz = activateQuiz;
            vm.search = "";
          

            function changeActiveTurtle(index) { 
                vm.activeTurtle = index; //the information that is being passed into this function will be set to active turtle
            }

            function activateQuiz() {
                quizMetrics.changeState(true);
            }
    }

})();
