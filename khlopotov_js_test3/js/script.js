/**
 *   @fileOverview Homework Javascript 15-16
 *   @author Oleksii Khlopotov
*/
/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function (event) {
    "use strict";
    /**
     * Class for questions in test.
     * @param {string} question - Test of the question
     * @param {Object[]} possibleAnswer - Array of strings with test possible answers
     * @param {Object[]} correctAnswer - Array of indexes with correct answers
     */
    class Test {
        constructor() {
            this.question = null;
            this.possibleAnswer = [];
            this.correctAnswer = [];
        }
    }

    /**
     * Object for the  whole test with methods to create it.
     *
     * @type       {<type>}
     */
    let newTest = {
        title: 'Test',
        questions: [],

        /**
         * Creates a test.
         */
        createTest() {
            this.title = document.querySelector('.content__title-input').value;
            let content = document.querySelector('.content');
            let formQuestions = content.querySelectorAll('.question-block');
            /**
             * Check if there are questions in the test
             */
            if (formQuestions.length === 0) {
                alert('Questions must not be empty!');
                return false;
            }

            for (let i = 0; i < formQuestions.length; i++) {
                this.questions[i] = new Test();
                this.questions[i].question = formQuestions[i].querySelector('.question-block__title-input').value;
                /**
                 * Check if there are at least two answers for the question.
                 */
                let formAnswers = formQuestions[i].querySelectorAll('.question-block__answer-block');
                if (formAnswers.length <2) {
                    alert('You have to add at lease 2 answers!');
                    return false;
                }

                /**
                 * Search all answers in the current question.
                 */
                for (let j = 0; j < formAnswers.length; j++) {
                    this.questions[i].possibleAnswer[j] = formAnswers[j].querySelector('.question-block__answer-input').value;
                    if (formAnswers[j].querySelector('.question-block__answer-check').checked) {
                        this.questions[i].correctAnswer.push(j);
                    }
                }
                if (this.questions[i].correctAnswer.length === 0) {
                    alert(`Please select at least one correct answer for the question №${(i+1)}`);
                    return false;
                }
            }
            /**
             * Save results to local Storage in JSON format
             */
            localStorage.setItem("testRecord", JSON.stringify(this));

            /**
             * Remove Test constructor from html page
             */
            document.body.removeChild(document.querySelector('.wrapper'));

            /**
             * Run test generator to render test for test pass.
             */
            generateTest("testRecord");
            // console.log('generateTest', generateTest);
            // generateTest("testRecort");
        },

        /**
         * Creates a new element and set class name
         *
         * @param      {<string>}  tag - html tag of new element
         * @param      {<string>}  className  Class name for new element
         * @return     {<Object>}  { returns an object of created element }
         */
        createElement(tag, className) {
            let element = document.createElement(tag);
            element.classList.add(className);
            return element;
        },

        /**
         * Sets the innerHTML values for scope of objects
         *
         * @param {Array} elements - The scope of elements to set innerHTML values
         * @param {Object} elements.object - element object
         * @param {string} elements.htmlText - value for innerHTML
         */
        setHTML(...elements) {
            elements.forEach((item, i, elements) => {
                item.object.innerHTML = item.htmlText;
            });
        },

        /**
         * Add one or several elements to parent DOM element
         *
         * @param      {<Object>}  parent   The parent DOM element
         * @param      {Array}   objects  The objects which should be added to the parent DOM element
         */
        renderElements(parent, ...objects) {
            objects.forEach((item, i, objects) => {
                parent.appendChild(item);
            });
        },

        /**
         * Add new question on form
         *
         * @param      {<object>}  button - The button which was pressed to identify the place to insert new elements
         */
        addQuestion(button) {
            let questionBlock = this.createElement('div', 'question-block'),
                questionLabel = this.createElement('h2', 'question-block__title-label'),
                question = this.createElement('input', 'question-block__title-input'),
                answerType = this.createElement('select', 'question-block__answer-type'),
                answerType1 = document.createElement('option'),
                answerType2 = document.createElement('option'),
                addAnswer = this.createElement('button', 'question-block__add-answer'),
                removeQuestion = this.createElement('button', 'question-block__remove-question');

            /**
             * Sets innerHTML values for the scope of elements
             * See {@link setHTML} for properties description
             */
            this.setHTML({object: questionLabel, htmlText: 'Вопрос №' + (document.querySelectorAll('.question-block').length + 1)},
                         {object: answerType1, htmlText: 'Один правильный ответ'},
                         {object: answerType2, htmlText: 'Несколько правильных ответов'},
                         {object: addAnswer, htmlText: 'Добавить вариант ответа'},
                         {object: removeQuestion, htmlText: 'Удалить вопрос'});

            question.type = 'text';
            question.name = 'name';

            /**
             * Adding elements to DOM
             * See {@link renderElements} for properties description
             */
            button.parentElement.insertBefore(questionBlock, button);
            this.renderElements(questionBlock, questionLabel, question, answerType);
            this.renderElements(answerType, answerType1, answerType2);
            this.renderElements(questionBlock, addAnswer, removeQuestion);

            /**
             * Add event on the button to add new question to the form
             */
            addAnswer.addEventListener('click', (event) => {
                this.addAnswer(event.currentTarget);
                event.preventDefault();
                return false;
            });

            /**
             * Remove question from the form
             */
            removeQuestion.addEventListener('click', (event) => {
                let parent = event.currentTarget.parentElement.parentElement;
                parent.removeChild(event.currentTarget.parentElement);

                let questionBlocks = parent.querySelectorAll('.question-block');
                questionBlocks.forEach((item, i, questionBlocks) => {
                    item.querySelector('.question-block__title-label').innerHTML = `Вопрос №${(i+1)}`;
                    item.querySelector('.question-block__answer-check').name = `question${(i+1)}`;
                });

                event.preventDefault();
                return false;
            });

            /**
             * Change answer type for current question: for one correct answer radio buttons are used,
             * for several correct answers checkboxes are used.
             */
            answerType.addEventListener('change', (event) => {
                let answerChecks = event.currentTarget.parentElement.querySelectorAll('.question-block__answer-check');
                for (let i = 0; i < answerChecks.length; i++) {
                    answerChecks[i].type = event.currentTarget.selectedIndex === 0 ? 'radio' : 'checkbox';
                }
            });
        },

        /**
         * Adds an answer to the form
         *
         * @param      {<Object>}  button - The button which was pressed to identify current question.
         */
        addAnswer(button) {
            let answerBlock = this.createElement('div', 'question-block__answer-block'),
                inputCheck = this.createElement('input', 'question-block__answer-check'),
                questionCount = button.parentElement.parentElement.querySelectorAll('.question-block').length,
                answerCount = button.parentElement.querySelectorAll('.question-block__answer-block').length,
                inputLabel = this.createElement('label', 'question-block__answer-label'),
                answer = this.createElement('input', 'question-block__answer-input'),
                removeAnswer = this.createElement('button', 'question-block__remove-answer');

            /**
             * Sets innerHTML values for the scope of elements
             * See {@link setHTML} for properties description
             */
            this.setHTML({object: inputLabel, htmlText: `Ответ №${(answerCount+1)}`},
                         {object: removeAnswer, htmlText: 'Удалить ответ'});

            inputCheck.name = `qestion${questionCount}`;
            inputCheck.type = button.parentElement.querySelector('.question-block__answer-type').selectedIndex === 0 ? 'radio' : 'checkbox';

            inputLabel.for = inputCheck.name;

            button.parentElement.insertBefore(answerBlock, button);

            /**
             * Adding elements to DOM
             * See {@link renderElements} for properties description
             */
            this.renderElements(answerBlock, inputCheck, inputLabel, answer, removeAnswer);

            /**
             * add event to the button to remove selected answer from the form
             * Identifies clicked button and removes parent form with the answer.
             */
            removeAnswer.addEventListener('click', (event) => {
                let parent = event.currentTarget.parentElement.parentElement;

                parent.removeChild(event.currentTarget.parentElement);

                let answerBlocks = parent.querySelectorAll('.question-block__answer-block');
                for (let i = 0; i < answerBlocks.length; i++) {
                    answerBlocks[i].querySelector('.question-block__answer-label').innerHTML = 'Ответ №' + (i+1);
                }

                event.preventDefault();
                return false;
            });
        }
    };

    /**
     * Find button to add question and add event on click
     */
    let addQuestion = document.querySelector('.content__add-question');
    addQuestion.addEventListener('click', (event) => {
        newTest.addQuestion(event.currentTarget);
        event.preventDefault();
        return false;
    });

    /**
     * Add event on the button to create test using data form html form
     */
    let createTest = document.querySelector('.content__save-test');
    createTest.addEventListener('click', (event) => {
        newTest.createTest();
        event.preventDefault();
        return false;
    });

    /**
     * function to generate Test in Browser (from previous Homework)
     * @param  {string} recordName - name of localStorage object
     */
    function generateTest(recordName) {
        var testObject = JSON.parse(localStorage.getItem(recordName));
        var template = document.querySelector("#generate-test");

        var html = template.innerHTML;
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.innerHTML = html;

        //** using Lodash template to construct html */
        var htmlLodash = _.template(html);
        var lodash = htmlLodash({
            data: testObject
        });
        wrapper.innerHTML = lodash;

        document.body.appendChild(wrapper);

        /**
        * Create submit button for test
        */
        var submitButton = document.querySelector(".content__submit");
        submitButton.addEventListener("click", function(event) {
            /**
            * @type {String[]} kvpairs - Array which will be filled using user answers.
            */
            var kvpairs = [];

            /**
            * Select form element, check parameter "checked" for aldl checkboxes
            * and radiobuttons and create array of user"s answers
            */
            var form = document.querySelector(".content");

            for (var i = 0; i < form.elements.length; i++) {
                var inputItem = form.elements[i];
                if (inputItem.checked === true) {
                    kvpairs.push(encodeURIComponent(inputItem.name) + "=" + encodeURIComponent(inputItem.value));
                }
            }

            /**
            * Show modal Window on Submit {@link showCover}
            */
            showCover(checkResults(kvpairs,generateCorrectResult(testObject)));

            /**
            * Compare two arrays
            *
            * @param {string[]} array1 - 1st array to compare
            * @param {string[]} array2 - 2nd array to compare with
            * @return {boolean} Returns True if array1 = array2 otherwise returns False
            */
            function checkResults(array1, array2) {
                return (array1.length == array2.length) && array1.every(function(element, index) {
                    return element === array2[index];
                });
            }

            /**
            * Generate array with correct answers using data in object
            *
            * @param {Object} testObj - Object with test data: questions and answers
            * @returns {string[]} Array of strings with correct answers
            */
            function generateCorrectResult(testObj) {
                var result = [];
                for (var i = 0; i < testObj.questions.length; i++) {
                    for (var j = 0; j < testObj.questions[i].correctAnswer.length; j++ ) {
                        result.push("question" + (i+1) + "=answer" + (testObj.questions[i].correctAnswer[j]+1));
                    }
                }
                return result;
            }

            /** prevent link to go by href */
            event.preventDefault();
            return false;
        });

        /**
        * Show modal Window with text depended on test result
        *
        * @param {boolean} testResult - True - test passed, False - test failed
        */
        function showCover(testResult) {
            /**
            * Creates semitransparent block to all screen for modal window
            */
            var coverDiv = document.createElement("div");
            coverDiv.classList.add("cover-div");
            document.body.appendChild(coverDiv);

            /**
            * Creates block for modal window
            */
            var messageBox = document.createElement("div");
            messageBox.classList.add("message-box");
            coverDiv.appendChild(messageBox);

            /**
            * Create title for modal window
            */
            var messageResult = document.createElement("p");
            messageResult.classList.add("message-text");
            messageResult.innerHTML = testResult ? "Поздравляем. Вы прошли тест!" : "Тест не пройден, попробуйте еще раз.";
            messageBox.appendChild(messageResult);

            /**
            * Create button to close modal window
            */
            var messageClose = document.createElement("button");
            messageClose.classList.add("message-button");
            messageClose.innerHTML = "Закрыть";
            messageBox.appendChild(messageClose);

            /**
            * Creates Event listener for close button
            */
            messageClose.addEventListener("click", function(event) {
                var form = document.querySelector(".content");
                    for ( var i = 0; i < form.elements.length; i++ ) {
                        form.elements[i].checked = false;
                    }
                    hideCover();
                });

        }

        /**
        * Delete modal Window created by {@link showCover}
        */
        function hideCover() {
            document.body.removeChild(document.querySelector(".cover-div"));
        }
    }

});