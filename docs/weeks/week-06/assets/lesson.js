(() => {
  "use strict";

  const lessonKey = "cs104-week-06-v1";
  const quizQuestions = [
  {
    "id": "q1",
    "prompt": "A relation from A to B is always…",
    "options": [
      "a function from A to B",
      "a subset of A × B",
      "equal to A × B",
      "a subset of A ∩ B"
    ],
    "answer": 1,
    "explanation": "A relation selects any subset of ordered pairs from the product. It need not assign every source element exactly one output."
  },
  {
    "id": "q2",
    "prompt": "For R = {(1, a), (1, b), (3, a)}, what are its domain and range?",
    "options": [
      "{1, 2, 3} and {a, b, c}",
      "{a, b} and {1, 3}",
      "{1, 3} and {a, b}",
      "{1} and {a}"
    ],
    "answer": 2,
    "explanation": "The domain contains first coordinates that occur; the range contains second coordinates that occur."
  },
  {
    "id": "q3",
    "prompt": "For 4x² + y² = 16 over ℝ², which gives the domain and range?",
    "options": [
      "[−2, 2] and [−4, 4]",
      "[−4, 4] and [−2, 2]",
      "(−2, 2) and (−4, 4)",
      "ℝ and ℝ"
    ],
    "answer": 0,
    "explanation": "Real partners exist exactly for |x| ≤ 2 and |y| ≤ 4. Equality is allowed, so the endpoints are included."
  },
  {
    "id": "q4",
    "prompt": "Which proves that a relation is not transitive?",
    "options": [
      "A missing loop alone",
      "A pair whose reverse is missing",
      "Three unrelated elements",
      "(a, b) and (b, c) are present, but (a, c) is absent"
    ],
    "answer": 3,
    "explanation": "A transitivity counterexample must make both hypotheses true and the required direct pair false."
  },
  {
    "id": "q5",
    "prompt": "On A = {1, 2}, which properties does R = {(1, 1)} have?",
    "options": [
      "Reflexive and symmetric, but not transitive",
      "Symmetric and transitive, but not reflexive",
      "Reflexive and transitive, but not symmetric",
      "None of the three"
    ],
    "answer": 1,
    "explanation": "The only pair reverses to itself and the only available two-step path has its direct pair. The missing (2, 2) prevents reflexivity on A."
  },
  {
    "id": "q6",
    "prompt": "Which is an equivalence relation on its stated domain?",
    "options": [
      "Less than on ℝ",
      "Divisibility on ℤ",
      "a T b iff a − b is an integer, on ℚ",
      "a R b iff a = b + 1, on ℤ"
    ],
    "answer": 2,
    "explanation": "Integer difference is reflexive, symmetric and transitive because 0 is an integer and integers are closed under negation and addition."
  },
  {
    "id": "q7",
    "prompt": "If [a] and [b] share one element for an equivalence relation, what follows?",
    "options": [
      "[a] = [b]",
      "a = b",
      "Both classes are singletons",
      "They may still be different overlapping classes"
    ],
    "answer": 0,
    "explanation": "A shared x gives x R a and x R b. Symmetry and transitivity imply a R b, hence equality of the classes. Representatives need not be equal."
  },
  {
    "id": "q8",
    "prompt": "How many equivalence relations are there on {a, b, c}?",
    "options": [
      "Three",
      "Six",
      "Eight",
      "Five"
    ],
    "answer": 3,
    "explanation": "There is one partition into singletons, three choices of a pair plus a singleton, and one partition with all three together."
  },
  {
    "id": "q9",
    "prompt": "Why are addition and multiplication of congruence classes well-defined?",
    "options": [
      "Every class has one integer",
      "Equivalent representatives produce equivalent results",
      "The modulus must be prime",
      "All representatives give equal integers"
    ],
    "answer": 1,
    "explanation": "Changing representatives may change the integer result but preserves its congruence class. The proofs use divisibility of the relevant differences."
  },
  {
    "id": "q10",
    "prompt": "What is the remainder when 7319 is divided by 9?",
    "options": [
      "0",
      "1",
      "2",
      "8"
    ],
    "answer": 2,
    "explanation": "7319 ≡ 7 + 3 + 1 + 9 = 20 ≡ 2 (mod 9), because every power of ten is congruent to one modulo nine."
  }
];

  const videoCheckpoints = [
  {
    "afterChapter": "Domain and range",
    "prompt": "For a relation, which source elements belong to its domain?",
    "options": [
      "Every element in the ambient source set",
      "Only elements related to themselves",
      "Elements that occur as a first coordinate in some pair"
    ],
    "answer": 2,
    "explanation": "A source element belongs to dom(R) exactly when it has at least one partner."
  },
  {
    "afterChapter": "Testing relation properties",
    "prompt": "Why does symmetry plus transitivity fail to guarantee reflexivity?",
    "options": [
      "An arbitrary element may have no related partner",
      "Symmetry forbids loops",
      "Transitivity requires all variables to differ"
    ],
    "answer": 0,
    "explanation": "The invalid proof assumes x R y without establishing that a suitable y exists for every x."
  },
  {
    "afterChapter": "Equivalence relations",
    "prompt": "What makes a relation an equivalence relation?",
    "options": [
      "Symmetry alone",
      "Reflexivity, symmetry and transitivity together",
      "Having finitely many pairs"
    ],
    "answer": 1,
    "explanation": "All three properties are required, regardless of the size of the set."
  },
  {
    "afterChapter": "Why classes partition a set",
    "prompt": "Can two distinct equivalence classes share an element?",
    "options": [
      "Yes, if the representatives differ",
      "Yes, if the set is infinite",
      "No: any overlap forces the classes to be equal"
    ],
    "answer": 2,
    "explanation": "A shared element and symmetry and transitivity connect the representatives, so their classes coincide."
  },
  {
    "afterChapter": "Congruence classes and operations",
    "prompt": "Modulo five, why do representatives 6 and 8 give the same sum class as 1 and 3?",
    "options": [
      "14 and 4 differ by a multiple of 5",
      "14 equals 4 as an integer",
      "All integers belong to one class"
    ],
    "answer": 0,
    "explanation": "6 ≡ 1 and 8 ≡ 3 (mod 5), so their sums are congruent: [14]₅ = [4]₅."
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
        ? "Strong work. Choose an equivalence relation and explain why its distinct classes form a partition."
        : score >= 6
          ? "Good foundation. Review the three relation properties and the proofs about classes, then retry."
          : "Revisit relation counterexamples, partitions and modular arithmetic, then retry without looking at your previous answers.";
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
