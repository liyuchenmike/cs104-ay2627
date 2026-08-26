(() => {
  "use strict";

  const lessonKey = "cs104-week-03-v1";
  const quizQuestions = [
    {
      id: "q1",
      prompt: "Which expression correctly defines an odd integer a?",
      options: ["a = 2k for some k ∈ ℤ", "a = 2k + 1 for some k ∈ ℤ", "a = k/2 for some k ∈ ℤ", "a = 2k + 1 for every k ∈ ℤ"],
      answer: 1,
      explanation: "An integer is odd exactly when it can be written as 2k + 1 for some integer k."
    },
    {
      id: "q2",
      prompt: "In the proof x² = 4k², what justifies the conclusion 4 | x²?",
      options: ["Every square is divisible by four", "k² is an integer, so x² is four times an integer", "x² is positive", "The factor k² can be cancelled"],
      answer: 1,
      explanation: "Divisibility requires the form x² = 4q for an integer q. Here q = k², which is an integer."
    },
    {
      id: "q3",
      prompt: "To refute a universal conditional p(x) → q(x), what must a counterexample do?",
      options: ["Make p and q both false", "Make p false and q true", "Make p true and q false", "Make p and q both true"],
      answer: 2,
      explanation: "A conditional is false only when its hypothesis is true and its conclusion is false."
    },
    {
      id: "q4",
      prompt: "What is the contrapositive of ‘if n² is even, then n is even’ ?",
      options: ["If n is even, then n² is even", "If n² is odd, then n is odd", "If n is odd, then n² is odd", "If n is not even, then n² is even"],
      answer: 2,
      explanation: "Reverse and negate both parts: if n is not even—that is, odd—then n² is not even—that is, odd."
    },
    {
      id: "q5",
      prompt: "If n = 2k + 1, which form proves that n² is odd?",
      options: ["n² = 2(k² + 1)", "n² = 4k² + 1", "n² = 2(2k² + 2k) + 1", "n² = 2k² + 1"],
      answer: 2,
      explanation: "Expanding gives 4k² + 4k + 1 = 2(2k² + 2k) + 1, which has the required odd form."
    },
    {
      id: "q6",
      prompt: "Which congruence is true?",
      options: ["24 ≡ 10 (mod 7)", "24 ≡ 9 (mod 7)", "24 ≡ 8 (mod 7)", "24 ≡ 0 (mod 7)"],
      answer: 0,
      explanation: "24 − 10 = 14, and 7 divides 14. Therefore 24 ≡ 10 (mod 7)."
    },
    {
      id: "q7",
      prompt: "Why does a = 2 and b = 3 refute ‘ab ≡ 0 (mod 6) implies a ≡ 0 or b ≡ 0 (mod 6)’ ?",
      options: ["Their product is not divisible by six", "Their product is divisible by six, but neither factor is congruent to zero modulo six", "Both factors are prime", "Congruence cannot use a composite modulus"],
      answer: 1,
      explanation: "The hypothesis holds because 2·3 = 6 ≡ 0 (mod 6), while both alternatives in the conclusion fail."
    },
    {
      id: "q8",
      prompt: "To prove p → q by contradiction, which combined assumption should you make?",
      options: ["¬p ∧ q", "p ∧ q", "p ∧ ¬q", "¬p ∧ ¬q"],
      answer: 2,
      explanation: "Assume the hypothesis p together with the failure of the conclusion ¬q, then derive an impossibility."
    },
    {
      id: "q9",
      prompt: "In the proof that √2 is irrational, what is the final contradiction?",
      options: ["Every rational number is even", "The numerator and denominator chosen in lowest terms are both forced to be even", "The denominator becomes zero", "Two squared numbers are unequal"],
      answer: 1,
      explanation: "Both m and n are forced to have factor 2, contradicting the choice of m/n in lowest terms."
    },
    {
      id: "q10",
      prompt: "If r is rational and s is irrational, why must r + s be irrational?",
      options: ["A rational plus any number is irrational", "Assuming r + s rational would make s = (r + s) − r rational", "Irrational numbers cannot be added", "Because r must equal zero"],
      answer: 1,
      explanation: "Rational numbers are closed under subtraction. If r + s and r were rational, their difference s would be rational, contradicting the hypothesis."
    }
  ];

  const videoCheckpoints = [
    {
      fraction: 0.18,
      prompt: "What is the first useful move when a direct-proof hypothesis says x is even?",
      options: ["Write x = 2k for some k ∈ ℤ", "Assume x is odd", "Try several numerical values"],
      answer: 0,
      explanation: "Unpack the definition immediately: an even integer has the form 2k for an integer k."
    },
    {
      fraction: 0.36,
      prompt: "What changes when you form the contrapositive of p → q?",
      options: ["Only the order", "Only the truth values", "The order reverses and both statements are negated"],
      answer: 2,
      explanation: "The contrapositive is ¬q → ¬p, and it is logically equivalent to the original implication."
    },
    {
      fraction: 0.53,
      prompt: "What is the contrapositive of 3 ∤ mn → (3 ∤ m ∧ 3 ∤ n)?",
      options: ["(3 | m ∨ 3 | n) → 3 | mn", "3 | mn → (3 | m ∧ 3 | n)", "(3 ∤ m ∨ 3 ∤ n) → 3 ∤ mn"],
      answer: 0,
      explanation: "Negating the conjunction gives a disjunction: if 3 divides m or n, then it divides their product."
    },
    {
      fraction: 0.70,
      prompt: "To prove p → q by contradiction, what do you assume?",
      options: ["p and ¬q", "¬p and q", "q only"],
      answer: 0,
      explanation: "Assume the case that would make the implication fail—p true and q false—and derive a contradiction."
    },
    {
      fraction: 0.88,
      prompt: "Why is ‘m and n are both even’ a contradiction in the √2 proof?",
      options: ["No rational fraction may contain even numbers", "m/n was chosen in lowest terms", "Even numbers cannot be squared"],
      answer: 1,
      explanation: "Both being even gives a common factor 2, contradicting the declared lowest-terms representation."
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
        ? "Strong work. Pick one theorem and explain why its opening assumption matches the proof method."
        : score >= 6
          ? "Good foundation. Review contrapositive formation and the exact contradiction in each worked proof, then retry."
          : "Revisit the direct-proof, contrapositive and lowest-terms examples, then retry without looking at your previous answers.";
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
        const checkpointTime = video.duration * checkpoint.fraction;
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
  loadChapters();
  document.querySelector("#finish-quiz")?.addEventListener("click", finishQuiz);
  document.querySelector("#reset-quiz")?.addEventListener("click", resetQuiz);
})();
