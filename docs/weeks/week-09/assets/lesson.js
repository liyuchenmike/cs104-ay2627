(() => {
  "use strict";

  const lessonKey = "cs104-week-09-v1";
  const quizQuestions = [
  {
    "id": "q1",
    "prompt": "Which two facts are required for ordinary induction from n = 1?",
    "options": [
      "P(1) and P(2) only",
      "P(1), and P(k) ⇒ P(k + 1) for every k ≥ 1",
      "P(k + 1) alone for one k",
      "A pattern seen in many examples"
    ],
    "answer": 1,
    "explanation": "A valid first case starts the chain, and a universal successor step carries each established case to the next."
  },
  {
    "id": "q2",
    "prompt": "What is 1 + 2 + ⋯ + n for every positive integer n?",
    "options": [
      "n²/2",
      "n(n − 1)/2",
      "n(n + 1)/2",
      "2n + 1"
    ],
    "answer": 2,
    "explanation": "The arithmetic-sum identity starts at n = 1 and extends by adding the next term n + 1."
  },
  {
    "id": "q3",
    "prompt": "For r = 1, what is 1 + r + ⋯ + rⁿ?",
    "options": [
      "1",
      "n + 1",
      "0",
      "The fraction (rⁿ⁺¹ − 1)/(r − 1)"
    ],
    "answer": 1,
    "explanation": "There are n + 1 terms, each equal to 1. The displayed geometric fraction is undefined when r = 1."
  },
  {
    "id": "q4",
    "prompt": "In the sum-of-squares proof, what must be added to the hypothesis for the first k squares?",
    "options": [
      "k²",
      "(k + 1)²",
      "2k + 1",
      "(k + 1)(k + 2)/2"
    ],
    "answer": 1,
    "explanation": "The next partial sum contains the first k squares plus exactly the new square (k + 1)²."
  },
  {
    "id": "q5",
    "prompt": "If 2²ᵏ − 1 = 3m, what does the next divisibility step show?",
    "options": [
      "2²⁽ᵏ⁺¹⁾ − 1 = 3(4m + 1)",
      "2²⁽ᵏ⁺¹⁾ − 1 = 3m + 1",
      "2²⁽ᵏ⁺¹⁾ − 1 = 4m",
      "The claim needs no base case"
    ],
    "answer": 0,
    "explanation": "Multiplying 2²ᵏ by 4 gives 4(3m + 1) − 1 = 3(4m + 1), an integer multiple of three."
  },
  {
    "id": "q6",
    "prompt": "What fails in the slide claiming 1 + ⋯ + n = (n² + n + 1)/2?",
    "options": [
      "The successor algebra only works for even n",
      "The base n = 1 is false",
      "The claim is actually true",
      "The hypothesis cannot mention k"
    ],
    "answer": 1,
    "explanation": "At n = 1, the left side is 1 and the right side is 3/2. A formal step cannot rescue a false starting case."
  },
  {
    "id": "q7",
    "prompt": "Where does the faulty “all cows have the same color” step first break?",
    "options": [
      "At 1 → 2, the two one-cow groups have no common cow",
      "At 2 → 3, every cow changes color",
      "The one-cow base is false",
      "The groups always overlap"
    ],
    "answer": 0,
    "explanation": "The proof assumes an overlapping cow to connect the groups, but its first two one-cow groups are disjoint."
  },
  {
    "id": "q8",
    "prompt": "Which hypothesis may a strong-induction step use to prove P(k + 1)?",
    "options": [
      "Only P(k + 1)",
      "Only P(1)",
      "All P(1), P(2), …, P(k)",
      "Any unproved later case"
    ],
    "answer": 2,
    "explanation": "Strong induction supplies every earlier case through k, provided the proof has a valid base."
  },
  {
    "id": "q9",
    "prompt": "Why can the continued-fraction proof apply induction to d/r when a = qd + r and 0 < r < d?",
    "options": [
      "Its numerator is always smaller than a",
      "It is an integer",
      "Its positive denominator r is smaller than d",
      "Its denominator equals d"
    ],
    "answer": 2,
    "explanation": "The induction is on denominator. The remainder satisfies 1 ≤ r < d, so d/r has a smaller positive denominator."
  },
  {
    "id": "q10",
    "prompt": "For s₀ = 0, s₁ = 4 and sₖ = 6sₖ₋₁ − 5sₖ₋₂ for k ≥ 2, which bases start a proof of sₙ = 5ⁿ − 1?",
    "options": [
      "Only n = 0",
      "Only n = 1",
      "n = 0 and n = 1",
      "n = 2 and n = 3"
    ],
    "answer": 2,
    "explanation": "The recurrence uses two preceding terms. Check both n = 0 and n = 1 before deriving the next case."
  }
];

  const videoCheckpoints = [
  {
    "afterChapter": "The induction principle",
    "prompt": "What must you establish before repeatedly applying the induction step?",
    "options": [
      "A valid first case in the claimed range",
      "Only that P(k + 1) looks plausible",
      "All large cases individually"
    ],
    "answer": 0,
    "explanation": "Without a true starting case, a valid conditional step proves no case of the target chain."
  },
  {
    "afterChapter": "Sum of squares",
    "prompt": "After assuming the square-sum formula through k, what is the next expression to simplify?",
    "options": [
      "The same k-term sum",
      "The k-term sum plus (k + 1)²",
      "The k-term sum plus k²"
    ],
    "answer": 1,
    "explanation": "Separate the old sum, where the hypothesis applies, from the one new square."
  },
  {
    "afterChapter": "Faulty induction proofs",
    "prompt": "What is the first failure in the “all cows have the same color” argument?",
    "options": [
      "The base for one cow is false",
      "Two one-cow groups at the 1 → 2 step do not overlap",
      "Every group of three has different colors"
    ],
    "answer": 1,
    "explanation": "The step relies on an overlapping cow; it has none when k = 1."
  },
  {
    "afterChapter": "Strong induction and binary sums",
    "prompt": "In N = 2ʲ + m with 2ʲ the largest power below N, why may we use the strong induction hypothesis for m?",
    "options": [
      "m = N",
      "1 ≤ m < 2ʲ ≤ N − 1",
      "The remainder has already been proved separately"
    ],
    "answer": 1,
    "explanation": "The positive remainder is strictly smaller than N, so its statement is among the earlier cases."
  },
  {
    "afterChapter": "Multiple base cases",
    "prompt": "Why does a three-term recurrence require three initial cases for an induction proof?",
    "options": [
      "The next step can depend on three preceding claims",
      "Every induction theorem always needs three bases",
      "A single base proves only odd indices"
    ],
    "answer": 0,
    "explanation": "The available bases must match the backward dependencies in the first recurrence step."
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
        ? "Strong work. Choose a new identity and write its base case and induction step without looking at a model proof."
        : score >= 6
          ? "Good foundation. Review how the hypothesis becomes the next case, then retry."
          : "Revisit the base case, step, strong induction, and multiple-base examples, then retry without looking at your previous answers.";
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
