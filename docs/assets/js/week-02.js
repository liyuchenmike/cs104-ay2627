(() => {
  "use strict";

  const lessonKey = "cs104-week-02-v1";
  const quizQuestions = [
    {
      id: "q1",
      prompt: "Which expression is a predicate rather than a complete statement?",
      options: ["7 is odd", "n is odd", "3 + 4 = 7", "Every integer is rational"],
      answer: 1,
      explanation: "‘n is odd’ contains an unbound variable. It becomes a statement only after n is assigned or quantified."
    },
    {
      id: "q2",
      prompt: "Why is ∀x ∈ ℝ: x² > 0 false?",
      options: ["Negative numbers have negative squares", "x = 0 is a counterexample", "The domain should contain only integers", "A universal claim needs only one witness"],
      answer: 1,
      explanation: "Zero belongs to the real numbers and makes x² > 0 false. One allowed counterexample refutes a universal statement."
    },
    {
      id: "q3",
      prompt: "Which form is equivalent to ¬(∀x: p(x))?",
      options: ["∀x: ¬p(x)", "∃x: ¬p(x)", "¬∃x: ¬p(x)", "∃x: p(x)"],
      answer: 1,
      explanation: "A universal claim is false exactly when there is at least one counterexample, so ∀ switches to ∃ and the predicate is negated."
    },
    {
      id: "q4",
      prompt: "What is the negation of ‘Some computer hackers are over 40’ ?",
      options: ["No one over 40 is a hacker", "Some hackers are 40 or under", "Every computer hacker is 40 or under", "Every person over 40 is a hacker"],
      answer: 2,
      explanation: "Negating existence produces a universal claim: every hacker fails the over-40 predicate."
    },
    {
      id: "q5",
      prompt: "Negate: ∀x: p(x) → q(x).",
      options: ["∀x: p(x) ∧ ¬q(x)", "∃x: ¬p(x) ∧ q(x)", "∃x: p(x) ∧ ¬q(x)", "∀x: ¬q(x) → ¬p(x)"],
      answer: 2,
      explanation: "The quantifier switches to existence, and the conditional fails when its hypothesis is true and conclusion false."
    },
    {
      id: "q6",
      prompt: "What is the key difference between ∀y ∃x: p(x,y) and ∃x ∀y: p(x,y)?",
      options: ["Only the second has a domain", "In the first, x may depend on y; in the second, one fixed x must work for all y", "They are always equivalent", "The first is existential and the second is universal"],
      answer: 1,
      explanation: "Quantifier order controls dependency. A witness chosen after y may respond to y; a witness chosen first must survive every y."
    },
    {
      id: "q7",
      prompt: "Which form negates ∀y ∃x: p(x,y)?",
      options: ["∃y ∀x: ¬p(x,y)", "∀y ∃x: ¬p(x,y)", "∃x ∀y: ¬p(x,y)", "∀x ∃y: ¬p(x,y)"],
      answer: 0,
      explanation: "Move the negation inward in order: ∀y becomes ∃y, then ∃x becomes ∀x, and finally p is negated."
    },
    {
      id: "q8",
      prompt: "Which conclusion follows from ∀x: p(x) → q(x) and p(a)?",
      options: ["p(x) for every x", "q(a)", "q(x) for every x", "¬q(a)"],
      answer: 1,
      explanation: "Instantiate the universal rule at a, then apply direct implication to p(a) → q(a) and p(a)."
    },
    {
      id: "q9",
      prompt: "All humans are mortal. Felix is mortal. Therefore Felix is human. What error occurs?",
      options: ["Inverse error", "Converse error", "Universal transitivity", "Valid contrapositive implication"],
      answer: 1,
      explanation: "The argument affirms q to infer p. Felix may be in the larger mortal set without being in the human subset."
    },
    {
      id: "q10",
      prompt: "No polynomial function has a horizontal asymptote. Function f has a horizontal asymptote. What follows validly?",
      options: ["f is a polynomial", "f is not a polynomial", "f has no horizontal asymptote", "Nothing can be inferred"],
      answer: 1,
      explanation: "If polynomial implies no horizontal asymptote, then having a horizontal asymptote allows contrapositive implication: f is not polynomial."
    }
  ];

  const videoCheckpoints = [
    {
      time: 342,
      prompt: "What would refute ∀x ∈ ℝ: x² > 0?",
      options: ["One real x whose square is not positive", "One real x whose square is positive", "A list of three positive numbers"],
      answer: 0,
      explanation: "A universal claim fails when one allowed counterexample makes its predicate false."
    },
    {
      time: 738,
      prompt: "Negate: ‘Every square is blue.’",
      options: ["No square is blue.", "At least one square is not blue.", "At least one blue object is a square."],
      answer: 1,
      explanation: "Negating a universal produces an existential counterexample."
    },
    {
      time: 1117,
      prompt: "In ∀y ∃x: x + y = 0, may x depend on y?",
      options: ["Yes", "No"],
      answer: 0,
      explanation: "Because x is chosen after y, we may respond with x = −y."
    },
    {
      time: 1471,
      prompt: "Negate ∃x ∀y: p(x,y).",
      options: ["∀x ∃y: ¬p(x,y)", "∃x ∀y: ¬p(x,y)", "∀y ∃x: ¬p(x,y)"],
      answer: 0,
      explanation: "Switch each quantifier in place and negate the final predicate."
    },
    {
      time: 1841,
      prompt: "From every p being q and a being q, may we conclude a is p?",
      options: ["Always", "Only if the converse is also known", "Never under any additional premise"],
      answer: 1,
      explanation: "The original implication alone does not justify its converse. A separate converse premise would be required."
    }
  ];

  const defaultState = { answers: {}, checked: {}, bestScore: 0, videoTime: 0, seenCheckpoints: [] };
  let state = loadState();

  function loadState() {
    try {
      return { ...defaultState, ...JSON.parse(localStorage.getItem(lessonKey) || "{}") };
    } catch (_error) {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(lessonKey, JSON.stringify(state));
  }

  function renderQuiz() {
    const container = document.querySelector("#quiz-container");
    if (!container) return;
    container.replaceChildren();

    quizQuestions.forEach((question, index) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-question";
      fieldset.dataset.questionId = question.id;

      const legend = document.createElement("legend");
      const number = document.createElement("span");
      number.className = "quiz-number";
      number.textContent = `${index + 1}.`;
      legend.append(number, document.createTextNode(question.prompt));
      fieldset.append(legend);

      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = String(optionIndex);
        input.checked = Number(state.answers[question.id]) === optionIndex;
        input.addEventListener("change", () => {
          state.answers[question.id] = optionIndex;
          delete state.checked[question.id];
          saveState();
          clearFeedback(fieldset);
        });
        label.append(input, document.createTextNode(option));
        fieldset.append(label);
      });

      const actions = document.createElement("div");
      actions.className = "question-actions";
      const checkButton = document.createElement("button");
      checkButton.type = "button";
      checkButton.className = "check-answer";
      checkButton.textContent = "Check answer";
      checkButton.addEventListener("click", () => checkQuestion(question, fieldset));
      actions.append(checkButton);
      fieldset.append(actions);

      const feedback = document.createElement("div");
      feedback.className = "feedback";
      feedback.setAttribute("role", "status");
      fieldset.append(feedback);
      container.append(fieldset);

      if (state.checked[question.id]) showFeedback(question, fieldset);
    });
  }

  function clearFeedback(fieldset) {
    const feedback = fieldset.querySelector(".feedback");
    feedback.className = "feedback";
    feedback.textContent = "";
  }

  function checkQuestion(question, fieldset) {
    if (state.answers[question.id] === undefined) {
      const feedback = fieldset.querySelector(".feedback");
      feedback.className = "feedback incorrect is-visible";
      feedback.textContent = "Choose an answer first.";
      return;
    }
    state.checked[question.id] = true;
    saveState();
    showFeedback(question, fieldset);
  }

  function showFeedback(question, fieldset) {
    const feedback = fieldset.querySelector(".feedback");
    const correct = Number(state.answers[question.id]) === question.answer;
    feedback.className = `feedback ${correct ? "correct" : "incorrect"} is-visible`;
    feedback.textContent = `${correct ? "Correct. " : "Not yet. "}${question.explanation}`;
  }

  function finishQuiz() {
    const answered = quizQuestions.filter(question => state.answers[question.id] !== undefined).length;
    const score = quizQuestions.filter(question => Number(state.answers[question.id]) === question.answer).length;
    state.bestScore = Math.max(state.bestScore || 0, score);
    quizQuestions.forEach(question => {
      if (state.answers[question.id] !== undefined) state.checked[question.id] = true;
    });
    saveState();
    renderQuiz();

    const result = document.querySelector("#quiz-result");
    result.classList.add("is-visible");
    if (answered < quizQuestions.length) {
      result.innerHTML = `<strong>${score}/${quizQuestions.length}</strong><p>You answered ${answered} of ${quizQuestions.length}. Complete the remaining questions, then calculate again. Best score: ${state.bestScore}/${quizQuestions.length}.</p>`;
    } else {
      const guidance = score >= 8
        ? "Strong work. Explain one mixed-quantifier statement aloud and identify exactly when its witness is chosen."
        : score >= 6
          ? "Good foundation. Review quantified negation and the order of mixed quantifiers, then retry."
          : "Revisit the witness, counterexample and quantifier-order examples, then retry without looking at your previous answers.";
      result.innerHTML = `<strong>${score}/${quizQuestions.length}</strong><p>${guidance} Best score: ${state.bestScore}/${quizQuestions.length}.</p>`;
    }
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function resetQuiz() {
    state.answers = {};
    state.checked = {};
    saveState();
    document.querySelector("#quiz-result").classList.remove("is-visible");
    renderQuiz();
  }

  function setupReadingProgress() {
    const bar = document.querySelector("#progress-bar");
    const label = document.querySelector("#progress-label");
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 0;
      bar.style.width = `${percent}%`;
      label.textContent = `${percent}%`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupVideo() {
    const video = document.querySelector("#lecture-video");
    if (!video) return;
    const status = document.querySelector("#video-status");
    const dialog = document.querySelector("#checkpoint-dialog");
    let activeCheckpoint = null;

    video.addEventListener("loadedmetadata", () => {
      if (state.videoTime > 10 && state.videoTime < video.duration - 5) {
        video.currentTime = state.videoTime;
        status.textContent = `Resume from ${formatTime(state.videoTime)}.`;
      }
    });

    video.addEventListener("timeupdate", () => {
      state.videoTime = Math.floor(video.currentTime);
      if (state.videoTime % 5 === 0) saveState();
      const next = videoCheckpoints.find((checkpoint, index) =>
        video.currentTime >= checkpoint.time &&
        video.currentTime < checkpoint.time + 2 &&
        !state.seenCheckpoints.includes(index)
      );
      if (next && !dialog.open) {
        activeCheckpoint = videoCheckpoints.indexOf(next);
        video.pause();
        openCheckpoint(next);
      }
    });

    video.addEventListener("ended", () => {
      state.videoTime = 0;
      saveState();
      status.textContent = "Lecture complete—continue with the mastery check.";
    });

    document.querySelectorAll(".chapter-button").forEach(button => {
      button.addEventListener("click", () => {
        video.currentTime = Number(button.dataset.time);
        video.play();
      });
    });

    document.querySelector("#checkpoint-continue").addEventListener("click", () => {
      if (activeCheckpoint !== null && !state.seenCheckpoints.includes(activeCheckpoint)) {
        state.seenCheckpoints.push(activeCheckpoint);
        saveState();
      }
      dialog.close();
      video.play();
    });
  }

  function openCheckpoint(checkpoint) {
    const dialog = document.querySelector("#checkpoint-dialog");
    const prompt = document.querySelector("#checkpoint-prompt");
    const options = document.querySelector("#checkpoint-options");
    const feedback = document.querySelector("#checkpoint-feedback");
    const continueButton = document.querySelector("#checkpoint-continue");
    prompt.textContent = checkpoint.prompt;
    feedback.textContent = "";
    continueButton.classList.remove("is-visible");
    options.replaceChildren();
    checkpoint.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => {
        const correct = index === checkpoint.answer;
        feedback.textContent = `${correct ? "Correct. " : "Try again. "}${checkpoint.explanation}`;
        if (correct) continueButton.classList.add("is-visible");
      });
      options.append(button);
    });
    dialog.showModal();
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  renderQuiz();
  setupReadingProgress();
  setupVideo();
  document.querySelector("#finish-quiz")?.addEventListener("click", finishQuiz);
  document.querySelector("#reset-quiz")?.addEventListener("click", resetQuiz);
})();
