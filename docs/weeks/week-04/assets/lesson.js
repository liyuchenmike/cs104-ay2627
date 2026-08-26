(() => {
  "use strict";

  const lessonKey = "cs104-week-04-v1";
  const quizQuestions = [
    {
      id: "q1",
      prompt: "What is the essential requirement for cases in a proof by cases?",
      options: ["Every case must use identical algebra", "The cases must cover every permitted possibility", "There must be exactly two cases", "The cases must contain the same number of objects"],
      answer: 1,
      explanation: "A case proof is valid only when its cases are exhaustive. Every permitted input must fall into at least one branch."
    },
    {
      id: "q2",
      prompt: "Which cases naturally address divisibility of n³ − n by three?",
      options: ["n positive, zero or negative", "n even or odd", "n ≡ 0, 1 or 2 (mod 3)", "n prime or composite"],
      answer: 2,
      explanation: "Divisibility by three is controlled by the three possible remainders modulo three."
    },
    {
      id: "q3",
      prompt: "Why must two of any five integers be congruent modulo four?",
      options: ["All integers are congruent modulo four", "Five integers have only four possible remainder classes", "At least two integers must be even", "Distinct integers always share a divisor"],
      answer: 1,
      explanation: "Five objects placed in four remainder classes force at least two into the same class by the pigeonhole principle."
    },
    {
      id: "q4",
      prompt: "In a mixed-sign triangle-inequality case, why may x + y require subcases?",
      options: ["Its absolute-value formula depends on whether x + y is nonnegative or negative", "Addition is undefined for mixed signs", "x + y must equal zero", "Absolute values may be cancelled"],
      answer: 0,
      explanation: "The definition of |x+y| changes at zero, even after the separate signs of x and y are known."
    },
    {
      id: "q5",
      prompt: "What completes a constructive existence proof after choosing a witness?",
      options: ["Naming the proof method only", "Checking that the witness belongs to the domain and satisfies every condition", "Showing that no other witness exists", "Trying several nearby values"],
      answer: 1,
      explanation: "A candidate is not enough: its domain membership and every stated property must be verified."
    },
    {
      id: "q6",
      prompt: "Why is the real-root proof for f(x)=x⁴−3x+1 non-constructive?",
      options: ["It proves the polynomial is discontinuous", "It guarantees a root between 0 and 1 without giving its exact value", "It checks every real number", "It assumes the root is unique"],
      answer: 1,
      explanation: "Continuity and the sign change invoke the intermediate value theorem, which guarantees a root without constructing its exact value."
    },
    {
      id: "q7",
      prompt: "What contradiction proves that some sᵢ is at least the average A?",
      options: ["Every sᵢ is positive", "Assuming every sᵢ < A would make their average strictly less than A", "The values must all equal A", "The number n becomes zero"],
      answer: 1,
      explanation: "Adding the strict inequalities gives a sum below nA, so the quantity defined as A would be below itself."
    },
    {
      id: "q8",
      prompt: "Which two obligations make a complete uniqueness proof?",
      options: ["A direct proof and a contradiction", "Existence and at-most-one", "A witness and a counterexample", "Two different examples"],
      answer: 1,
      explanation: "Exactly one means that at least one object exists and that any two objects satisfying the property must be equal."
    },
    {
      id: "q9",
      prompt: "Why is n³ − 1 composite for every integer n > 2?",
      options: ["All cubes are composite", "It factors as (n−1)(n²+n+1), with both factors greater than one", "It is always even", "It is divisible by n"],
      answer: 1,
      explanation: "For n > 2, the displayed factorisation is a product of two positive integers greater than one."
    },
    {
      id: "q10",
      prompt: "What can one supporting example establish?",
      options: ["Any universal statement", "An existential statement", "The uniqueness of an object", "Every conditional statement"],
      answer: 1,
      explanation: "One verified witness proves an existential claim. A supporting example cannot prove a universal claim or uniqueness."
    }
  ];

  const videoCheckpoints = [
    {
      fraction: 0.16,
      prompt: "Which case split best matches a claim about divisibility by three?",
      options: ["Even and odd", "Remainders 0, 1 and 2 modulo three", "Positive and negative only"],
      answer: 1,
      explanation: "The three residue classes modulo three cover every integer and directly expose factors of three."
    },
    {
      fraction: 0.34,
      prompt: "What makes the five-integers modulo-four argument work?",
      options: ["Four integers are prime", "Five objects enter only four remainder classes", "The integers are consecutive"],
      answer: 1,
      explanation: "The pigeonhole principle forces two of the five integers into one of the four remainder classes."
    },
    {
      fraction: 0.53,
      prompt: "Which statement describes a constructive existence proof?",
      options: ["Give and verify a specific witness", "Assume every witness fails", "Prove two witnesses are equal"],
      answer: 0,
      explanation: "Constructive existence supplies an object and checks every required condition."
    },
    {
      fraction: 0.72,
      prompt: "After proving a witness exists, what remains in a uniqueness proof?",
      options: ["Find a second example", "Show any two valid candidates are equal", "Disprove the original statement"],
      answer: 1,
      explanation: "The at-most-one part assumes two arbitrary candidates satisfy the property and derives equality."
    },
    {
      fraction: 0.90,
      prompt: "What does one counterexample do to a universal statement?",
      options: ["Proves it", "Disproves it", "Proves it is unique"],
      answer: 1,
      explanation: "A universal statement allows no exceptions, so one permitted failure is decisive."
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
        ? "Strong work. Choose one uniqueness theorem and identify its existence and at-most-one steps."
        : score >= 6
          ? "Good foundation. Review case coverage, witness verification and the two uniqueness obligations, then retry."
          : "Revisit the modulo-three, existence and uniqueness examples, then retry without looking at your previous answers.";
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
