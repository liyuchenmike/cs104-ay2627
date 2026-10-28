(() => {
  "use strict";

  const lessonKey = "cs104-week-12-v1";
  const quizQuestions = [
  {
    "id": "q1",
    "prompt": "How many integers are there from 5 through 12, including both endpoints?",
    "options": [
      "7",
      "8",
      "12",
      "17"
    ],
    "answer": 1,
    "explanation": "For an inclusive integer list, use n − m + 1. Here 12 − 5 + 1 = 8."
  },
  {
    "id": "q2",
    "prompt": "A four-symbol PIN uses 26 letters or 10 digits in each position, with repetition allowed. How many PINs are possible?",
    "options": [
      "36⁴ = 1,679,616",
      "36 × 35 × 34 × 33 = 1,413,720",
      "26⁴",
      "4 × 36"
    ],
    "answer": 0,
    "explanation": "Each of the four positions has 36 choices regardless of earlier positions, so multiply 36 four times."
  },
  {
    "id": "q3",
    "prompt": "How many valid president–treasurer–secretary assignments are there for Ann, Bob, Cyd and Dan if Ann cannot be president and Cyd or Dan must be secretary?",
    "options": [
      "18",
      "12",
      "8",
      "6"
    ],
    "answer": 2,
    "explanation": "Choose the secretary first (2 ways), then president (2 ways), then treasurer (2 ways): 2 × 2 × 2 = 8."
  },
  {
    "id": "q4",
    "prompt": "How many arrangements of COMPUTER keep the letters CO together in that order?",
    "options": [
      "8! = 40,320",
      "2 × 7! = 10,080",
      "7! = 5,040",
      "6! = 720"
    ],
    "answer": 2,
    "explanation": "Treat the fixed block CO as one object with the other six letters, giving seven distinct objects and 7! arrangements."
  },
  {
    "id": "q5",
    "prompt": "What is P(7, 4), the number of ordered selections of four distinct objects from seven?",
    "options": [
      "35",
      "210",
      "840",
      "5,040"
    ],
    "answer": 2,
    "explanation": "There are 7, then 6, then 5, then 4 choices: 7 × 6 × 5 × 4 = 840."
  },
  {
    "id": "q6",
    "prompt": "How many PINs of length one, two or three use only letters, with repetitions allowed?",
    "options": [
      "26³ = 17,576",
      "26 + 26² + 26³ = 18,278",
      "26 × 26² × 26³",
      "3 × 26 = 78"
    ],
    "answer": 1,
    "explanation": "Count each permitted length with the multiplication rule, then add the disjoint length categories."
  },
  {
    "id": "q7",
    "prompt": "How many integers from 1 through 1,000 are divisible by 3 or by 5?",
    "options": [
      "533",
      "467",
      "400",
      "66"
    ],
    "answer": 1,
    "explanation": "There are 333 multiples of 3 and 200 of 5; subtract the 66 multiples of 15 counted twice: 333 + 200 − 66 = 467."
  },
  {
    "id": "q8",
    "prompt": "From five boys and seven girls, how many unordered five-person teams have exactly three boys and two girls?",
    "options": [
      "210",
      "792",
      "771",
      "2,520"
    ],
    "answer": 0,
    "explanation": "Choose 3 of the 5 boys and 2 of the 7 girls, then multiply: C(5,3) × C(7,2) = 10 × 21 = 210."
  },
  {
    "id": "q9",
    "prompt": "How many distinguishable arrangements are there of the letters in MISSISSIPPI?",
    "options": [
      "11!",
      "11!/(4!4!2!) = 34,650",
      "11!/(4!2!)",
      "C(11,4) = 330"
    ],
    "answer": 1,
    "explanation": "The four S letters, four I letters and two P letters are indistinguishable within each type, so divide 11! by 4!4!2!."
  },
  {
    "id": "q10",
    "prompt": "How many unordered selections of three items can be made from four categories when repetition is allowed?",
    "options": [
      "C(4,3) = 4",
      "P(4,3) = 24",
      "4³ = 64",
      "C(6,3) = 20"
    ],
    "answer": 3,
    "explanation": "Three stars and three separators form six positions. Choosing the three star positions gives C(4 + 3 − 1,3) = C(6,3) = 20."
  }
];

  const videoCheckpoints = [
  {
    "afterChapter": "Counting lists and products",
    "prompt": "When does the simple multiplication rule give one product of step counts?",
    "options": [
      "When each later step has a fixed number of choices across earlier branches",
      "Whenever there is more than one condition",
      "Only when repetition is forbidden"
    ],
    "answer": 0,
    "explanation": "A fixed count at each step lets the product represent every complete outcome exactly once."
  },
  {
    "afterChapter": "Dependent choices",
    "prompt": "Why is 3 × 3 × 2 an invalid count for the restricted officer assignments?",
    "options": [
      "There are only three people",
      "The number of eligible secretaries depends on earlier assignments",
      "The secretary must always be chosen last"
    ],
    "answer": 1,
    "explanation": "Earlier offices may use Cyd or Dan, so two secretary choices do not remain on every branch."
  },
  {
    "afterChapter": "Selected permutations",
    "prompt": "What makes P(7, 4) an ordered-selection count?",
    "options": [
      "Selecting the same four objects in a different order gives a different outcome",
      "Each selected object may repeat",
      "The objects have no positions"
    ],
    "answer": 0,
    "explanation": "An r-permutation fills ordered positions without reusing the selected objects."
  },
  {
    "afterChapter": "Set counting rules",
    "prompt": "Why subtract 66 when counting multiples of 3 or 5 through 1,000?",
    "options": [
      "Those numbers are outside the interval",
      "They are multiples of 15 counted in both groups",
      "There are 66 nonmultiples"
    ],
    "answer": 1,
    "explanation": "Inclusion-exclusion removes one duplicate count for each number in the intersection."
  },
  {
    "afterChapter": "Repeated elements and binomial coefficients",
    "prompt": "Why does the MISSISSIPPI count divide 11! by 4!4!2!?",
    "options": [
      "The word contains only four distinct letters",
      "Swapping identical S, I or P letters does not create a new arrangement",
      "Every letter may be repeated without limit"
    ],
    "answer": 1,
    "explanation": "The factorial denominators remove rearrangements among indistinguishable letters of each repeated type."
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
        ? "Strong work. For a new problem, decide whether order and repetition matter before choosing a counting formula."
        : score >= 6
          ? "Good foundation. Review the worked examples for products, complements, and combinations, then retry."
          : "Revisit the counting rules, especially independent choices and overlapping sets, then retry without looking at your previous answers.";
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
