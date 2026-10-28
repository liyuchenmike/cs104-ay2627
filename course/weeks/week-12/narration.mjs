export default [
  {
    "slide": 1,
    "chapter": "Counting lists and products",
    "narration": "Welcome to Week Twelve of CS104. This lecture, titled Counting, asks how many possibilities exist when listing them one by one would be slow or impossible. We begin with the number of integers in an interval and the multiplication rule for sequences of choices. Then we count ordered arrangements, combine and subtract sets, and choose unordered groups. We finish with repeated objects and selections that allow repetition. Every formula has assumptions about order, replacement, and whether cases overlap. Before calculating, identify what a single outcome looks like and which outcomes must be counted exactly once."
  },
  {
    "slide": 2,
    "chapter": "Counting lists and products",
    "narration": "Here is the route through Lecture Ten. Simple Counting begins with a list of consecutive integers and the multiplication rule for several steps. Counting on Sets introduces permutations and the addition, difference, and inclusion-exclusion rules. Combinations count subsets where order is irrelevant; we will also handle indistinguishable repeated letters and selections with repetition allowed. The final table brings four common selection formulas together. The same problem can often be attacked by more than one rule, but the rules must fit the structure of the objects being counted. We will explain those choices in worked examples."
  },
  {
    "slide": 3,
    "chapter": "Counting lists and products",
    "narration": "Section ten point one begins with the most direct counting task: count the elements of a list. Consecutive integers are a useful case because there is a short formula even when the interval is too long to write out. The key detail is whether both endpoints are included. Once we can count an integer interval, we can count items whose labels run through such an interval, such as the multipliers producing three-digit multiples of five. After that, the lecture turns from one list to a sequence of choices, where the multiplication rule can replace a much larger enumeration."
  },
  {
    "slide": 4,
    "chapter": "Counting lists and products",
    "narration": "Look at the integers from five through twelve. The slide pairs five with count one, six with count two, and so on until twelve is paired with count eight. Subtracting twelve minus five gives seven gaps between endpoints, but there are eight listed integers because both endpoints count. In general, when m and n are integers with m at most n, the inclusive list m, m plus one, through n has n minus m plus one elements. One way to see this is to shift every item down by m: the list becomes zero through n minus m, which has one item for zero plus one for each positive value. Test the formula with m equal to n; the answer is one, as it should be."
  },
  {
    "slide": 5,
    "chapter": "Counting lists and products",
    "narration": "How many three-digit integers are divisible by five? The first is one hundred, which is five times twenty. The last is nine hundred ninety-five, which is five times one hundred ninety-nine. Every multiple in between has exactly one integer multiplier from twenty through one hundred ninety-nine, and every multiplier in that interval produces exactly one eligible three-digit number. So we count the multipliers rather than writing every multiple. The inclusive-list rule gives one hundred ninety-nine minus twenty plus one, or one hundred eighty. Using nine hundred ninety-nine as though it were divisible by five, or forgetting the plus one for the inclusive endpoints, would give the wrong answer."
  },
  {
    "slide": 6,
    "chapter": "Counting lists and products",
    "narration": "Now count possible four-symbol PINs when each position may contain any of twenty-six letters or ten digits. That makes thirty-six available symbols for each position. The slide shows a choice at each of four successive positions, and repetition is allowed: a symbol used earlier remains available later. The sample PINs include letters only, digits only, and mixtures, so do not impose an extra condition that every PIN must contain both types. The multiplication rule will multiply the four numbers of choices. Because each position still has thirty-six choices, the total is thirty-six to the fourth power, or one million six hundred seventy-nine thousand six hundred sixteen."
  },
  {
    "slide": 7,
    "chapter": "Counting lists and products",
    "narration": "The multiplication rule formalizes a sequence of choices. If step one has n one choices, step two has n two choices regardless of which first choice was made, and the same fixed-count condition holds for each later step, multiply the counts. For the four-symbol PIN, that is thirty-six times thirty-six times thirty-six times thirty-six. The phrase regardless of earlier choices is essential. The individual options can change, but the number of options must remain fixed across every earlier branch for this simple product to work. If a later step has a different number of choices in different branches, split the cases or reorder the steps before multiplying."
  },
  {
    "slide": 8,
    "chapter": "Dependent choices",
    "narration": "The officer problem tests that condition. Choose a president, treasurer, and secretary from Ann, Bob, Cyd, and Dan, using distinct people. Ann cannot be president, and the secretary must be Cyd or Dan. A tempting product says three choices for president, three for treasurer, and two for secretary, giving eighteen. That is incorrect. If Cyd or Dan has already taken an earlier office, fewer eligible secretaries remain; in one branch, neither may remain. The count of secretary options depends on the earlier choices, so it cannot be represented by a fixed factor of two at the end. We need to inspect branches or choose a better order."
  },
  {
    "slide": 9,
    "chapter": "Dependent choices",
    "narration": "The tree diagram makes the dependency visible. The first branches choose Bob, Cyd, or Dan as president. Later branches choose a different treasurer, and only the paths that end with Cyd or Dan as secretary are valid. Instead of multiplying one count per column, trace each complete path that obeys every restriction. The diagram shows eight such outcomes. For example, if Bob is president and Ann is treasurer, either Cyd or Dan can be secretary. But if Cyd is president and Dan is treasurer, there is no eligible secretary left. This is why the earlier multiplication gave eighteen: it counted impossible final choices as if they existed on every branch."
  },
  {
    "slide": 10,
    "chapter": "Dependent choices",
    "narration": "There is a cleaner solution: choose the most restricted office first. The secretary has two choices, Cyd or Dan. Once the secretary is fixed, the president cannot be Ann and cannot be the chosen secretary, leaving two choices among the other people. Then two of the original four remain available for treasurer. Now the number of choices at each step is constant across all previous branches, so the multiplication rule gives two times two times two, or eight. Reordering steps does not change the final assignment being counted; it changes only the way we describe its construction. This is a useful tactic whenever constraints make a naive product unreliable."
  },
  {
    "slide": 11,
    "chapter": "Permutations",
    "narration": "Section ten point two shifts to counting on sets. First we count permutations, which are complete orderings of distinct objects. Later, set operations help us combine, subtract, and correct for overlapping collections of outcomes. The distinction between an ordered outcome and a subset is worth keeping in view: a row of officers or letters has positions, while a team is merely a group. In the next slides, every object in the starting set is distinct unless the lecture explicitly says otherwise. We will derive factorial and partial-permutation formulas from the multiplication rule before using set operations for other counting problems."
  },
  {
    "slide": 12,
    "chapter": "Permutations",
    "narration": "A permutation of a set is an ordering of its objects in a row. The three distinct letters a, b, and c have six possible rows: abc, acb, bac, bca, cab, and cba. The same three letters appear in every row, but changing their order creates a different permutation. For instance, abc and bac are distinct even though they contain the same set of letters. We can list six rows here, but listing becomes impractical as the set grows. The natural question is how many rows can be formed from n distinct objects. We will answer by filling positions from left to right."
  },
  {
    "slide": 13,
    "chapter": "Permutations",
    "narration": "To arrange n distinct objects, choose the first position in n ways. After using one object, choose the second in n minus one ways. The third has n minus two choices, and the final position has one. Every full row arises from exactly one such sequence of choices, so multiply n times n minus one down to one. That product is n factorial, written n exclamation mark. The slide states the theorem for n at least one. For three letters it gives three times two times one, or six, matching the list. Notice how the number of available objects decreases because repetition is not allowed in a permutation of a set."
  },
  {
    "slide": 14,
    "chapter": "Permutations",
    "narration": "The word COMPUTER has eight distinct letters, so all arrangements use eight factorial, or forty thousand three hundred twenty, rows. If the letters C and O must stay together in that order, treat the fixed block CO as one object along with the six other letters. There are then seven distinct objects to arrange, giving seven factorial, or five thousand forty. The words in that order matter: the block is CO only. If either CO or OC were allowed, that would be a different problem with an extra factor of two. The block method works because every admissible arrangement corresponds to exactly one arrangement of the seven objects."
  },
  {
    "slide": 15,
    "chapter": "Selected permutations",
    "narration": "We can also select only r of n distinct objects and arrange those selected objects. For the set containing a, b, and c, the ordered pairs are ab, ac, ba, bc, ca, and cb. This is a two-permutation, and ab differs from ba. Fill the first position in n ways, the second in n minus one ways, and stop after r positions. The product is n times n minus one down to n minus r plus one, or n factorial divided by the factorial of n minus r. The condition is one at most r at most n on this slide. Unlike a combination, an r-permutation keeps track of the order in which the chosen elements appear."
  },
  {
    "slide": 16,
    "chapter": "Selected permutations",
    "narration": "Use the formula in three small examples. P of five comma two is five times four, or twenty, because we fill two ordered positions from five distinct objects. P of seven comma four is seven times six times five times four, or eight hundred forty. P of five comma five uses every object and equals five factorial, or one hundred twenty. In the factorial fraction, the final example has zero factorial in the denominator; zero factorial is one, so the expression agrees with a full permutation. These examples also show why the product stops after r factors rather than multiplying all the way down to one unless r equals n."
  },
  {
    "slide": 17,
    "chapter": "Set counting rules",
    "narration": "Sometimes the outcomes fall into separate categories. If sets A one, A two, and so on are pairwise disjoint, no outcome belongs to two categories, and the size of their union is the sum of their sizes. Pairwise disjoint means every intersection of two different categories is empty. The slide calls this the addition rule. The condition prevents double counting. If an outcome can appear in more than one category, adding category sizes counts it repeatedly, and we need a correction such as inclusion-exclusion. The next example works because PINs of different lengths cannot be the same sequence."
  },
  {
    "slide": 18,
    "chapter": "Set counting rules",
    "narration": "A PIN of one to three letters may have length one, length two, or length three, and letters may repeat. Those three length categories are disjoint. A one-letter PIN has twenty-six choices; a two-letter PIN has twenty-six squared; and a three-letter PIN has twenty-six cubed. The multiplication rule counts within each length, and the addition rule combines the lengths: twenty-six plus six hundred seventy-six plus seventeen thousand five hundred seventy-six equals eighteen thousand two hundred seventy-eight. Do not multiply the three length totals together, because a PIN has one chosen length, not all three lengths at once. Nor should the empty sequence be included; the permitted lengths start at one."
  },
  {
    "slide": 19,
    "chapter": "Set counting rules",
    "narration": "The difference rule counts what remains after excluding a known subset. If B is contained in a finite set A, then the number in A but not B is the size of A minus the size of B. This is often easier than counting a complicated target directly. To count objects with at least one special feature, let A be all objects and B be the objects with none of that feature. The target is A minus B. We will apply this to four-symbol PINs with at least one repeated symbol. Be precise about B: it must be a subset of A so that subtraction removes exactly the unwanted outcomes once."
  },
  {
    "slide": 20,
    "chapter": "Set counting rules",
    "narration": "Return to four-symbol PINs from thirty-six letters and digits. With repetition allowed, there are thirty-six to the fourth power, or one million six hundred seventy-nine thousand six hundred sixteen total PINs. The complement of having at least one repeated symbol is having four distinct symbols. Fill the four positions without replacement: thirty-six times thirty-five times thirty-four times thirty-three, or one million four hundred thirteen thousand seven hundred twenty. Subtracting gives two hundred sixty-five thousand eight hundred ninety-six PINs with at least one repeat. This includes PINs with several repeated positions; the complement method handles all such patterns without making overlapping cases."
  },
  {
    "slide": 21,
    "chapter": "Set counting rules",
    "narration": "When sets overlap, simply adding their sizes counts shared elements more than once. For two sets, add the sizes of A and B, then subtract the size of their intersection once. For three sets, add the three individual sizes, subtract each pairwise intersection, then add the triple intersection back. A triple-overlap element was counted three times in the first sum and subtracted three times in the pairwise correction, so adding it once gives the correct final count. The Venn diagram illustrates the shared region. The formulas count elements in the union, meaning outcomes satisfying at least one of the listed conditions."
  },
  {
    "slide": 22,
    "chapter": "Set counting rules",
    "narration": "Count integers from one through one thousand that are multiples of three or five. Set A contains multiples of three, so its size is the integer part of one thousand divided by three, or three hundred thirty-three. Set B contains multiples of five, giving two hundred. Their intersection contains multiples of both, which are multiples of fifteen, giving sixty-six. Inclusion-exclusion gives three hundred thirty-three plus two hundred minus sixty-six, or four hundred sixty-seven. Subtract the overlap because those sixty-six integers were counted in both A and B. The word or is inclusive here: multiples of fifteen qualify, but they must appear once in the final count."
  },
  {
    "slide": 23,
    "chapter": "Combinations",
    "narration": "Section ten point three turns to combinations. A combination selects a subset of a given size from a set of distinct objects. The order of selected objects does not create a new subset. We will derive the choose formula by comparing combinations with ordered selections, then apply it to teams. The section also treats indistinguishable repeated objects, binomial coefficients, and combinations where choosing the same category more than once is allowed. The words combination and repetition describe different aspects of a problem: combination concerns whether order matters, while repetition concerns whether a selected type can be used again."
  },
  {
    "slide": 24,
    "chapter": "Combinations",
    "narration": "Given a set S with n distinct elements, an r-combination is a subset containing exactly r elements. The notation n choose r counts those subsets for nonnegative integers n and r with r no larger than n. For example, from the set containing one, two, and three, the two-element subsets are one-two, one-three, and two-three. Writing two-one does not add another subset; the set of members is unchanged. This is the central difference from the six ordered two-permutations on the previous slides. We have defined what is being counted, but not yet derived the numerical formula. That comes by relating each subset to its possible orderings."
  },
  {
    "slide": 25,
    "chapter": "Combinations",
    "narration": "The slide compares ordered and unordered choices side by side. From one, two, and three, the ordered two-selections are one-two, two-one, one-three, three-one, two-three, and three-two: six outcomes. The unordered two-element subsets are only one-two, one-three, and two-three: three outcomes. Each subset corresponds to exactly two factorial, or two, orderings. This suggests a general relationship: if we first choose an r-element subset and then order its r distinct members, we obtain every r-permutation exactly once. The next slide converts that two-step process into the formula for n choose r."
  },
  {
    "slide": 26,
    "chapter": "Combinations",
    "narration": "Build an ordered r-selection in two steps. First choose an r-element subset, in n choose r ways. Then order its r distinct elements, in r factorial ways. The multiplication rule says P of n comma r equals n choose r times r factorial. Divide to get n choose r equals P of n comma r over r factorial, or n factorial over r factorial times n minus r factorial. The division removes the repeated counting caused by different orders of the same subset. It is not appropriate when the outcome itself has ordered roles; for officers, a president and secretary swapped is a different assignment. The formula also gives one empty subset when r equals zero."
  },
  {
    "slide": 27,
    "chapter": "Combinations",
    "narration": "A twelve-person group contains five boys and seven girls. How many five-person teams have exactly three boys and two girls? First choose three of the five boys, in five choose three ways. Independently choose two of the seven girls, in seven choose two ways. Multiply because every final team corresponds to exactly one pair of choices, one from each category. Five choose three is ten and seven choose two is twenty-one, giving two hundred ten teams. We do not multiply by five factorial: a team has no internal order or assigned positions. Here we are making both choices, so multiplication rather than addition is the right operation."
  },
  {
    "slide": 28,
    "chapter": "Combinations",
    "narration": "Now ask for five-person teams with at least one boy. Counting separately the teams with exactly one, two, three, four, and five boys would work, but it creates five cases. The complement is simpler. There are twelve choose five total teams, which is seven hundred ninety-two. The teams with no boy use five of the seven girls, giving seven choose five, or twenty-one. Subtract to obtain seven hundred seventy-one teams with at least one boy. The phrase at least one signals that the zero-boy case is the one to remove. This is the difference rule combined with the combination formula."
  },
  {
    "slide": 29,
    "chapter": "Repeated elements and binomial coefficients",
    "narration": "The letters of MISSISSIPPI are not all distinct. There are eleven positions, four S letters, four I letters, two P letters, and one M. One constructive count chooses four positions for the S letters, then four of the remaining seven for I, then two of the remaining three for P, leaving one for M. The product of eleven choose four, seven choose four, three choose two, and one choose one is thirty-four thousand six hundred fifty. If we started with eleven factorial, we would overcount exchanges among identical S letters, identical I letters, and identical P letters. Dividing by four factorial, four factorial, and two factorial yields the same answer."
  },
  {
    "slide": 30,
    "chapter": "Repeated elements and binomial coefficients",
    "narration": "The general repeated-object theorem extends that reasoning. Suppose n positions are filled with n one indistinguishable objects of type one, n two of type two, and so on, with the group sizes totaling n. The number of distinguishable arrangements is n factorial divided by the product of n one factorial, n two factorial, and the other group factorials. Each swap among objects of the same type leaves the visible arrangement unchanged, so the ordinary n factorial count includes many duplicates. An equivalent constructive method chooses positions for each type in sequence. Before using this formula, confirm that objects within each type truly are indistinguishable and that all n objects are used."
  },
  {
    "slide": 31,
    "chapter": "Repeated elements and binomial coefficients",
    "narration": "The binomial expansion has a counting interpretation. In the product of n copies of a plus b, each term arises by choosing either a or b from each copy. To obtain a to the power n minus k times b to the power k, choose exactly k of the n copies from which to take b; all remaining copies contribute a. The number of such choices is n choose k. That explains the coefficient in the binomial theorem, rather than treating it as an unexplained algebraic number. We are choosing a subset of positions, so their order is irrelevant. Each choice of k positions produces the same monomial, and the coefficient counts how many choices do so."
  },
  {
    "slide": 32,
    "chapter": "Combinations with repetition",
    "narration": "Now allow the same category to be selected more than once, while the order of selections remains irrelevant. From categories one, two, three, and four, the slide lists all size-three multisets. Examples include one-one-one, one-one-two, and one-three-four. The list contains twenty outcomes. There are four cubed ordered triples, but many of those triples represent the same multiset, so four cubed is not the answer. Nor can we use four choose three, which forbids repetition. The next slides show a one-to-one correspondence between these multisets and arrangements of stars and separators."
  },
  {
    "slide": 33,
    "chapter": "Combinations with repetition",
    "narration": "Think of the four labels as four fixed categories. A star means one item selected from a category, and three vertical bars separate the four categories. For example, three stars before the first bar represents one-one-one. A star in the first compartment, one in the third, and one in the fourth represents one-three-four. The encoding uses three stars and three bars, six symbols in total. Choose which three of the six positions hold stars; the remaining positions hold bars. That gives six choose three, or twenty, encodings and therefore twenty size-three multisets. This is the stars-and-bars idea: unlike an ordered triple, the notation records only how many objects came from each category."
  },
  {
    "slide": 34,
    "chapter": "Combinations with repetition",
    "narration": "The theorem generalizes the previous picture. To choose r items from n categories with repetitions allowed and order ignored, use r stars for the chosen items and n minus one separators between the categories. The row has r plus n minus one positions. Choosing the r star positions gives r plus n minus one choose r outcomes. Equivalently, choose the separator positions. For four categories and three items, this becomes six choose three, or twenty. The formula applies to categories whose supply is unrestricted; if each category has a cap, the simple stars-and-bars count may include forbidden selections and needs correction. The number n of categories is positive in this construction."
  },
  {
    "slide": 35,
    "chapter": "Choose the counting model",
    "narration": "The final table is a decision guide for choosing k items from n types. Ask two independent questions. Does order matter? Is repetition allowed? If both answers are yes, fill k positions independently in n to the k ways. If order matters but repetition is forbidden, use the falling product P of n comma k. If order does not matter and repetition is forbidden, use n choose k. If order does not matter and repetition is allowed, use n plus k minus one choose k. Check the result against a tiny example before trusting it, and remember that extra conditions, such as restricted offices or overlapping categories, may require case splitting, a complement, or inclusion-exclusion on top of the base formula."
  }
];
