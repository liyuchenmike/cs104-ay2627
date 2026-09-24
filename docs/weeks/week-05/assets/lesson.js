(() => {
  "use strict";

  const lessonKey = "cs104-week-05-v1";
  const quizQuestions = [
  {
    "id": "q1",
    "prompt": "Which statement is correct for A = {1, 2}?",
    "options": [
      "{1} ∈ A",
      "1 ⊆ A",
      "{1} ⊆ A",
      "∅ = {∅}"
    ],
    "answer": 2,
    "explanation": "The singleton {1} is a subset because its only element belongs to A. Membership and containment compare different kinds of objects."
  },
  {
    "id": "q2",
    "prompt": "What disproves A ⊆ B?",
    "options": [
      "An element in B but not A",
      "An element in A but not B",
      "An element in both sets",
      "An element outside both sets"
    ],
    "answer": 1,
    "explanation": "Containment fails exactly when an element of A is missing from B."
  },
  {
    "id": "q3",
    "prompt": "Let A = {x ∈ ℤ | 4 | x²} and B = {x ∈ ℤ | 4 | x}. Which proves A ⊈ B?",
    "options": [
      "x = 4",
      "x = 1",
      "x = 0",
      "x = 2"
    ],
    "answer": 3,
    "explanation": "For x = 2, four divides x² = 4 but does not divide x = 2."
  },
  {
    "id": "q4",
    "prompt": "Which expression always equals (A ∪ B)ᶜ for a fixed universe?",
    "options": [
      "Aᶜ ∩ Bᶜ",
      "Aᶜ ∪ Bᶜ",
      "A ∩ B",
      "A − B"
    ],
    "answer": 0,
    "explanation": "To lie outside the union, an element must lie outside both sets. This is De Morgan’s law."
  },
  {
    "id": "q5",
    "prompt": "If A = {1, 2} and B = {u, v, w}, which statement is true?",
    "options": [
      "A × B has five elements",
      "(u, 1) belongs to A × B",
      "A × B has six ordered pairs",
      "A × B = A ∩ B"
    ],
    "answer": 2,
    "explanation": "There are two choices for the first coordinate and three for the second, giving six ordered pairs."
  },
  {
    "id": "q6",
    "prompt": "Why does 1/x fail to define a function ℝ → ℝ?",
    "options": [
      "Two inputs share an output",
      "It is undefined at the domain element 0",
      "Its outputs are not integers",
      "Its range contains 0"
    ],
    "answer": 1,
    "explanation": "Every domain element must have exactly one codomain output. Zero has no real reciprocal."
  },
  {
    "id": "q7",
    "prompt": "What are ⌊−1.9⌋ and ⌈−1.9⌉, respectively?",
    "options": [
      "−1 and −2",
      "−2 and −2",
      "−1 and −1",
      "−2 and −1"
    ],
    "answer": 3,
    "explanation": "Floor is the greatest integer at most the input; ceiling is the least integer at least the input."
  },
  {
    "id": "q8",
    "prompt": "For f(x) = x² with f: ℝ → ℝ, what are the range and the preimage set of 4?",
    "options": [
      "[0, ∞) and {−2, 2}",
      "ℝ and {2}",
      "(0, ∞) and {−2, 2}",
      "[0, ∞) and {4}"
    ],
    "answer": 0,
    "explanation": "Squares give exactly the nonnegative real outputs, and x² = 4 has both real solutions −2 and 2."
  },
  {
    "id": "q9",
    "prompt": "Which is the standard proof of injectivity?",
    "options": [
      "Start with a target and find one input",
      "Show two inputs have different outputs once",
      "Assume f(x) = f(y) for arbitrary domain elements and derive x = y",
      "Show the codomain is nonempty"
    ],
    "answer": 2,
    "explanation": "Equal outputs forcing equal inputs is the contrapositive of distinct inputs having distinct outputs."
  },
  {
    "id": "q10",
    "prompt": "Which version of g(x) = x² + 1 is bijective?",
    "options": [
      "ℝ → ℝ",
      "ℝ⁺ → (1, ∞)",
      "ℝ → [1, ∞)",
      "ℝ⁺ → ℝ"
    ],
    "answer": 1,
    "explanation": "Positive inputs remove the ± collision, and every b > 1 has the positive preimage √(b − 1)."
  }
];

  const videoCheckpoints = [
  {
    "afterChapter": "Subsets and equality",
    "prompt": "What is needed to prove A = B?",
    "options": [
      "A ⊆ B only",
      "Both A ⊆ B and B ⊆ A",
      "One element common to A and B"
    ],
    "answer": 1,
    "explanation": "Set equality requires every member of each set to belong to the other."
  },
  {
    "afterChapter": "Set operations",
    "prompt": "Which region describes A − B?",
    "options": [
      "In A and outside B",
      "In B and outside A",
      "In either A or B"
    ],
    "answer": 0,
    "explanation": "Difference keeps the first set’s elements that do not belong to the second."
  },
  {
    "afterChapter": "Cartesian products",
    "prompt": "What must (x, y) satisfy to belong to A × B?",
    "options": [
      "x and y must be equal",
      "x ∈ B and y ∈ A",
      "x ∈ A and y ∈ B"
    ],
    "answer": 2,
    "explanation": "An ordered pair checks its first and second coordinates against the corresponding factors."
  },
  {
    "afterChapter": "Images, preimages and range",
    "prompt": "How does a function’s range compare with its codomain?",
    "options": [
      "They must always be equal",
      "The range is a subset of the codomain",
      "The range must contain the codomain"
    ],
    "answer": 1,
    "explanation": "The range collects outputs actually reached, all of which must lie in the declared codomain."
  },
  {
    "afterChapter": "Injection",
    "prompt": "What disproves injectivity?",
    "options": [
      "A codomain value with no preimage",
      "Two distinct inputs with the same output",
      "One input with one output"
    ],
    "answer": 1,
    "explanation": "A collision between distinct domain elements is precisely the negation of injectivity."
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
        ? "Strong work. Choose a function and write separate injection and surjection arguments."
        : score >= 6
          ? "Good foundation. Review subset proofs, domain restrictions and preimages, then retry."
          : "Revisit the set identities and function classification examples, then retry without looking at your previous answers.";
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
