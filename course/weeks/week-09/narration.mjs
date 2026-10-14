export default [
  {
    slide: 1, chapter: "The induction principle",
    narration: `Welcome to Week Nine of CS104. This lecture is about mathematical induction: a way to prove a statement for every integer in a specified range without checking the integers one at a time forever. We will learn how a base case and an inductive step work together, apply the method to sums, divisibility, and inequalities, and diagnose two convincing but faulty proofs. Then we will use strong induction and multiple base cases when the next result depends on more than one earlier result. Throughout, pay attention to exactly where the statement starts and what the induction hypothesis actually gives us.`
  },
  {
    slide: 2, chapter: "The induction principle",
    narration: `Here is the route through the lecture. Section seven point one introduces the ordinary principle of mathematical induction and then tests our understanding with fallacies. A calculation in the inductive step can look impeccable while the overall proof still fails. Section seven point two develops other variants. Strong induction lets us assume all earlier cases when proving the next one. Multiple base cases handle statements that depend on several preceding terms, especially recursive sequences. These methods share the same logic: establish a starting foothold, then show that the property cannot stop being true.`
  },
  {
    slide: 3, chapter: "The induction principle",
    narration: `We start with the ordinary induction principle. Suppose a statement depends on a positive integer n. A few successful examples do not prove it for every positive integer, because there is always another value we have not checked. Induction replaces that endless list with two finite tasks: verify the first value, and prove that any true case leads to the next one. The word any matters. We prove the step for an arbitrary integer in the range, not just for the first few values on the slide.`
  },
  {
    slide: 4, chapter: "The induction principle",
    narration: `Imagine a ladder with any number of steps. First, we can reach step one. Second, whenever we stand on step k, we can reach step k plus one. For a four-step ladder, start at one and apply the second rule successively for k equal to one, two, and three. The same pair of rules works no matter how tall the ladder is. The first rule is the base case; the second is the inductive step. Neither rule alone suffices. A way to move upward is useless without a starting step, while reaching step one tells us nothing about higher steps.`
  },
  {
    slide: 5, chapter: "The induction principle",
    narration: `The theorem makes the ladder precise. Let p of n be a statement for positive integers. Prove p of one. Then take an arbitrary positive integer k, assume p of k, and under that assumption prove p of k plus one. We may then conclude that p of n holds for every positive integer n. The assumption p of k is called the induction hypothesis. We do not assume the entire claim we are trying to prove; we use one conditional step to connect each case to the next. If the intended range begins at a number other than one, move the base case and the step range to that starting number.`
  },
  {
    slide: 6, chapter: "Arithmetic and geometric sums",
    narration: `Try induction on two familiar finite sums. The first says one plus two through n equals the product of n and n plus one, divided by two, for positive n. The second says one plus r through r to the power n equals the quantity r raised to the exponent n plus one, minus one, all divided by r minus one, for integers n at least zero. That displayed fraction requires r not equal to one. If r equals one, there are n plus one terms, each equal to one, so the sum is simply n plus one. Notice also that the geometric sum starts at n equal to zero, so its base case is p of zero rather than p of one.`
  },
  {
    slide: 7, chapter: "Arithmetic and geometric sums",
    narration: `For the arithmetic sum, the base case n equals one reads one equals one times two divided by two. Now assume that the sum through k is the product of k and k plus one, divided by two. To obtain the sum through k plus one, append the new term k plus one. Factor out k plus one. The other factor is k divided by two, plus one, which equals k plus two divided by two. So the result is the product of k plus one and k plus two, divided by two. That is exactly the formula with n replaced by k plus one. We have proved both required parts.`
  },
  {
    slide: 8, chapter: "Arithmetic and geometric sums",
    narration: `For the geometric sum, assume r is not one and define p of n for n at least zero. At n equals zero, the left side is one, and the formula gives r minus one over r minus one, also one. Assume the sum through r to the power k equals the quantity r raised to the exponent k plus one, minus one, all divided by r minus one. Add the next term, r raised to the exponent k plus one. After putting both terms over the common denominator r minus one, the numerator simplifies to r raised to the exponent k plus two, minus one. This is the required formula at k plus one. The case r equals one remains true by the separate direct expression, n plus one.`
  },
  {
    slide: 9, chapter: "Sum of squares",
    narration: `Our next proposition sums squares: one squared plus two squared through n squared equals the product of n, n plus one, and two n plus one, all divided by six. It may be hard to guess this formula, but once given, induction checks it systematically. Start at n equals one. The left side has the single term one squared, which is one. The right side becomes one times two times three divided by six, again one. That establishes the first case. The real work is now to show that the formula for k leads to the formula for k plus one.`
  },
  {
    slide: 10, chapter: "Sum of squares",
    narration: `The slide puts the induction hypothesis and the target side by side. Assume the sum of the first k squares is the product of k, k plus one, and two k plus one, divided by six. The target contains k plus one terms and should equal the product of k plus one, k plus two, and two k plus three, divided by six. The bridge is the one new term, the square of k plus one. Write the sum through k plus one as the known sum through k plus that square. This identifies precisely where we may substitute the induction hypothesis. We still have to simplify the resulting expression to match the target.`
  },
  {
    slide: 11, chapter: "Sum of squares",
    narration: `Substitute the induction hypothesis into that bridge. We have k times k plus one times two k plus one over six, plus k plus one squared. Factor out k plus one and use a common denominator of six. The remaining numerator is k times two k plus one, plus six times k plus one. Expanding gives two k squared plus seven k plus six. That factors as k plus two times two k plus three. Therefore the whole expression is k plus one times k plus two times two k plus three over six, exactly the formula at k plus one. This factorisation completes the inductive step.`
  },
  {
    slide: 12, chapter: "Divisibility and inequality",
    narration: `Induction also proves divisibility statements. The proposition says that, for every positive integer n, two to the power two n minus one is divisible by three. We will use the definition: an integer is divisible by three if it equals three times another integer. For the base case n equals one, two squared minus one equals three. Thus the required multiple of three is visible immediately. In the step, the challenge is to relate the exponent two k plus two to the exponent two k that appears in the induction hypothesis.`
  },
  {
    slide: 13, chapter: "Divisibility and inequality",
    narration: `Make the hypothesis concrete. Assume that two raised to the exponent two k, minus one, equals three m for some integer m. Our goal is to find an integer s such that two raised to the exponent two times the quantity k plus one, minus one, equals three s. Naming the integer multiplier prevents us from treating divisibility as a vague claim. Since raising the exponent by two multiplies the power by four, we should rewrite four as three plus one. That will leave a copy of two raised to the exponent two k, minus one, exactly the expression the hypothesis controls.`
  },
  {
    slide: 14, chapter: "Divisibility and inequality",
    narration: `Here is the calculation. The expression for k plus one equals four times two raised to the exponent two k, minus one. Replace four by three plus one. The result is three times two raised to two k, plus the quantity two raised to two k minus one. By the induction hypothesis, that last quantity is three m. Hence the whole expression equals three times the integer given by two raised to two k plus m. This supplies the required multiplier s and proves the next case. Together with the base case, it establishes divisibility for every positive n.`
  },
  {
    slide: 15, chapter: "Divisibility and inequality",
    narration: `The next practice problem is an inequality: prove that two n plus one is less than two to the power n for every integer n at least three. The threshold is part of the claim. At n equal to two, both sides are five and four respectively, so the inequality is false; starting at three matters. Check n equals three: seven is less than eight. For the step, add two to the left side to move from two k plus one to two times k plus one, plus one. On the right, moving from two to the k to two to the k plus one doubles the quantity, leaving room for the added two.`
  },
  {
    slide: 16, chapter: "Divisibility and inequality",
    narration: `The proof begins at n equals three, where seven is less than eight. Now take k at least three and assume two k plus one is less than two to the power k. The next left side is two k plus three, which is two more than the current left side. Therefore two k plus three is less than two to the power k plus two. Since k is at least three, two is less than two to the power k. So this is less than two to the power k plus two to the power k, or two to the power k plus one. We have reached the next case with strict inequalities throughout.`
  },
  {
    slide: 17, chapter: "Faulty induction proofs",
    narration: `This slide deliberately offers a false formula: one plus two through n supposedly equals n squared plus n plus one, divided by two. Its inductive calculation works conditionally. If the false formula held at k, adding k plus one would produce the same false formula at k plus one. But there is no true starting case. At n equals one, the left side is one while the proposed right side is three halves. An implication from a false hypothesis can still be valid; it does not establish that the hypothesis ever holds. This is why we must verify the base case separately, even when the algebra in the step looks flawless.`
  },
  {
    slide: 18, chapter: "Faulty induction proofs",
    narration: `The famous cows argument has the opposite problem. A one-cow group certainly has one colour, so the base case is true. For a group of k plus one cows, the argument looks at the first k and last k cows, then says they share cows in the middle and must therefore have the same colour. That overlap exists only when k is at least two. At the crucial first step, k equals one, the two one-cow groups are disjoint. Nothing connects their colours, so p of one does not imply p of two. The induction chain breaks immediately. When checking a step, test it at the first value where it must operate.`
  },
  {
    slide: 19, chapter: "Strong induction and binary sums",
    narration: `Section seven point two introduces variants of induction. The central question is how much earlier information a step needs. Ordinary induction presents p of k when proving p of k plus one. Strong induction presents all the statements from the base case through p of k. Later, if a recurrence uses two or three preceding terms, we will give the argument the appropriate number of starting cases. These are different proof formats for making the dependency explicit. We begin with the binary representation of positive integers.`
  },
  {
    slide: 20, chapter: "Strong induction and binary sums",
    narration: `Every positive integer can be written as a sum of distinct powers of two. Four is two squared. Eleven is two cubed plus two plus one. Fifty-four is thirty-two plus sixteen plus four plus two. Distinct means no power appears twice in the sum; each power is either present or absent, just like a binary digit. The base case is one equals two to the power zero. To prove this for all positive integers, we need a reliable way to construct a representation for the next integer while keeping the powers distinct.`
  },
  {
    slide: 21, chapter: "Strong induction and binary sums",
    narration: `A first attempt uses ordinary induction. Assume k is already a sum of distinct powers of two and add one, which is two to the power zero. That does not automatically give distinct powers: if the representation of k already contains one, the power zero appears twice. We could develop a carrying argument, as in binary arithmetic, but the simple line on the slide does not prove the next case. This is a gap in that attempted proof, not a failure of ordinary induction as a logical principle. The lecture now chooses strong induction, which gives a particularly clean argument using a smaller remainder.`
  },
  {
    slide: 22, chapter: "Strong induction and binary sums",
    narration: `Strong induction begins with p of one as before. For an arbitrary k, assume every case p of one through p of k is true, and use all of them as needed to prove p of k plus one. The diagram shows the growing stock of established cases feeding each next case. This is a valid induction principle, not permission to assume the conclusion. The hypotheses stop at k; the claim to be proved is k plus one. One can justify the principle by applying ordinary induction to the combined statement that all cases through k are true.`
  },
  {
    slide: 23, chapter: "Strong induction and binary sums",
    narration: `For the binary-sum proposition, the strong induction hypothesis says that each positive integer from one through k has a representation using distinct powers of two. We must represent k plus one. A useful move is to choose the largest power of two no greater than k plus one. If k plus one is exactly that power, we are done. Otherwise, subtract it. The remainder is positive and smaller than k plus one, so it falls within the strong hypothesis. We then need to check that the remainder's powers cannot repeat the large power we selected.`
  },
  {
    slide: 24, chapter: "Strong induction and binary sums",
    narration: `Let two to the power j be the largest power of two no greater than k plus one. If equality holds, that single power is the representation. Otherwise write k plus one as two to the j plus a positive remainder m. Maximality of j implies m is less than two to the j, and certainly m is at most k. The strong hypothesis represents m using distinct powers of two. Every power in that representation has exponent below j, because m itself is smaller than two to the j. Adding the selected power therefore creates no duplicate. Both cases are covered, completing the induction proof.`
  },
  {
    slide: 25, chapter: "Continued fractions",
    narration: `This slide uses strong induction in a different setting: every rational number can be represented by a continued fraction. Under the recursive description here, an integer is a continued fraction, and we can form a new one by taking an integer q plus one over a nonzero continued fraction. Consider a rational number with positive denominator d. At d equal to one it is an integer. For larger d, use division with remainder to write its numerator as q d plus r, where zero is at most r and r is less than d. If r is zero, the number is q. Otherwise it equals q plus one divided by the fraction d over r. The inner rational number, d over r, has positive denominator r, smaller than d, so the strong induction hypothesis covers it. This is the Euclidean algorithm expressed as a continued fraction.`
  },
  {
    slide: 26, chapter: "Multiple base cases",
    narration: `Now the step may depend on two adjacent earlier statements. The first variation says: prove p of one and p of two. Then, for every k at least two, assume both p of k minus one and p of k, and prove p of k plus one. At k equals two, the two base cases give p of three. At k equals three, p of two and the newly established p of three give p of four, and so on. One base case would be insufficient for this step, because it asks for two earlier facts at its first application.`
  },
  {
    slide: 27, chapter: "Multiple base cases",
    narration: `The general variation has d consecutive base cases: p of one through p of d. For each k at least d, a step may use the d most recent statements, from p of k minus d plus one through p of k, to prove p of k plus one. This describes the dependency pattern of a recurrence using d preceding terms. The bookkeeping is important: the first step begins at k equal to d and uses exactly the d statements already verified. Once the next statement is obtained, the window shifts forward one place. The next example uses three base cases.`
  },
  {
    slide: 28, chapter: "Multiple base cases",
    narration: `Define a sequence with first terms one, one, and three. Every later term is the sum of the preceding three. Thus the fourth, fifth, and sixth terms are five, nine, and seventeen, as shown. The proposition claims that a sub n is at most two to the power n minus one for every positive n. Check the three required starting cases: one is at most one, one is at most two, and three is at most four. To prove the next bound, we will need the bounds for all three terms appearing in the recurrence. This is why the multiple-base-case form fits naturally.`
  },
  {
    slide: 29, chapter: "Multiple base cases",
    narration: `Take k at least three and assume the required bounds for a sub k minus two, a sub k minus one, and a sub k. The recurrence gives a sub k plus one as their sum. The hypotheses bound that sum by two to the k minus three, plus two to the k minus two, plus two to the k minus one. Factor out two to the k minus three: the coefficient is one plus two plus four, or seven. Since seven is at most eight, the result is at most eight times two to the k minus three, which equals two to the k. That is precisely the target bound at index k plus one.`
  },
  {
    slide: 30, chapter: "A two-term recurrence",
    narration: `The final practice problem starts a sequence at index zero. We are given s sub zero equals zero, s sub one equals four, and each later term equals six times the preceding term minus five times the term before that. The proposed closed form is s sub n equals five to the power n minus one for all n at least zero. Because the recurrence looks back two places, verify the formula at both zero and one. The inductive step must use both formulas at k minus one and k to prove the formula at k plus one. Keep those two hypotheses visible when you substitute into the recurrence.`
  },
  {
    slide: 31, chapter: "A two-term recurrence",
    narration: `At zero, five to the power zero minus one is zero; at one, five minus one is four. Both bases match the given values. Now let k be at least one. The first induction hypothesis gives s sub k minus one as five raised to the exponent k minus one, then subtract one. The second gives s sub k as five to the power k, then subtract one. The recurrence says to multiply s sub k by six and subtract five times s sub k minus one. After substitution, the first contribution is six times the difference between five to the power k and one. The second is five times the difference between five raised to the exponent k minus one and one. Subtract the second contribution from the first. The power terms simplify to five to the power k plus one, while the constants give negative one. This proves the formula at k plus one. The step needed both preceding claims, even though the slide's closing shorthand names only one.`
  }
];
