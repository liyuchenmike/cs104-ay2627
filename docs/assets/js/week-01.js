(() => {
  "use strict";

  const lessonKey = "cs104-week-01-v1";
  const quizQuestions = [
    {
      id: "q1",
      prompt: "Which sentence is a statement in the logical sense?",
      options: ["Please submit the assignment.", "Is 17 a prime number?", "17 is a prime number.", "Let x be an integer."],
      answer: 2,
      explanation: "A statement asserts something with a truth value. ‘17 is a prime number’ is declarative and true. Commands and questions do not have truth values."
    },
    {
      id: "q2",
      prompt: "Let p be false and q be true. What is the truth value of ¬p ∧ q?",
      options: ["True", "False", "Undefined", "It depends on the wording"],
      answer: 0,
      explanation: "Because p is false, ¬p is true. The conjunction true ∧ true is true."
    },
    {
      id: "q3",
      prompt: "When is the inclusive disjunction p ∨ q false?",
      options: ["Only when both p and q are false", "Whenever exactly one component is false", "Only when both are true", "Whenever p is false"],
      answer: 0,
      explanation: "Inclusive ‘or’ needs at least one true component, so it fails only in the false–false row."
    },
    {
      id: "q4",
      prompt: "Which form is equivalent to ¬(p ∨ q)?",
      options: ["¬p ∨ ¬q", "p ∧ q", "¬p ∧ ¬q", "p → q"],
      answer: 2,
      explanation: "By De Morgan’s law, negating a disjunction negates both components and changes ∨ to ∧."
    },
    {
      id: "q5",
      prompt: "What is enough to prove that two statement forms are not logically equivalent?",
      options: ["One row where their truth values differ", "One row where both are true", "A persuasive example in English", "Different numbers of symbols"],
      answer: 0,
      explanation: "Equivalence requires agreement on every assignment, so one counterexample row disproves it."
    },
    {
      id: "q6",
      prompt: "In which case is p → q false?",
      options: ["p true, q true", "p true, q false", "p false, q true", "p false, q false"],
      answer: 1,
      explanation: "A conditional is broken only when its hypothesis occurs but its promised conclusion does not."
    },
    {
      id: "q7",
      prompt: "Which expression is the negation of p → q?",
      options: ["¬p → ¬q", "¬p ∨ q", "p ∧ ¬q", "q → p"],
      answer: 2,
      explanation: "To falsify the conditional, p must be true while q is false. Therefore ¬(p → q) ≡ p ∧ ¬q."
    },
    {
      id: "q8",
      prompt: "What is the contrapositive of ‘If a number is divisible by 4, then it is even’?",
      options: ["If it is even, then it is divisible by 4.", "If it is not divisible by 4, then it is not even.", "If it is not even, then it is not divisible by 4.", "If it is divisible by 4, then it is not odd."],
      answer: 2,
      explanation: "For p → q, the contrapositive is ¬q → ¬p: reverse the direction and negate both parts."
    },
    {
      id: "q9",
      prompt: "‘You may enter only if you have a ticket.’ Let e mean ‘you may enter’ and t mean ‘you have a ticket.’ Which translation is correct?",
      options: ["t → e", "e → t", "e ∨ t", "e ↔ t"],
      answer: 1,
      explanation: "‘e only if t’ means e → t. Having a ticket is necessary for entry, but the sentence does not say it is sufficient."
    },
    {
      id: "q10",
      prompt: "Which argument uses direct implication?",
      options: ["p → q, q, therefore p", "p → q, ¬p, therefore ¬q", "p → q, p, therefore q", "p ∨ q, p, therefore ¬q"],
      answer: 2,
      explanation: "Direct implication has form p → q, p, therefore q. The first option affirms the conclusion; the second denies the hypothesis—neither is valid in general."
    }
  ];

  const videoCheckpoints = [
    {
      time: 245,
      prompt: "If p is true and q is false, what is p ∧ q?",
      options: ["True", "False"],
      answer: 1,
      explanation: "A conjunction is true only when both components are true."
    },
    {
      time: 655,
      prompt: "Negate: ‘The server is fast or the network is reliable.’",
      options: ["The server is not fast or the network is not reliable.", "The server is not fast and the network is not reliable.", "The server is fast and the network is reliable."],
      answer: 1,
      explanation: "De Morgan’s law changes the disjunction to a conjunction and negates both components."
    },
    {
      time: 980,
      prompt: "Which form is always equivalent to p → q?",
      options: ["q → p", "¬p → ¬q", "¬q → ¬p"],
      answer: 2,
      explanation: "A conditional and its contrapositive always have the same truth values."
    },
    {
      time: 1250,
      prompt: "When testing validity, which truth-table rows are critical?",
      options: ["Rows where the conclusion is false", "Rows where all premises are true", "Rows where at least one premise is false"],
      answer: 1,
      explanation: "Validity asks whether true premises can ever lead to a false conclusion, so first isolate rows where every premise is true."
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
    const answered = quizQuestions.filter(q => state.answers[q.id] !== undefined).length;
    const score = quizQuestions.filter(q => Number(state.answers[q.id]) === q.answer).length;
    state.bestScore = Math.max(state.bestScore || 0, score);
    quizQuestions.forEach(q => {
      if (state.answers[q.id] !== undefined) state.checked[q.id] = true;
    });
    saveState();
    renderQuiz();

    const result = document.querySelector("#quiz-result");
    result.classList.add("is-visible");
    if (answered < quizQuestions.length) {
      result.innerHTML = `<strong>${score}/${quizQuestions.length}</strong><p>You answered ${answered} of ${quizQuestions.length}. Complete the remaining questions, then calculate again. Best score: ${state.bestScore}/${quizQuestions.length}.</p>`;
    } else {
      const guidance = score >= 8
        ? "Strong work. Explain one conditional equivalence aloud to make the knowledge more durable."
        : score >= 6
          ? "Good foundation. Review the explanations for conditionals and equivalence, then retry."
          : "Revisit the truth-table and conditional sections, work through the examples, then retry without looking at your previous answers.";
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
        openCheckpoint(next, activeCheckpoint);
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
