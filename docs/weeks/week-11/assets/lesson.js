(() => {
  "use strict";

  const lessonKey = "cs104-week-11-v1";
  const quizQuestions = [
  {
    "id": "q1",
    "prompt": "If a₀ = 2 and aₙ = aₙ₋₁ + 3 for n ≥ 1, what is a₂?",
    "options": [
      "2",
      "5",
      "8",
      "11"
    ],
    "answer": 2,
    "explanation": "Apply the rule twice: a₁ = 5 and a₂ = 8. The starting value is part of the definition."
  },
  {
    "id": "q2",
    "prompt": "With this lecture's Fibonacci values f₀ = f₁ = 1, what is f₄?",
    "options": [
      "3",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "The terms are 1, 1, 2, 3, 5 at indices 0 through 4."
  },
  {
    "id": "q3",
    "prompt": "Which recurrence counts rabbit pairs under the slide's no-death and maturity rules?",
    "options": [
      "rₙ = rₙ₋₁ + rₙ₋₂",
      "rₙ = 2rₙ₋₁",
      "rₙ = rₙ₋₁ − rₙ₋₂",
      "rₙ = n·rₙ₋₁"
    ],
    "answer": 0,
    "explanation": "Last month's pairs remain alive, and the newborn pairs come from those counted two months earlier."
  },
  {
    "id": "q4",
    "prompt": "Why does the minimum Hanoi move count satisfy mₖ = 2mₖ₋₁ + 1?",
    "options": [
      "Each disk must move exactly twice",
      "Two smaller-tower transfers surround one move of the largest disk",
      "The spare pole is used only once",
      "The recurrence counts poles rather than moves"
    ],
    "answer": 1,
    "explanation": "Move the k − 1 smaller disks aside, move the largest disk once, then move the smaller stack back."
  },
  {
    "id": "q5",
    "prompt": "How many ordered ways can you climb three stairs using one- and two-stair moves?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "The routes are 1 + 1 + 1, 1 + 2, and 2 + 1."
  },
  {
    "id": "q6",
    "prompt": "Which rule is second-order linear homogeneous with constant coefficients and B ≠ 0?",
    "options": [
      "eₖ = 2eₖ₋₂",
      "bₖ = bₖ₋₁ + bₖ₋₂ + bₖ₋₃",
      "dₖ = dₖ₋₁² + dₖ₋₂",
      "fₖ = 2fₖ₋₁ + 1"
    ],
    "answer": 0,
    "explanation": "It fits A = 0 and B = 2. The other rules are third-order, nonlinear, or nonhomogeneous."
  },
  {
    "id": "q7",
    "prompt": "What is the characteristic equation for aₖ = aₖ₋₁ + 2aₖ₋₂?",
    "options": [
      "t² + t + 2 = 0",
      "t² − t − 2 = 0",
      "t² − t + 2 = 0",
      "t − 3 = 0"
    ],
    "answer": 1,
    "explanation": "Substitute aₖ = tᵏ and move both right-side terms left: t² − t − 2 = 0."
  },
  {
    "id": "q8",
    "prompt": "If a second-order characteristic equation has distinct roots r and s, what form uses both?",
    "options": [
      "aₖ = C + Dk",
      "aₖ = C rᵏ + D sᵏ",
      "aₖ = C rᵏ + D k rᵏ",
      "aₖ = (r + s)ᵏ only"
    ],
    "answer": 1,
    "explanation": "The distinct-root theorem combines two different power sequences; a₀ and a₁ determine C and D."
  },
  {
    "id": "q9",
    "prompt": "With φ = (1 + √5)/2 and ψ = (1 − √5)/2, which formula matches f₀ = f₁ = 1?",
    "options": [
      "fₖ = (φᵏ − ψᵏ)/√5",
      "fₖ = (φᵏ⁺¹ − ψᵏ⁺¹)/√5",
      "fₖ = (φᵏ⁺¹ + ψᵏ⁺¹)/√5",
      "fₖ = φᵏ⁺¹ − ψᵏ⁺¹"
    ],
    "answer": 1,
    "explanation": "This deck's Fibonacci indexing is shifted one place from the zero-one convention, so the exponents are k + 1."
  },
  {
    "id": "q10",
    "prompt": "For a repeated characteristic root r = 2, which form has two independent constants?",
    "options": [
      "aₖ = C·2ᵏ + D·k·2ᵏ",
      "aₖ = C·2ᵏ + D·2ᵏ",
      "aₖ = C + D·2ᵏ",
      "aₖ = C·2ᵏ + D·(−2)ᵏ"
    ],
    "answer": 0,
    "explanation": "A repeated root needs the additional solution k·2ᵏ; two copies of 2ᵏ collapse into one constant."
  }
];

  const videoCheckpoints = [
  {
    "afterChapter": "Recursive descriptions",
    "prompt": "Why does a recurrence need an initial condition?",
    "options": [
      "It selects the starting sequence that the rule continues",
      "It changes the rule at every step",
      "It removes the need to calculate later terms"
    ],
    "answer": 0,
    "explanation": "The same recurrence can generate different sequences from different starting values."
  },
  {
    "afterChapter": "Fibonacci and rabbits",
    "prompt": "What does rₙ count in the rabbit model, and how does it start?",
    "options": [
      "Individual rabbits, with r₀ = 0 and r₁ = 1",
      "Rabbit pairs, with r₀ = r₁ = 1",
      "Newborn pairs only, with no starting value"
    ],
    "answer": 1,
    "explanation": "The slide counts pairs alive; its two initial values are both one."
  },
  {
    "afterChapter": "Tower of Hanoi",
    "prompt": "What contributes the +1 in mₖ = 2mₖ₋₁ + 1?",
    "options": [
      "The move of the largest disk",
      "The spare pole itself",
      "An extra small-disk transfer"
    ],
    "answer": 0,
    "explanation": "The two recursive smaller-tower transfers surround exactly one largest-disk move."
  },
  {
    "afterChapter": "Characteristic equation",
    "prompt": "Which quadratic follows from aₖ = A aₖ₋₁ + B aₖ₋₂ and aₖ = tᵏ?",
    "options": [
      "t² − At − B = 0",
      "t² + At + B = 0",
      "t² − At + B = 0"
    ],
    "answer": 0,
    "explanation": "Divide the substituted equation by tᵏ⁻², then move both right-side terms to the left."
  },
  {
    "afterChapter": "Fibonacci explicit formula",
    "prompt": "Why does this lecture's Fibonacci formula use the exponent k + 1?",
    "options": [
      "Because the rule starts with f₀ = f₁ = 1",
      "Because all recurrences require a shift",
      "Because the characteristic equation has one root"
    ],
    "answer": 0,
    "explanation": "The one-and-one indexing is shifted from the familiar zero-one sequence; the exponent shift makes f₀ and f₁ both one."
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
    try { localStorage.setItem(lessonKey, JSON.stringify(state)); } catch (_error) { /* Practice remains usable when storage is unavailable. */ }
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
        ? "Strong work. Derive a recurrence from a new counting story, then solve a characteristic equation using its starting values."
        : score >= 6
          ? "Good foundation. Review the initial values, recurrence models and root cases, then retry."
          : "Revisit the recursive models and characteristic-root examples, then retry without looking at your previous answers.";
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

  async function loadChapters() {
    const container = document.querySelector("#chapter-list");
    if (!container) return;
    try {
      const response = await fetch("assets/chapters.json");
      if (!response.ok) throw new Error("Chapter data unavailable");
      const chapterData = await response.json();
      const chapters = Array.isArray(chapterData) ? chapterData : chapterData.chapters;
      if (!Array.isArray(chapters)) throw new Error("Chapter data is invalid");
      videoCheckpoints.forEach(checkpoint => {
        const index = chapters.findIndex(chapter => chapter.title === checkpoint.afterChapter);
        checkpoint.time = index >= 0 && chapters[index + 1] ? chapters[index + 1].time : null;
      });
      container.replaceChildren();
      chapters.forEach(chapter => {
        const button = document.createElement("button");
        button.className = "chapter-button";
        button.type = "button";
        button.dataset.time = String(chapter.time);
        button.textContent = `${formatTime(chapter.time)} · ${chapter.title}`;
        container.append(button);
      });
    } catch (_error) {
      // The first chapter remains available when the optional chapter file cannot load.
    }
  }

  function setupVideo() {
    const video = document.querySelector("#lecture-video");
    if (!video) return;
    const status = document.querySelector("#video-status");
    const dialog = document.querySelector("#checkpoint-dialog");
    const chapterList = document.querySelector("#chapter-list");
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
      const next = videoCheckpoints.find((checkpoint, index) => {
        const checkpointTime = checkpoint.time;
        if (!Number.isFinite(checkpointTime)) return false;
        return video.currentTime >= checkpointTime &&
          video.currentTime < checkpointTime + 2 &&
          !state.seenCheckpoints.includes(index);
      });
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

    chapterList?.addEventListener("click", event => {
      const button = event.target.closest(".chapter-button");
      if (!button) return;
      const targetTime = Number(button.dataset.time);
      if (!Number.isFinite(targetTime)) return;
      const seekAndPlay = () => {
        video.currentTime = Math.min(targetTime, Math.max(0, video.duration - 0.25));
        status.textContent = `Playing from ${formatTime(targetTime)}.`;
        const playPromise = video.play();
        playPromise?.catch(() => {
          status.textContent = `Ready at ${formatTime(targetTime)}—press play to continue.`;
        });
      };
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) seekAndPlay();
      else video.addEventListener("loadedmetadata", seekAndPlay, { once: true });
    });

    const resumeAfterCheckpoint = () => {
      if (activeCheckpoint !== null && !state.seenCheckpoints.includes(activeCheckpoint)) {
        state.seenCheckpoints.push(activeCheckpoint);
        saveState();
      }
      activeCheckpoint = null;
      dialog.close();
      video.play()?.catch(() => {
        status.textContent = "Press play to continue the lecture.";
      });
    };
    document.querySelector("#checkpoint-continue").addEventListener("click", resumeAfterCheckpoint);
    document.querySelector("#checkpoint-skip").addEventListener("click", resumeAfterCheckpoint);
    dialog.addEventListener("cancel", event => {
      event.preventDefault();
      resumeAfterCheckpoint();
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
  loadChapters();
  document.querySelector("#finish-quiz")?.addEventListener("click", finishQuiz);
  document.querySelector("#reset-quiz")?.addEventListener("click", resetQuiz);
})();
