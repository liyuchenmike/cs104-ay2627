export default [
  {
    "slide": 1,
    "chapter": "Recursive descriptions",
    "narration": "Welcome to Week Eleven of CS104. This lecture studies recursion: defining a new value in terms of values already known. The first part constructs sequences from initial conditions and recurrence rules. We will see Fibonacci numbers in a rabbit model, count the moves in the Tower of Hanoi, and reason about ways to climb stairs. The second part asks for explicit formulas, which give the value at an index without calculating every earlier term. We will derive a characteristic equation for second-order recurrences, then work through the cases of distinct and repeated roots. The slide calls this Lecture Nine, while this course portal places it in Week Eleven."
  },
  {
    "slide": 2,
    "chapter": "Recursive descriptions",
    "narration": "Here is the route. Section nine point one defines sequences recursively. An initial condition anchors the sequence, and a recurrence tells us how to continue it. Arithmetic and geometric sequences show simple one-step rules; Fibonacci needs two earlier terms. The rabbit and Hanoi stories turn those rules into counting models. Section nine point two narrows to second-order linear homogeneous recurrences with constant coefficients. We will try solutions that are powers of a number, solve a quadratic characteristic equation, and use initial values to select one particular sequence. The two algebraic cases are distinct roots and a repeated root. Keep the difference between a rule and an explicit formula in mind throughout."
  },
  {
    "slide": 3,
    "chapter": "Recursive descriptions",
    "narration": "We begin by defining a sequence recursively. A sequence is an ordered collection of values indexed by integers, often starting at zero. A recursive description has two ingredients: enough starting values, and a rule that expresses each later value using earlier ones. The starting values matter because a rule such as take the previous term and add three describes many different sequences until we say where it begins. If the rule looks back two positions, we usually need two initial values. This week builds on the multiple-base-case reasoning from the induction lecture: the number of starting facts should match the dependencies in the recurrence."
  },
  {
    "slide": 4,
    "chapter": "Recursive descriptions",
    "narration": "The slide gives three familiar recursive definitions. For an arithmetic sequence, start with a sub zero equal to c, then add the fixed difference d each time: a sub n equals a sub n minus one plus d. Its explicit form is c plus n d. For a geometric sequence, start at c and multiply by the fixed ratio r each time, giving c times r to the n. Factorial starts with zero factorial equal to one and multiplies the preceding factorial by n for n at least one. For example, four factorial is four times three factorial, or twenty-four. Notice that each rule needs its initial condition; the recurrence alone does not determine the values."
  },
  {
    "slide": 5,
    "chapter": "Fibonacci and rabbits",
    "narration": "Definition nine point one point one introduces the Fibonacci sequence used in this deck. Its first two values are f sub zero equals one and f sub one equals one. From index two onward, each term is the sum of the previous two: f sub n equals f sub n minus one plus f sub n minus two. So the sequence begins one, one, two, three, five, eight, and thirteen. Some books use zero and one as their first two values, which shifts the indices. In this lesson we keep the slide's one-and-one convention. The spiral images illustrate a common visual association, but the mathematical definition is the recurrence together with those two initial values."
  },
  {
    "slide": 6,
    "chapter": "Fibonacci and rabbits",
    "narration": "The rabbit story explains why a two-term recurrence appears. One pair is born at the beginning of the year. A pair does not reproduce during its first month, then produces one new pair at the end of each later month; no rabbits die. To count accurately, track pairs rather than individual animals, because every birth produces one pair. At the end of a month, the population consists of all pairs alive one month earlier plus the newborn pairs. The newborns come from pairs old enough to reproduce, which correspond to the pairs counted two months earlier. This separation between existing and newly born pairs leads to the Fibonacci rule on the next slide."
  },
  {
    "slide": 7,
    "chapter": "Fibonacci and rabbits",
    "narration": "Let r sub n count rabbit pairs alive at the end of month n, and let a sub n count pairs born then. No pair dies, so r sub n equals r sub n minus one plus a sub n. The reproductive timing gives a sub n equal to r sub n minus two. Therefore r sub n equals r sub n minus one plus r sub n minus two for n at least two, with r sub zero and r sub one both equal to one. The values match this deck's Fibonacci sequence. At the end of twelve months there are r sub twelve, or two hundred thirty-three pairs, which means four hundred sixty-six individual rabbits under the model. State the unit when reporting the answer: pairs and rabbits are not the same count."
  },
  {
    "slide": 8,
    "chapter": "Tower of Hanoi",
    "narration": "Now consider the Tower of Hanoi. All k disks begin on one pole, ordered with the largest at the bottom. We want to transfer the stack to another pole using a third pole. A move carries exactly one disk, and a larger disk may never sit on a smaller one. Counting random legal moves is not the goal; we want the minimum number needed. The largest disk cannot move until every smaller disk is out of its way. That observation suggests a recursive plan: move the smaller tower aside, move the largest disk once, then move the smaller tower onto it. The next two slides turn that plan into a recurrence."
  },
  {
    "slide": 9,
    "chapter": "Tower of Hanoi",
    "narration": "Read the diagram as three stages. First, transfer the top k minus one disks from pole A to the spare pole B. The largest base disk is now exposed on A. Second, move that one base disk from A to the destination pole C. Third, transfer the k minus one disks from B onto C. Each smaller-tower transfer is itself the same kind of Hanoi problem, just with one fewer disk. The rules force these stages if we want to move the largest disk and finish with a complete stack. Thus the diagram is both a constructive strategy and a way to see why any solution needs at least the two smaller transfers and one base-disk move."
  },
  {
    "slide": 10,
    "chapter": "Tower of Hanoi",
    "narration": "Let m sub k be the minimum number of moves for k disks. The first smaller-tower transfer costs m sub k minus one moves. The base disk costs one move. The final smaller-tower transfer costs another m sub k minus one moves. Therefore m sub k equals two times m sub k minus one plus one for k at least two. With just one disk, m sub one equals one. The recursive strategy achieves this count, and the largest disk cannot be moved without clearing the smaller disks, so it is a minimum. The extra plus one is easy to overlook: it is the single move of the largest disk between the two recursive calls."
  },
  {
    "slide": 11,
    "chapter": "Tower of Hanoi",
    "narration": "Unroll the Hanoi recurrence for the first few cases. One disk needs one move; two need three; three need seven; four need fifteen. These are one less than successive powers of two. The slide writes the pattern as one plus two plus four and so on through two raised to the exponent k minus one. That geometric sum is two raised to exponent k, then subtract one. We can verify it by substitution: if m at index k minus one is one less than two raised to exponent k minus one, then twice that value plus one is one less than two raised to exponent k. For thirty disks the minimum is two raised to the thirtieth power, then subtract one: one billion seventy-three million seven hundred forty-one thousand eight hundred twenty-three moves. Recursive growth becomes enormous quickly."
  },
  {
    "slide": 12,
    "chapter": "Counting staircase paths",
    "narration": "The stair-climbing problem asks for the number of ways to reach the top when every move climbs one or two stairs. Let s sub n be the number of ways to climb n stairs. Classify a route by its last move. If that move is one stair, everything before it is a way to climb n minus one stairs. If it is two, everything before it is a way to climb n minus two. The two classes do not overlap, so s sub n equals s sub n minus one plus s sub n minus two. There is one empty route for zero stairs and one route for one stair, giving s sub zero equals s sub one equals one. Thus the counts match this lecture's Fibonacci indexing: one, one, two, three, five, and so on."
  },
  {
    "slide": 13,
    "chapter": "Characteristic equation",
    "narration": "Section nine point two changes the question. A recurrence tells us how to compute the next term from earlier terms, but an explicit formula gives a term directly from its index. We focus on a specific family: second-order linear homogeneous recurrence relations with constant coefficients. Second-order means the rule reaches back two terms. Linear means each earlier term appears only to the first power, with no products of sequence terms. Homogeneous means there is no independent added term. Constant coefficients mean the multipliers do not vary with the index. For this family, a quadratic equation provides a practical route to an explicit expression."
  },
  {
    "slide": 14,
    "chapter": "Characteristic equation",
    "narration": "The precise form is a sub k equals A times a sub k minus one plus B times a sub k minus two, for k at least two, where A and B are fixed real numbers and B is nonzero. The slide sorts examples. Three times the previous term plus two times the term before fits. So does a rule using only the term two steps back: take A equal to zero. A rule reaching back three terms is third-order. A square or product of sequence terms makes a rule nonlinear. An extra plus one makes it nonhomogeneous. A multiplier such as k minus one makes coefficients variable. Classification matters because the characteristic-root formulas ahead apply to this exact family."
  },
  {
    "slide": 15,
    "chapter": "Characteristic equation",
    "narration": "To derive the characteristic equation, try a sequence of powers: a sub k equals t to the k, with t nonzero. Substitute this guess into a sub k equals A a sub k minus one plus B a sub k minus two. We obtain t to the k equals A times t to the k minus one plus B times t to the k minus two. Divide through by t to the k minus two. The result is t squared minus A t minus B equals zero. Every root t of that quadratic produces a power sequence satisfying the recurrence. Be careful with the sign on B: the recurrence has plus B on the right, so the characteristic polynomial has minus B on the left. Initial values have not been used yet."
  },
  {
    "slide": 16,
    "chapter": "Distinct-root solutions",
    "narration": "For a concrete example, the recurrence is a sub k equals a sub k minus one plus two a sub k minus two. Here A is one and B is two, so the characteristic equation is t squared minus t minus two equals zero. Factor it as t minus two times t plus one. The distinct roots are two and negative one, giving the power sequences two to the k and negative one to the k. Each solves the recurrence. Because the rule is linear and homogeneous, adding scaled solutions also gives a solution. Thus a general candidate is C times two to the k plus D times negative one to the k. The constants depend on whatever first two terms we specify."
  },
  {
    "slide": 17,
    "chapter": "Distinct-root solutions",
    "narration": "The distinct-roots theorem makes that candidate general. If the characteristic equation has two different roots r and s, every sequence satisfying this second-order recurrence has the form a sub k equals C r to the k plus D s to the k. The first two values determine the constants. At k equals zero, a sub zero equals C plus D. At k equals one, a sub one equals C r plus D s. Because r and s differ, these two equations have a unique solution for C and D. The slide omits the full theorem proof, but the structure is useful: roots determine the building-block sequences, while initial conditions select their combination."
  },
  {
    "slide": 18,
    "chapter": "Fibonacci explicit formula",
    "narration": "Apply the distinct-root method to this deck's Fibonacci sequence, with f sub zero and f sub one both equal to one. The recurrence has A and B both equal to one, so its characteristic equation is t squared minus t minus one equals zero. The quadratic formula gives two roots. Phi equals the quantity one plus square root of five, all over two. Psi equals the quantity one minus square root of five, all over two. We therefore write f sub k as C times phi to the power k plus D times psi to the power k. The next step is not another recurrence calculation; it is solving for C and D from the two starting values. Remember that this convention is shifted from the common zero-one Fibonacci indexing."
  },
  {
    "slide": 19,
    "chapter": "Fibonacci explicit formula",
    "narration": "Use f sub zero equals one to get C plus D equals one. Use f sub one equals one to get C phi plus D psi equals one. Solving gives C equal to phi divided by square root of five and D equal to negative psi divided by square root of five. Substituting yields f sub k equal to phi raised to exponent k plus one, minus psi raised to exponent k plus one, with the whole difference divided by square root of five. Check the index: at k equals zero, the numerator is phi minus psi, which is square root of five, so the formula gives one. At k equals one it also gives one. The exponent k plus one reflects this deck's f sub zero equals f sub one equals one convention."
  },
  {
    "slide": 20,
    "chapter": "Repeated-root solutions",
    "narration": "What if the characteristic quadratic has only one real root because the same root occurs twice? We cannot use two copies of r to the k as independent building blocks. The single-root theorem supplies a second form, k times r to the k. The general solution is a sub k equals C r to the k plus D k r to the k, or equivalently C plus D k times r to the k. Again two known values determine the constants. The zero-index value is especially convenient: at k equals zero, the D term vanishes, so C equals a sub zero. The next example uses a repeated root of two."
  },
  {
    "slide": 21,
    "chapter": "Repeated-root solutions",
    "narration": "The example defines b sub k as four times b sub k minus one minus four times b sub k minus two, beginning with b sub zero equals one and b sub one equals three. Here A is four and B is negative four. The characteristic polynomial is t squared minus four t plus four, which factors as the square of t minus two. There is a repeated root r equals two. Therefore write b sub k as C times two to the k plus D times k times two to the k. We cannot determine C and D from the recurrence alone; the two given starting values will fix them. Notice that the coefficient B is allowed to be negative, as long as it is not zero."
  },
  {
    "slide": 22,
    "chapter": "Repeated-root solutions",
    "narration": "Now substitute the two starting values. At k equals zero, b sub zero equals C, so C is one. At k equals one, b sub one equals two C plus two D, so three equals two plus two D and D is one half. The explicit formula is b sub k equals two to the k times one plus k over two. Check k equals two: the formula gives four times two, or eight, and the recurrence gives four times three minus four times one, also eight. The highlighted closing question asks what happens when the characteristic equation has no real root. That complex-root case is beyond the two real-root formulas developed here; it is a useful next question, not a reason to apply either theorem blindly."
  }
];
