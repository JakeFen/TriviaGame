$(document).ready(function() {
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var time = 60;
  var clockRunning = false;

  function answers() {
    if ($("input[value='canada']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='beaver-emblem']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='base-9']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='baseball-players']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='alfred']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='batman-butler']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='pint-9']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='pint-blood']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='bing']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='chandlers-last-name']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='mercury']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='planets']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='pandora']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='first-woman']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }

    if ($("input[value='prostate-cancer']:checked").val()) {
      correctAnswers++;
    } else if (!$("input[name='cancers']:checked").val()) {
      unanswered++;
    } else {
      incorrectAnswers++;
    }
    $(".correct-answers").text(correctAnswers);
    $(".incorrect-answers").text(incorrectAnswers);
    $(".unanswered").text(unanswered);
  }

  function count() {
    time--;
    $(".count-down").text(time);
    if (time === -1) {
      $(".questions-body").hide();
      $(".done-body").show();
      answers();
      clockRunning = false;
    }
  }

  $(".start-button").click(function() {
    $(".start-body").hide();
    $(".questions-body").show();
    count();
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  });

  $(".done-button").click(function() {
    $(".questions-body").hide();
    $(".done-body").show();

    answers();
  });
});
