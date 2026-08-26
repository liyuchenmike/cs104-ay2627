export default [
  {
    slide: 1,
    chapter: "Proof by cases",
    narration: `Welcome to Week Four of CS104: Method of Proof, Part Two. This lecture extends our proof toolkit in three directions. We will split difficult claims into complete sets of cases, prove that mathematical objects exist, and prove that an object is unique. The central habit is to match the logical structure of a statement with the right proof strategy. As we work through each example, notice what must be assumed, what must be constructed, and what has to be shown in every branch.`
  },
  {
    slide: 2,
    chapter: "Proof by cases",
    narration: `Here is our route. Section four point one develops proof by cases using parity, remainders, congruence, the pigeonhole principle, and the triangle inequality. Section four point two separates constructive existence proofs, where we exhibit a witness, from non-constructive proofs, where an argument guarantees a witness without locating it explicitly. Section four point three treats uniqueness as two obligations: existence and at-most-one. We finish by diagnosing common proof-writing errors and deciding how much justification a clear proof needs.`
  },
  {
    slide: 3,
    chapter: "Proof by cases",
    narration: `We begin with proof by cases. This method is appropriate when every object in the domain belongs to one of several manageable categories. The cases must be exhaustive: together they must cover every possibility. They should also be chosen because the hypothesis or conclusion behaves more simply inside each branch. Once the desired conclusion has been proved in every possible case, it follows for the whole domain.`
  },
  {
    slide: 4,
    chapter: "Proof by cases",
    narration: `The logical foundation is that an implication with a disjunctive hypothesis can be proved branch by branch. To establish open parenthesis p or q close parenthesis implies r, prove p implies r and q implies r. The divisibility proposition at the top works this way: if three divides m or three divides n, either branch makes the product m n a multiple of three. Proposition four point one point one has the same structure because every integer n is either even or odd. We will prove that n squared plus n is even in both branches.`
  },
  {
    slide: 5,
    chapter: "Proof by cases",
    narration: `Let n be an arbitrary integer. If n is even, write n equals two k. Then n squared plus n equals four k squared plus two k, which factors as two k times two k plus one. This is twice an integer, so it is even. If n is odd, write n equals two k plus one. Expanding gives four k squared plus six k plus two, or two times open parenthesis two k squared plus three k plus one close parenthesis. That is also even. Because every integer is in exactly one of these cases, the proposition follows.`
  },
  {
    slide: 6,
    chapter: "Remainders and congruence",
    narration: `Now consider proposition four point one point two: three divides n cubed minus n for every integer n. Splitting only into even and odd cases does not reveal divisibility by three. Parity is the wrong classification because it tracks remainders modulo two. Divisibility by three suggests three residue classes instead: remainder zero, one, or two when n is divided by three. Equivalently, n is congruent to zero, one, or two modulo three. A useful case split follows the arithmetic structure of the conclusion.`
  },
  {
    slide: 7,
    chapter: "Remainders and congruence",
    narration: `We prove the proposition in three cases. If n equals three k, then n cubed minus n equals three times open parenthesis nine k cubed minus k close parenthesis. If n equals three k plus one, expansion gives three times open parenthesis nine k cubed plus nine k squared plus two k close parenthesis. If n equals three k plus two, expansion gives three times open parenthesis nine k cubed plus eighteen k squared plus eleven k plus two close parenthesis. In every branch the expression is three times an integer. The three possible remainders are exhaustive, so three divides n cubed minus n for every integer n.`
  },
  {
    slide: 8,
    chapter: "Remainders and congruence",
    narration: `Parity creates two cases for one integer: even or odd. With two integers m and n, the complete parity split has four ordered cases: both even, both odd, m odd with n even, and m even with n odd. Do not omit the mixed cases merely because they look similar. You may later combine symmetric branches, but first show that your grouping still covers every ordered pair. A case proof is only as strong as the completeness of its partition.`
  },
  {
    slide: 9,
    chapter: "Remainders and congruence",
    narration: `Remainders give a systematic general partition. Modulo three, every integer is congruent to exactly one of zero, one, or two. Modulo a positive integer k, every integer is congruent to exactly one of zero, one, two, through k minus one. These are the possible remainders from the division algorithm. When a problem mentions divisibility by k, powers modulo k, or a repeating arithmetic pattern, these residue classes are often the natural cases to test.`
  },
  {
    slide: 10,
    chapter: "Remainders and congruence",
    narration: `Congruence records equality of remainders. If r is the remainder when a is divided by positive n, then a is congruent to r modulo n. The integer a belongs to exactly one remainder class from zero through n minus one. Two integers a and b are congruent modulo n exactly when division by n leaves the same remainder. Equivalently, n divides a minus b. Congruence therefore lets us reason about a whole class of integers without repeatedly writing the quotient and remainder equation.`
  },
  {
    slide: 11,
    chapter: "Remainders and congruence",
    narration: `Proposition four point one point four is an application of the pigeonhole principle. Divide five distinct integers by four. There are only four possible remainders: zero, one, two, and three. Think of the integers as five pigeons and the remainder classes as four pigeonholes. Since five objects are assigned to only four classes, at least two must occupy the same class. Those two integers have the same remainder and are therefore congruent modulo four. Distinctness is not needed for the counting step, but it ensures we have two different integers sharing the class.`
  },
  {
    slide: 12,
    chapter: "Proof by cases",
    narration: `Case splits also arise from order. Every real number x is positive, zero, or negative. Depending on the expression, these three cases can be combined into two larger but still exhaustive branches: x greater than or equal to zero versus x less than zero, or x equal to zero versus x not equal to zero. The correct grouping depends on which definition changes at the boundary. Always verify that the combined cases cover the full domain and do not leave a gap.`
  },
  {
    slide: 13,
    chapter: "Proof by cases",
    narration: `For two real numbers a and b, equality gives the two-case split a equals b or a does not equal b. Order gives the three-case split a greater than b, a equals b, or a less than b. These alternatives support many uniqueness and inequality arguments. A proof may sometimes combine greater than and less than into a single case a not equal to b. Again, the best partition is the one that exposes the definition or operation controlling the claim.`
  },
  {
    slide: 14,
    chapter: "Triangle inequality",
    narration: `The triangle inequality states that the absolute value of x plus y is at most the absolute value of x plus the absolute value of y. Absolute value itself is defined by cases: absolute x equals x when x is nonnegative and negative x when x is negative. Because the formula changes with the sign, a case proof is natural. We must account not only for the signs of x and y, but in mixed-sign cases also for the sign of their sum.`
  },
  {
    slide: 15,
    chapter: "Triangle inequality",
    narration: `In the first case, x and y are both nonnegative. Their sum is also nonnegative. The definition therefore gives absolute x equals x, absolute y equals y, and absolute x plus y equals x plus y. The two sides of the triangle inequality are actually equal in this branch. Equality is stronger than the required less-than-or-equal conclusion, so the case is complete.`
  },
  {
    slide: 16,
    chapter: "Triangle inequality",
    narration: `Now take x nonnegative and y negative. Then absolute x equals x and absolute y equals negative y. We split again according to x plus y. If the sum is nonnegative, absolute x plus y equals x plus y, and y is at most negative y, so x plus y is at most x minus y. If the sum is negative, absolute x plus y equals negative x minus y. Since x is nonnegative, negative x is at most x, so negative x minus y is at most x minus y. In both subcases, absolute x plus y is at most absolute x plus absolute y.`
  },
  {
    slide: 17,
    chapter: "Triangle inequality",
    narration: `The third case, x negative and y nonnegative, is symmetric to the second after interchanging the variables. In the fourth case, both numbers are negative, so their sum is negative. Then absolute x plus y equals negative x minus y, while absolute x plus absolute y also equals negative x minus y; equality holds. We have covered all four sign combinations, including the necessary mixed-sign subcases, so the triangle inequality holds for all real x and y.`
  },
  {
    slide: 18,
    chapter: "Existence proofs",
    narration: `Section four point two turns to existence statements. Instead of proving a property for every object, we must establish that at least one object satisfying specified conditions is present. The central question becomes: can we exhibit a witness directly, or must we prove indirectly that a witness has to exist?`
  },
  {
    slide: 19,
    chapter: "Existence proofs",
    narration: `Existence statements involve existential quantifiers. The simple form says there exists x such that p of x. A mixed form such as there exists x for every y, p of x and y, asks for one x that works for all y. By contrast, for every x there exists y, p of x and y, allows the chosen y to depend on x. Quantifier order matters. Before proving existence, identify the domain, the conditions on the witness, and whether one witness must work uniformly or may vary with earlier choices.`
  },
  {
    slide: 20,
    chapter: "Existence proofs",
    narration: `There are two broad approaches. A constructive proof gives a specific object and verifies that it satisfies every required condition. A non-constructive proof gives an argument that some object must exist even when no convenient example is produced. Neither method is automatically superior. The statement and available theory determine the useful approach. In both cases, the proof must address every condition in the existential claim.`
  },
  {
    slide: 21,
    chapter: "Existence proofs",
    narration: `Proposition four point two point one asks for nonzero real numbers x and y whose squares sum to one. A constructive proof chooses x equals one over square root of two and y equal to the same value. Both are real and nonzero. Squaring each gives one half, so their sum is one. The witness alone is not the proof; the verification is essential. We have checked the domain, the nonzero condition, and the equation, so the existence claim follows.`
  },
  {
    slide: 22,
    chapter: "Existence proofs",
    narration: `Proposition four point two point two states that x to the fourth minus three x plus one equals zero has a real solution. Let f of x equal that polynomial. Polynomial functions are continuous. We calculate f of zero equals one and f of one equals negative one. Since the function changes sign between zero and one, the intermediate value theorem guarantees some c strictly between zero and one with f of c equal to zero. This is non-constructive: it proves a root exists without telling us its exact value.`
  },
  {
    slide: 23,
    chapter: "Existence proofs",
    narration: `Here the statement contains an existential choice followed by a universal condition. Choose x equal to one thousand factorial plus one. This integer is greater than one thousand. For any integer n with one less than n less than one thousand, n divides one thousand factorial. If n also divided one thousand factorial plus one, it would divide their difference, which is one. But no integer greater than one divides one. Therefore our chosen x is not divisible by any permitted n, completing the constructive proof.`
  },
  {
    slide: 24,
    chapter: "Existence proofs",
    narration: `Let A be the average of real numbers s one through s n. We prove that at least one entry is at least A. Suppose the opposite: every s i is strictly less than A. Adding all n inequalities gives the sum strictly less than n A. Since n is positive, division by n gives the average strictly less than A. But the average is A by definition. This contradiction shows that not every entry can be below the average, so at least one s i is greater than or equal to A.`
  },
  {
    slide: 25,
    chapter: "Uniqueness proofs",
    narration: `Section four point three strengthens existence to uniqueness. A uniqueness statement says there is exactly one object with a property. Such a proof has two separate obligations: show that at least one object exists, and show that no two distinct objects can both satisfy the property.`
  },
  {
    slide: 26,
    chapter: "Uniqueness proofs",
    narration: `Keywords such as exactly one, unique, and only one signal a uniqueness claim. The equation x cubed plus one equals zero has the unique real solution negative one. A fixed-point equation for cosine has exactly one solution in the stated interval. The number seven is the only prime of the form n cubed minus one. Each claim needs both parts. Finding one example proves existence but not uniqueness; ruling out two different examples proves at most one but does not prove that any example exists.`
  },
  {
    slide: 27,
    chapter: "Uniqueness proofs",
    narration: `The symbol there exists exactly one x such that p of x packages two statements. The existence part is there exists x with p of x. The uniqueness part says that for all a and b, if p of a and p of b, then a equals b. This second condition is often called at most one. A complete uniqueness proof labels these two parts so the reader can see that neither obligation has been omitted.`
  },
  {
    slide: 28,
    chapter: "Uniqueness proofs",
    narration: `There are several ways to prove the uniqueness part. Directly, assume a and b both satisfy the property and derive a equals b. By contrapositive, assume a differs from b and show that at least one cannot satisfy the property. By contradiction, assume a and b are distinct and both satisfy the property, then derive an impossibility. All three establish the same at-most-one condition. Choose the form that makes the defining equation or structure easiest to use.`
  },
  {
    slide: 29,
    chapter: "Uniqueness proofs",
    narration: `Proposition four point three point three says x cubed plus one equals zero has a unique real solution. For existence, substitute x equals negative one. For uniqueness, let a and b be real solutions. Then a cubed equals b cubed, so open parenthesis a minus b close parenthesis times open parenthesis a squared plus a b plus b squared close parenthesis equals zero. Both roots are negative, so the second factor is positive. It cannot be zero. Therefore a minus b equals zero and a equals b.`
  },
  {
    slide: 30,
    chapter: "Prime uniqueness",
    narration: `A prime number is a positive integer greater than one whose only positive divisors are one and itself. A composite number is a positive integer greater than one that is not prime. The number one is neither prime nor composite. These definitions matter because a factorisation proves compositeness only when it expresses the number as a product of positive integers both greater than one.`
  },
  {
    slide: 31,
    chapter: "Prime uniqueness",
    narration: `Proposition four point three point four says the only prime number of the form n cubed minus one is seven. Existence is immediate at n equals two. For uniqueness, factor n cubed minus one as n minus one times n squared plus n plus one. Values n less than or equal to one do not produce a positive prime. If n is greater than two, both factors are integers greater than one, so the product is composite. The only remaining case is n equals two, which produces seven. Thus seven is the unique prime of this form.`
  },
  {
    slide: 32,
    chapter: "Proof writing",
    narration: `This summary connects a statement’s quantifier with the role of examples. A supporting example does not prove a universal statement; after seeing one successful case, we must still prove the property for every case. A violating example immediately disproves a universal statement. For an existential statement, one supporting example proves the claim, while a failed candidate proves nothing about other possible witnesses. The logical form tells us what evidence can settle the question.`
  },
  {
    slide: 33,
    chapter: "Proof writing",
    narration: `The comic illustrates a circular argument. “Clean the mess because it needs to be cleaned” merely restates the conclusion as its own reason. In a mathematical proof, the conclusion cannot be used as an unsupported premise. The chain of reasoning must begin with the hypothesis, definitions, axioms, or earlier results and then supply an independent bridge to the claim.`
  },
  {
    slide: 34,
    chapter: "Proof writing",
    narration: `Common proof errors are structural. Misinterpret the statement, and you prove the wrong claim. Use examples to prove a universal statement, and you have checked only special cases. Reuse one symbol for different objects, and the logic becomes ambiguous. Prove a converse instead of the stated implication, and the direction is wrong. Jump to a conclusion, and essential justification is missing. Beg the question, and the conclusion has been assumed. A reliable final check is to mark the hypothesis, target, domain, witnesses, case coverage, and every cited result.`
  },
  {
    slide: 35,
    chapter: "Proof writing",
    narration: `A proof should be complete without becoming an essay. Obvious arithmetic facts may need no detailed derivation, but any step that carries the logical burden should be justified. State the method you are using. Define what each symbol represents. Cite earlier results clearly, even when you do not repeat their proofs. Use enough words to explain why each equation is relevant. The goal is not maximum length; it is a readable argument that another student can verify without guessing.`
  },
  {
    slide: 2,
    chapter: "Summary and next steps",
    narration: `Let us bring Week Four together. Use proof by cases when an exhaustive partition makes each branch manageable. Let divisibility guide you toward remainder classes, and verify that no case is missing. For existence, either construct and check a witness or use a theorem or contradiction that guarantees one. For uniqueness, prove both existence and at-most-one. Examples have different force under universal and existential quantifiers, so read the statement before choosing evidence. Complete the mastery check now, then practise labelling the method, assumptions, witnesses, cases, and final conclusion in your own proofs.`
  }
];
