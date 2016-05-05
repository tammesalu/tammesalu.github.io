$(document).ready( function () {
   console.log("App started.");
   
   var stack = [
       {
           prefix: 'la',
           word: 'vie',
           translation: 'life'
       },
       {
           prefix: 'la',
           word: 'chose',
           translation: 'thing, object'
       },
       {
           prefix: 'le',
           word: 'monde',
           translation: 'world'
       },
       {
           prefix: 'le',
           word: 'jour',
           translation: 'day, daylight'
       },
       {
           prefix: 'le',
           word: 'travail',
           translation: 'work, job, labour'
       },
       {
           prefix: 'l',
           word: 'homme',
           translation: 'man'
       },
       {
           prefix: 'la',
           word: 'femme',
           translation: 'woman'
       },
       {
           prefix: 'le',
           word: 'nom',
           translation: 'name'
       },
       {
           prefix: 'la',
           word: 'maison',
           translation: 'house, home'
       },
       {
           prefix: 'la',
           word: 'mere',
           translation: 'mother'
       },
       {
           prefix: 'la',
           word: 'semaine',
           translation: 'week'
       },
   ];
   
   $('input.answer').submit( function (event) {
      console.log('submit'); 
   });
   
   $(document).on('keypress', function (event) {
      console.log('keypress'); 
      
      if (event.keyCode === 13) {
          checkAnswer();
      }
   });
   
   var checkAnswer = function () {
       console.log('checkAnswer');
       
       if (stack[currentQuestion].word === $('input.answer').val()) {
           console.log('correct');
           
           ++currentQuestion;
           
           loadQuestion();
       }
   }
   
   var createHint = function (word, level) {
       var letters = word.split('');
       var hint = '';
       
       for (var i = 0; i < letters.length; ++i) {
           var showLetter = false;
           
           if (i === 0 || i === letters.length - 1) {
               showLetter = true;
           }
           
           hint = hint.concat(showLetter ? '<span>' : '<span class="hidden">', letters[i], '</span>');
       }
       
       return hint;
   }
   
   var loadQuestion = function () {
       console.log('loadQuestion');
       
       var prefix = stack[currentQuestion].prefix;
       var word = stack[currentQuestion].word;
       var translation = stack[currentQuestion].translation;
       
       $('input.answer').val('');
       
       var hint = createHint(word, 0);
       
       console.log(hint);
       
       $('p.prefix').text(prefix);
       $('p.hint').html(hint);
       $('p.translation').text(translation);
   }
   
   var currentQuestion = 0;
   
   loadQuestion();
});
