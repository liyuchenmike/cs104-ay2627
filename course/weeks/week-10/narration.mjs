export default [
  {
    slide: 1, chapter: "Sequences and explicit formulas",
    narration: `Welcome to Week Ten of CS104. This lecture studies sequences, first as ordered lists of numbers and then through their behavior as the index grows. We will write sequences with explicit formulas, use summation and product notation, and calculate finite sums. In the second half, we ask whether sequence terms approach a fixed number. Graphs give intuition, while the epsilon definition tells us exactly what a limit means. We will prove several limits directly, recognize two ways a sequence can diverge, and apply limit laws. Keep track of where the index starts: changing a starting index changes the terms in a sum or a sequence.`
  },
  {
    slide: 2, chapter: "Sequences and explicit formulas",
    narration: `Here is the lecture's route. Section eight point one represents sequences with explicit formulas, summation signs, and product signs. We will work with arithmetic and geometric patterns, a telescoping sum, and a change of index. Section eight point two turns to convergence and limits. We will compare convergent and divergent graphs, define closeness with an epsilon neighborhood, use an epsilon and threshold argument for proofs, and finish with limit theorems. The notation may look compact, but every expression is an instruction about which terms to include and what operation to perform.`
  },
  {
    slide: 3, chapter: "Sequences and explicit formulas",
    narration: `We begin with ways to represent a sequence. A sequence is an ordered collection of terms, each identified by an index. The order matters: the second term is not interchangeable with the fifth. A formula can describe a term directly from its index, while a recurrence can describe it through earlier terms. Summation and product notation then combine a selected range of terms. In the examples ahead, we will often start indexing at zero, as the slide does. Whenever you see a formula involving n, check whether n equal to zero is the first permitted input.`
  },
  {
    slide: 4, chapter: "Sequences and explicit formulas",
    narration: `These familiar lists show that sequences can have very different patterns. Here the natural numbers begin at zero. The even numbers are zero, two, four, and so on. The geometric example doubles from one to two, four, eight, and beyond. The Fibonacci list starts one, one, two, three, five, eight: after the first two entries, each term is the sum of the preceding two. The primes start two, three, five, seven, eleven, thirteen. Each list is ordered, but not every list is best described by the same kind of rule. The starting value and index convention must be stated before we write a formula.`
  },
  {
    slide: 5, chapter: "Sequences and explicit formulas",
    narration: `The slide denotes a sequence by a sub n with indices beginning at zero. An explicit formula gives a sub n directly. For the even numbers, a sub n equals two n. For the displayed geometric sequence, it equals two to the power n. The Fibonacci sequence also has the closed formula on the slide, involving the two numbers one plus or minus square root of five, divided by two. That expression is correct for the displayed one, one, two, three sequence when n starts at zero, but it is far less convenient than adding the previous two terms. An explicit formula is useful when it simplifies the question; it is not automatically the best representation.`
  },
  {
    slide: 6, chapter: "Summation and telescoping",
    narration: `The capital sigma means add terms while the index runs through the stated range. Sum from k equals m to n of a sub k means a sub m plus a sub m plus one, continuing through a sub n. The bounds are inclusive. In the first example, summing k itself lists m, m plus one, and all integers through n. In the second, summing two k from zero to n includes the first term zero and the final term two n. There are n plus one terms in that second sum, not n. Reading the lower and upper bounds before doing algebra prevents most indexing mistakes.`
  },
  {
    slide: 7, chapter: "Summation and telescoping",
    narration: `This exercise turns a written list into one sigma expression. For positive n, the numerators run from one to n plus one, while the denominators run from n to two n. Let i begin at zero. The first numerator is i plus one, and the first denominator is n plus i. When i reaches n, the term becomes n plus one over two n, exactly the last term shown. Therefore the entire list is the sum, for i from zero through n, of i plus one divided by n plus i. We chose the index by matching both endpoints, not merely by recognizing a pattern in the middle.`
  },
  {
    slide: 8, chapter: "Summation and telescoping",
    narration: `Now expand a sigma expression. The summand is negative one to the power i, divided by i plus one, and i runs from zero to two n. At zero the term is positive one. At one it is negative one half, at two positive one third, and the signs continue to alternate. The upper index two n is even, so the final term is positive one over two n plus one. Writing the first, a representative middle, and the last term is a quick way to check both the denominator shift and the final sign. The sigma sign is compact; it never changes which terms are actually included.`
  },
  {
    slide: 9, chapter: "Summation and telescoping",
    narration: `The sum from k equals one to n of one over k times k plus one has a useful decomposition. One over k times k plus one equals one over k minus one over k plus one. After substitution, the first few terms are one minus one half, then one half minus one third, then one third minus one fourth. Every interior fraction cancels with its neighbor. Only one and negative one over n plus one remain, so the sum equals one minus one over n plus one, or n over n plus one. This is called telescoping. Always write enough terms to see which boundary pieces survive; cancellation is not an excuse to forget an endpoint.`
  },
  {
    slide: 10, chapter: "Arithmetic and geometric sequences",
    narration: `An arithmetic sequence has a constant difference d between neighboring terms. Starting at a sub zero, its n-th term is a sub zero plus n times d. For example, the exercise sequence two, five, eight has d equal to three. To sum from index zero through n, pair the first and last terms: each pair has value a sub zero plus a sub n. There are n plus one terms, so the total is the first plus last, multiplied by n plus one, divided by two. The number of terms matters. A formula that uses n rather than n plus one would miss the index-zero term.`
  },
  {
    slide: 11, chapter: "Arithmetic and geometric sequences",
    narration: `A geometric sequence has a constant ratio r, so its n-th term is a sub zero times r to the power n. Adding from index zero to n gives a sub zero times the sum of one, r, up to r to the power n. When r is not one, this equals a sub zero times r to the n plus one minus one, divided by r minus one. One way to derive it is to multiply the sum by r and subtract the original, leaving only the two boundary terms. The displayed fraction is undefined at r equal to one. In that case every term equals a sub zero, and the sum is n plus one times a sub zero.`
  },
  {
    slide: 12, chapter: "Arithmetic and geometric sequences",
    narration: `Apply the two sum patterns. In part a, two, five, eight, through three hundred two is arithmetic with difference three. The index from the first to the last advances one hundred times, so there are one hundred one terms. Their average is one hundred fifty-two, and the sum is fifteen thousand three hundred fifty-two. In part b, powers of two run from exponent ten through exponent twenty-nine, giving twenty terms. The geometric sum is two to the power thirty minus two to the power ten. You may factor out two to the power ten and sum one through two to the power nineteen. Both approaches include the endpoints exactly once.`
  },
  {
    slide: 13, chapter: "Products and reindexing",
    narration: `The capital pi means multiply rather than add. Product from k equals m to n of a sub k expands to a sub m times a sub m plus one through a sub n. The first example multiplies consecutive integers from m to n. The second multiplies k over k plus one from one to n. Writing the factors gives one half times two thirds times three fourths, and so on, ending at n over n plus one. Almost everything cancels, leaving one over n plus one. This is a telescoping product. As with sums, the cancellation pattern is easiest to trust after the first and last factors are explicit.`
  },
  {
    slide: 14, chapter: "Products and reindexing",
    narration: `Summation and product notation obey different combination rules. Two sums over the same range can be combined term by term: sum a sub k plus sum b sub k equals sum of a sub k plus b sub k. A constant can be moved inside or outside a sum. For products, product a sub k times product b sub k equals product of a sub k times b sub k. But do not transfer a sum rule to a product without checking it. For example, a constant factor outside a product would be multiplied once for each index. The common range from m through n is crucial in all three displayed identities.`
  },
  {
    slide: 15, chapter: "Products and reindexing",
    narration: `The exercise sets a sub k equal to k plus one and b sub k equal to k minus one. In part a, combine the two sums over the same range before substituting: a sub k plus twice b sub k becomes k plus one plus two times k minus one, which simplifies to three k minus one. So the result is one sum of three k minus one from m through n. In part b, combine the products term by term. The new factor is k plus one times k minus one, or k squared minus one, giving one product over the same bounds. Notice that a plus sign between products would not permit this multiplication rule.`
  },
  {
    slide: 16, chapter: "Products and reindexing",
    narration: `A change of index renames the running variable and changes the bounds with it. The slide starts with the sum from k equals one through n of one over k plus one. Set j equal to k plus one. When k equals one, j equals two; when k equals n, j equals n plus one. The summand becomes one over j. So the same sum is from j equals two through n plus one of one over j. No term changed: both versions list one half, one third, through one over n plus one. A common error is to change the symbol in the summand but leave the old bounds behind.`
  },
  {
    slide: 17, chapter: "Convergent and divergent behavior",
    narration: `We now shift from finite combinations of terms to the long-run behavior of a sequence. Section eight point two asks what happens to x sub n when n grows without bound. A limit is not simply the next term in a pattern. It is a number that the terms eventually approach as closely as we demand. Some sequences grow away without bound, and others oscillate forever, so they have no finite limit. We will first read these possibilities from graphs, then replace the visual intuition with a precise definition that can support proofs.`
  },
  {
    slide: 18, chapter: "Convergent and divergent behavior",
    narration: `The plotted points represent x sub n equal to one over n, starting at n equals one. The values one, one half, one third, and so on remain positive, but they become smaller. The dots approach the horizontal axis. We say the sequence converges to zero and write that its limit as n goes to infinity is zero. Convergence does not require a term to equal the limit. None of these positive terms is zero. Instead, for every requested positive distance from zero, sufficiently late terms fall within that distance. The graph suggests the answer; an epsilon proof will establish it.`
  },
  {
    slide: 19, chapter: "Convergent and divergent behavior",
    narration: `These two graphs diverge for different reasons. On the left, x sub n equals n plus one, so the points grow beyond every fixed finite value. On the right, x sub n equals negative one raised to n plus one. Its terms alternate between positive one and negative one forever. The second sequence stays bounded, yet it still has no single limit because neither alternating branch disappears. Thus bounded does not automatically mean convergent, and divergent does not always mean unbounded. When examining a proposed limit, look at what every sufficiently late term does, not just a few dots.`
  },
  {
    slide: 20, chapter: "Convergent and divergent behavior",
    narration: `Now compare two convergent patterns. The sequence n over n plus one equals one minus one over n plus one, so it approaches one from below. The sequence one plus negative one half to the power n alternates around one, but the size of the correction shrinks geometrically to zero. It also approaches one. Oscillation itself is not the problem; persistent oscillation is. The graph on the right crosses above and below the target, yet its points settle closer and closer. This distinction will help when we test whether a sequence meets the formal limit definition.`
  },
  {
    slide: 21, chapter: "Epsilon neighborhoods and limits",
    narration: `To define closeness, choose a real number a and a positive epsilon. The epsilon neighborhood of a contains all real x for which the absolute distance between x and a is less than epsilon. On the number line this is the open interval from a minus epsilon to a plus epsilon. Epsilon can be very small, but it must be positive. The strict inequality excludes the two endpoints. This neighborhood language lets us turn the phrase close to a into a specific condition that we can verify with algebra. The next slide applies it to the tail of a sequence.`
  },
  {
    slide: 22, chapter: "Epsilon neighborhoods and limits",
    narration: `A sequence x sub n converges to x if, for every positive epsilon, we can find an index K, possibly depending on epsilon, such that every term with n at least K lies in the epsilon neighborhood of x. Equivalently, the absolute value of x sub n minus x is less than epsilon for all n at least K. In the picture, a few early crosses lie outside the horizontal band, but after the vertical line at K, all crosses stay inside it. The order of the words matters: epsilon is chosen first, then we may choose K. K must control the whole tail, not just one selected late term.`
  },
  {
    slide: 23, chapter: "Proving convergence and divergence",
    narration: `Use the definition for two basic examples. A constant sequence x sub n equals c has distance zero from c at every index, so any valid threshold K works for every positive epsilon. For x sub n equal to one over n, choose an integer K larger than one over epsilon. Then whenever n is at least K, the distance from zero is one over n, at most one over K, and therefore less than epsilon. This gives the threshold explicitly. The examples also show why a proof begins with an arbitrary epsilon rather than selecting one convenient tolerance.`
  },
  {
    slide: 24, chapter: "Proving convergence and divergence",
    narration: `The proposed limit of three n plus one over two n plus five is three halves. Subtract the proposed limit before choosing K. A common denominator gives absolute difference thirteen over four n plus ten. This is less than thirteen over four n for positive n. Given any epsilon above zero, choose an integer K larger than thirteen over four epsilon. Then all n at least K make the difference less than epsilon. The computation identifies a concrete threshold and proves the limit. Dividing numerator and denominator by n also suggests three halves, but the epsilon argument explains why the approach is rigorous.`
  },
  {
    slide: 25, chapter: "Proving convergence and divergence",
    narration: `The exercise asks us to prove four to the n over n factorial tends to zero using the definition. Its neighboring-term ratio is four over n plus one. Once n is at least seven, that ratio is at most one half. Hence every later term is at most the seventh term times one half raised to the number of additional steps. A geometric tail with ratio one half approaches zero. For any positive epsilon, choose K large enough that this upper bound is below epsilon; then every n at least K satisfies the required inequality. The factorial eventually wins because its new factor n plus one keeps increasing while the numerator gains only a factor of four.`
  },
  {
    slide: 26, chapter: "Proving convergence and divergence",
    narration: `Here x sub n equals one plus negative one to the power n. Even indices give two, while odd indices give zero, and both kinds of indices occur arbitrarily late. Suppose there were a limit L. Choose epsilon equal to one half. Beyond the promised threshold, an even term would have to lie within one half of L, and an odd term would also have to lie within one half of L. But two and zero are distance two apart, too far for both to fit within those half-unit neighborhoods of the same L. So no such limit exists. This is a direct contradiction to the epsilon definition.`
  },
  {
    slide: 27, chapter: "Limit laws and applications",
    narration: `Once two sequences have limits x and y, the limit theorems let us combine them. Sums and differences approach x plus y and x minus y; products approach x times y; and a fixed positive integer power approaches the corresponding power of x. For a quotient, the denominator terms must be nonzero and the denominator limit y must also be nonzero. That last condition is essential: dividing by values tending to zero may behave very differently. These rules are efficient after the component limits are known. They do not prove convergence of a sequence whose pieces have no limits.`
  },
  {
    slide: 28, chapter: "Limit laws and applications",
    narration: `Apply the limit laws carefully. For a real constant c, c over n to the power k tends to zero when k is a positive integer. The slide says k belongs to the natural numbers, but this lecture included zero among natural numbers earlier. At k equal to zero, the expression equals c and generally does not approach zero, so the positive-exponent condition is necessary. For part b, divide the cubic fraction by n cubed: two plus one over n, divided by one plus five over n cubed, tends to two. In part c, n over one plus two n tends to one half, and its fifth power tends to one over thirty-two.`
  },
  {
    slide: 29, chapter: "Limit laws and applications",
    narration: `The final slide marks a continuation of the limit-theorem discussion, without adding a new displayed formula. Before leaving the lecture, connect the two halves. A sequence rule tells us how to identify its terms; sigma and pi notation combine a finite range; a limit concerns the behavior of all sufficiently late terms. For a direct proof, start with an arbitrary positive epsilon and find a threshold that controls the entire tail. For a calculation, use limit laws only after checking their conditions, especially the nonzero denominator in a quotient and the positive exponent in the power-over-n example. The mastery questions will ask you to make those choices yourself.`
  }
];
