(() => {
  "use strict";

  const lessonKey = "cs104-week-10-v1";
  const quizQuestions = [
  {
    "id": "q1",
    "prompt": "If aₙ = 2n starts at n = 0, what is a₃?",
    "options": [
      "3",
      "6",
      "8",
      "The sequence has no third index"
    ],
    "answer": 1,
    "explanation": "Substitute n = 3 into the explicit formula: a₃ = 2·3 = 6. The index-zero convention makes a₀ the first term."
  },
  {
    "id": "q2",
    "prompt": "How many terms are in Σ from k = 0 to n of aₖ?",
    "options": [
      "n",
      "n + 1",
      "n − 1",
      "2n"
    ],
    "answer": 1,
    "explanation": "Both endpoints are included: indices 0, 1, …, n give n + 1 terms."
  },
  {
    "id": "q3",
    "prompt": "What is Σ from k = 1 to n of 1/[k(k + 1)]?",
    "options": [
      "1/(n + 1)",
      "n/(n + 1)",
      "n + 1",
      "1 − 1/n"
    ],
    "answer": 1,
    "explanation": "Since 1/[k(k + 1)] = 1/k − 1/(k + 1), the interior terms cancel, leaving 1 − 1/(n + 1) = n/(n + 1)."
  },
  {
    "id": "q4",
    "prompt": "What is 2 + 5 + 8 + ⋯ + 302?",
    "options": [
      "15,200",
      "15,352",
      "15,504",
      "30,704"
    ],
    "answer": 1,
    "explanation": "The difference is 3, so there are (302 − 2)/3 + 1 = 101 terms. Their average is (2 + 302)/2 = 152, giving 101·152 = 15,352."
  },
  {
    "id": "q5",
    "prompt": "If aₙ = a₀rⁿ and r = 1, what is Σ from k = 0 to n of aₖ?",
    "options": [
      "a₀",
      "(n + 1)a₀",
      "a₀/(r − 1)",
      "0"
    ],
    "answer": 1,
    "explanation": "All n + 1 terms equal a₀. The geometric-fraction formula cannot be used because its denominator r − 1 is zero."
  },
  {
    "id": "q6",
    "prompt": "What is Π from k = 1 to n of k/(k + 1)?",
    "options": [
      "n + 1",
      "n/(n + 1)",
      "1/(n + 1)",
      "1/n"
    ],
    "answer": 2,
    "explanation": "The factors (1/2)(2/3)⋯[n/(n + 1)] cancel in the middle, leaving 1/(n + 1)."
  },
  {
    "id": "q7",
    "prompt": "With j = k + 1, which bounds replace k = 1 through n?",
    "options": [
      "j = 1 through n",
      "j = 0 through n − 1",
      "j = 2 through n + 1",
      "j = 2 through n"
    ],
    "answer": 2,
    "explanation": "Substitute the old endpoints into j = k + 1: k = 1 gives j = 2, and k = n gives j = n + 1."
  },
  {
    "id": "q8",
    "prompt": "Which statement correctly defines xₙ → L?",
    "options": [
      "For one ε > 0, some term is near L",
      "There is one K that works only for a selected n",
      "For every ε > 0, there is K so all n ≥ K satisfy |xₙ − L| < ε",
      "Every term must equal L"
    ],
    "answer": 2,
    "explanation": "Choose any positive ε, then find a threshold K that controls every term of the tail."
  },
  {
    "id": "q9",
    "prompt": "What is the limit of [n/(1 + 2n)]⁵ as n → ∞?",
    "options": [
      "0",
      "1/2",
      "1/32",
      "5/2"
    ],
    "answer": 2,
    "explanation": "Divide the inner fraction by n: 1/(1/n + 2) → 1/2. The fifth-power rule gives (1/2)⁵ = 1/32."
  },
  {
    "id": "q10",
    "prompt": "The deck includes 0 in ℕ. What is the limit of c/nᵏ when k = 0 and n ≥ 1?",
    "options": [
      "0 for every c",
      "c",
      "∞ for every c",
      "Undefined for every n"
    ],
    "answer": 1,
    "explanation": "For k = 0, n⁰ = 1 and c/n⁰ = c. The zero-limit statement on slide 28 needs the condition k ≥ 1."
  }
];

  const videoCheckpoints = [
  {
    "afterChapter": "Sequences and explicit formulas",
    "prompt": "If aₙ = 2n and indexing starts at zero, what is the first term?",
    "options": [
      "0",
      "2",
      "n cannot be zero"
    ],
    "answer": 0,
    "explanation": "The first index is n = 0, so a₀ = 2·0 = 0."
  },
  {
    "afterChapter": "Summation and telescoping",
    "prompt": "What survives when Σ from k = 1 to n of 1/[k(k + 1)] telescopes?",
    "options": [
      "Only 1/(n + 1)",
      "1 − 1/(n + 1)",
      "All interior fractions"
    ],
    "answer": 1,
    "explanation": "Writing 1/k − 1/(k + 1) makes the interior terms cancel; the two boundary pieces remain."
  },
  {
    "afterChapter": "Products and reindexing",
    "prompt": "When j = k + 1 and k runs from 1 through n, which j values are included?",
    "options": [
      "1 through n",
      "2 through n + 1",
      "0 through n − 1"
    ],
    "answer": 1,
    "explanation": "Both bounds shift by one with the index: the terms remain 1/2 through 1/(n + 1)."
  },
  {
    "afterChapter": "Epsilon neighborhoods and limits",
    "prompt": "After ε > 0 is given, what must the chosen K guarantee?",
    "options": [
      "One term xₖ is close to L",
      "Every term with n ≥ K is within ε of L",
      "Only the first K terms are close"
    ],
    "answer": 1,
    "explanation": "Convergence controls the entire tail of the sequence, with K allowed to depend on ε."
  },
  {
    "afterChapter": "Proving convergence and divergence",
    "prompt": "Why does 1 + (−1)ⁿ have no limit?",
    "options": [
      "It grows without bound",
      "Its even and odd terms remain 2 and 0 arbitrarily late",
      "It has no explicit formula"
    ],
    "answer": 1,
    "explanation": "The persistent gap between the two subsequences prevents all late terms from approaching one target."
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
        ? "Strong work. Pick a new sequence and justify its limit using either a threshold or a valid limit law."
        : score >= 6
          ? "Good foundation. Review term counts, reindexing, and the order of the limit quantifiers, then retry."
          : "Revisit the sum and product examples, the epsilon definition, and the conditions on limit laws, then retry.";
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
