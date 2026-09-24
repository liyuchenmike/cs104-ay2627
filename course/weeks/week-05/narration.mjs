export default [
  {
    slide: 1, chapter: "Sets and membership",
    narration: `Welcome to Week Five of CS104: Sets and Functions. We now use the language of logic and proof to describe collections of objects and rules that connect them. Sets tell us which objects belong together. Functions assign an output to each permitted input. Our aim is to move comfortably between notation, diagrams, and proofs. In particular, we will distinguish membership from containment, a codomain from a range, and the two separate requirements that make a function a bijection.`
  },
  {
    slide: 2, chapter: "Sets and membership",
    narration: `The lecture has two parts. We begin with ways to represent sets, then study subsets, proper subsets, and operations such as union and intersection. Cartesian products introduce ordered pairs and connect sets with geometry. The second part defines functions precisely. We identify domains, codomains, images, preimages, and ranges, before proving whether a function is injective, surjective, or both. Each definition provides a proof strategy, so keep asking what an arbitrary element must satisfy and what would count as a counterexample.`
  },
  {
    slide: 3, chapter: "Sets and membership",
    narration: `Section five point one begins with sets. A useful habit is to name the underlying collection before applying a condition. For example, integer solutions and real solutions to an equation need not form the same set. We will make these choices explicit, then use the resulting membership statements as the starting point for proofs.`
  },
  {
    slide: 4, chapter: "Sets and membership",
    narration: `A set is a well-defined collection of objects. Well-defined means that membership has a precise criterion. The positive integers, rational numbers, and real numbers are familiar examples. The integer solutions of x squared equals four form the set containing negative two and two. Reciprocals of positive integers form another infinite set. Positive real numbers below ten form a continuous interval. Notice that the objects need not be listed one by one, but the description must determine exactly which objects are included.`
  },
  {
    slide: 5, chapter: "Sets and membership",
    narration: `Roster notation lists the elements between braces. For positive integers we write one, two, three, four, and so on. For reciprocals we list one, one half, one third, and so on. A condition is more suitable for positive real numbers less than ten: x is real, and zero is less than x, which is less than ten. Both endpoints are excluded. The underlying set and the condition work together. Changing real numbers to integers would produce a different, finite collection.`
  },
  {
    slide: 6, chapter: "Sets and membership",
    narration: `Set-builder notation reads: the set of x in U such that p of x holds. U supplies the permitted objects, and p supplies the membership test. For odd integers, the condition is that x equals two k plus one for some integer k. Equivalently, we may collect the expressions two k plus one as k ranges over all integers. Negative values of k matter: this is the set of all odd integers, including negative odd integers. The vertical bar means such that; it is not a divisibility sign in this position.`
  },
  {
    slide: 7, chapter: "Subsets and equality",
    narration: `A is a subset of B when every element of A is also an element of B. The diagram places A entirely inside B. In logical language, for every x in the underlying universe, membership in A implies membership in B. This does not say that every member of B belongs to A. Also distinguish the symbols: x belongs to A compares an object with a set, whereas A is a subset of B compares two sets. A subset is allowed to equal the containing set.`
  },
  {
    slide: 8, chapter: "Subsets and equality",
    narration: `Let A be the integers divisible by six and B the even integers. To prove A is a subset of B, take an arbitrary x in A. By divisibility, x equals six m for some integer m. Rewrite this as two times three m. Since three m is an integer, x is even, so x belongs to B. The arbitrary choice is essential: we did not merely check six or twelve. We showed that any member of A automatically satisfies the defining condition for B.`
  },
  {
    slide: 9, chapter: "Subsets and equality",
    narration: `Negating a subset claim changes a universal statement into an existential one. A is not a subset of B means there exists an element in A that is not in B. In the diagram, the marked x lies in the part of A outside B. One such witness is sufficient, but both parts must be checked. An object outside both sets would not refute the claim, and neither would an object that lies only in B. The direction of containment determines where the witness must lie.`
  },
  {
    slide: 10, chapter: "Subsets and equality",
    narration: `Here A contains integers whose square is divisible by four, while B contains integers themselves divisible by four. Choose x equal to two. Its square is four, so four divides its square and two belongs to A. But four does not divide two, so two does not belong to B. This completes the proof that A is not a subset of B. Squaring can introduce an extra factor, so divisibility of a square must not be transferred unchanged to its base.`
  },
  {
    slide: 11, chapter: "Subsets and equality",
    narration: `Set equality requires both inclusions. In this example, four divides x squared exactly when x is even. For the first direction, suppose four divides x squared. If x were odd, writing x as two k plus one would make its square four times k squared plus k, plus one, which cannot be divisible by four. Thus x is even. Conversely, if x equals two k, then its square equals four k squared, so four divides it. Each direction starts from one membership condition and reaches the other.`
  },
  {
    slide: 12, chapter: "Subsets and equality",
    narration: `Every set is a subset of itself, because each of its elements is certainly in that same set. A proper subset additionally requires inequality of the sets. To prove A is a proper subset of B, prove containment and then find an element of B outside A. Multiples of four are a proper subset of the integers whose squares are divisible by four. Every multiple of four has such a square, while two belongs to the larger set but is not a multiple of four. Ordinary subset notation alone does not assert this difference.`
  },
  {
    slide: 13, chapter: "Subsets and equality",
    narration: `The empty set has no elements, so its cardinality is zero. It is a subset of every set. To see why, write the subset condition as: if x belongs to the empty set, then x belongs to A. The hypothesis never holds, so the implication cannot fail. There is no counterexample in the empty set. Do not confuse the empty set with the set containing the number zero, or with the set containing the empty set. Each of those latter sets has one element.`
  },
  {
    slide: 14, chapter: "Set operations",
    narration: `Intersection selects elements in both sets, so it corresponds to logical and. Union selects elements in at least one set, so its or is inclusive. The complement of A selects elements of the chosen universe that are not in A. Set difference B minus A selects elements in B but outside A. The universe is essential for complements, and the order is essential for difference. As a quick example, with A containing one and two, and B containing two and three, their intersection contains only two, while their union contains one, two, and three.`
  },
  {
    slide: 15, chapter: "Set operations",
    narration: `Read the numbered Venn regions carefully. Region one is outside both circles. Region two is in A only. Region three is their overlap. Region four is in B only. Therefore the intersection is region three, and the union consists of regions two, three, and four. The complement of A contains regions one and four. A minus B is region two, while B minus A is region four. The intersection of both complements is region one. Finally, A intersect the complement of B is region two, matching A minus B.`
  },
  {
    slide: 16, chapter: "Set operations",
    narration: `We prove that A minus B equals A intersect the complement of B. If x belongs to A minus B, then x belongs to A and does not belong to B. The second condition says x belongs to the complement of B, so x belongs to the required intersection. For the reverse inclusion, start with x in that intersection. It lies in A and in the complement of B, hence in A but not B, which means x lies in A minus B. Both inclusions establish equality. A diagram suggests the identity; membership reasoning proves it.`
  },
  {
    slide: 17, chapter: "Set operations",
    narration: `The familiar laws of logic reappear as laws of sets. Repeating an intersection or union with the same set changes nothing. Commutative and associative laws allow reordering and regrouping. Each operation distributes over the other. Taking a complement twice returns the original set. De Morgan's laws say that the complement of an intersection is the union of the complements, and the complement of a union is their intersection. Translate an arbitrary element's membership into and, or, and not to see why these laws hold. Keep the brackets visible when using them.`
  },
  {
    slide: 18, chapter: "Set operations",
    narration: `Now prove that the union of A and B, minus C, equals the union of A minus C and B minus C. Replace difference by intersection with a complement. The left side becomes the union of A and B intersected with the complement of C. Distribute that intersection across the union. This gives A intersect the complement of C, union B intersect the complement of C. Convert each piece back to a difference. Every equality follows from a previously established identity, so the chain proves equality without checking particular sets.`
  },
  {
    slide: 19, chapter: "Cartesian products",
    narration: `A point in the plane is specified by an ordered pair of real numbers. The first coordinate tells us the horizontal position and the second the vertical position. The set of all such pairs is the Cartesian product of the real numbers with themselves. Order matters: swapping two unequal coordinates changes the point. The displayed inequality should be understood in that general sense; if both coordinates are equal, swapping them gives the same pair. Ordered pairs are different objects from unordered sets containing two elements.`
  },
  {
    slide: 20, chapter: "Cartesian products",
    narration: `A times B is the set of all ordered pairs whose first coordinate comes from A and second coordinate comes from B. When A contains one, two, and three, and B contains u and v, there are six pairs. Each of the three first coordinates can be combined with either second coordinate. A times A has nine pairs, including the three diagonal pairs with equal coordinates. For finite sets, the size of the Cartesian product is the product of their sizes. The notation A squared means A times A here, not squaring its individual elements.`
  },
  {
    slide: 21, chapter: "Cartesian products",
    narration: `Cartesian products are not commutative in general. With A containing one and B containing u, A times B contains the pair one, u, while B times A contains u, one. These pairs differ because their positions differ. Equality can still occur in special cases, such as A equal to B, so do not read the slide as saying equality is impossible. Intersection selects common elements from a shared universe. A product instead creates pairs, possibly from two different universes. This change in the kind of object matters in every product proof.`
  },
  {
    slide: 22, chapter: "Cartesian products",
    narration: `Take A to be the closed interval from one to three and B the closed interval from two to five. Their Cartesian product is a rectangle in the plane. Its horizontal coordinates range independently from one to three, while its vertical coordinates range from two to five. The boundary is included because both inequalities allow equality. For example, the pair one, five lies in the product. The pair two, six does not, because the second coordinate fails the condition for B. Check each coordinate against its own set.`
  },
  {
    slide: 23, chapter: "Cartesian products",
    narration: `Not every subset of the plane is a rectangle. The equation x squared plus y squared equals one selects the unit circle, including only its circumference. Replacing equality with less than or equal to selects the entire closed unit disk. The origin belongs to the disk because zero is at most one, but it does not belong to the circle because zero is not one. The circle is a proper subset of the disk. Here the coordinates are linked by a joint condition, unlike the independent interval choices in the rectangle example.`
  },
  {
    slide: 24, chapter: "Cartesian products",
    narration: `Cartesian products distribute over intersection, union, and difference when the other factor remains fixed. For example, A times the union of B and C equals the union of A times B and A times C. The same pattern holds with the fixed factor on the right, but its coordinate position must stay on the right. These identities follow from statements about the two coordinates. They do not let us swap factors. When checking an identity, unpack one ordered pair and preserve the logical grouping of its membership conditions.`
  },
  {
    slide: 25, chapter: "Cartesian products",
    narration: `For the forward inclusion, take a pair x, y in A times the union of B and C. Then x belongs to A, and y belongs to B or C. If y belongs to B, the pair lies in A times B; if y belongs to C, it lies in A times C. Either way it lies in the union of those products. Conversely, a pair in that union lies in at least one product. Its first coordinate is in A, and its second is in B or C, so it lies in the original product. This supplies the reverse direction left as an exercise.`
  },
  {
    slide: 26, chapter: "Functions and their domains",
    narration: `We now turn to section five point two, functions. Sets supply the possible inputs and outputs. A function adds a rule linking them. Our first task is to check that every permitted input receives exactly one output. Later, we ask two extra questions: can distinct inputs share an output, and does every member of the codomain get reached? These questions lead to injection and surjection.`
  },
  {
    slide: 27, chapter: "Functions and their domains",
    narration: `A function from A to B assigns every element of A exactly one element of B. The words every and exactly one are separate requirements. No input in A may be left without an output, and no input may have two competing outputs. A is the domain and B the codomain. Different inputs may share an output, and some codomain elements may never occur as outputs. A formula without its domain and codomain is therefore not a complete specification of the function we want to study.`
  },
  {
    slide: 28, chapter: "Functions and their domains",
    narration: `Sine gives one real output for every real input, so it defines a function from the real numbers to the real numbers. In particular, zero maps to zero and pi over two maps to one. The proposed reciprocal rule from all real numbers to real numbers fails at zero. There is no real value for one divided by zero. We can obtain a valid function by restricting the domain to nonzero real numbers. Checking the stated domain prevents an otherwise familiar formula from hiding an undefined input.`
  },
  {
    slide: 29, chapter: "Functions and their domains",
    narration: `Assigning both the positive and negative square root to a positive input fails the exactly-one-output condition. For the input two, the proposed outputs are positive square root of two and negative square root of two. Choosing only the nonnegative root gives a function. By contrast, squaring real inputs is already a valid function. Two and negative two both map to four, but each input still has exactly one output. Sharing outputs concerns injectivity; it does not invalidate the basic definition of a function.`
  },
  {
    slide: 30, chapter: "Images, preimages and range",
    narration: `Write f from A to B to specify a function's domain and codomain. If a is in A, f of a is its image. The input a is a preimage of that output. Every input has exactly one image, but an element of the codomain can have no preimages, one preimage, or several. To find images, evaluate the rule at an input. To find preimages of a chosen output, solve the equation f of x equals that output, keeping only solutions that belong to the stated domain.`
  },
  {
    slide: 31, chapter: "Images, preimages and range",
    narration: `For squaring on the real numbers, the image of two is four. Solving x squared equals four gives two preimages, two and negative two. Both must be included in the preimage set. For sine on the real numbers, solving sine x equals zero gives every integer multiple of pi. We write this set as k pi, where k is an integer. Zero, positive multiples, and negative multiples all belong. These examples show why a preimage set may contain several or infinitely many inputs even though the function gives only one output per input.`
  },
  {
    slide: 32, chapter: "Images, preimages and range",
    narration: `The floor of a real number is the greatest integer less than or equal to it. Thus the floor of two point seven four is two, the floor of negative one point nine is negative two, and the floor of three is three. For negative inputs, floor moves toward smaller numbers, not toward zero. Formally, if the floor of x is n, then n is at most x and x is strictly less than n plus one. A function need not be described by a single algebraic formula to have a precise rule.`
  },
  {
    slide: 33, chapter: "Images, preimages and range",
    narration: `The ceiling of a real number is the smallest integer greater than or equal to it. The ceiling of two point seven four is three, the ceiling of negative one point nine is negative one, and the ceiling of three is three. If the ceiling is n, then n minus one is strictly less than x and x is at most n. Floor and ceiling agree on integer inputs. On noninteger inputs they select the two adjacent integers that bracket the number. Neither operation is ordinary rounding to the nearest integer.`
  },
  {
    slide: 34, chapter: "Images, preimages and range",
    narration: `The range is the set of outputs that the function actually produces. In the arrow diagram, the codomain contains a, b, and c, but all arrows end at a or b. The range therefore contains only a and b. The range is always a subset of the codomain. Specifying a codomain tells us which outputs are allowed; determining the range tells us which are reached. Counting unused codomain elements can immediately show that a finite function is not onto.`
  },
  {
    slide: 35, chapter: "Images, preimages and range",
    narration: `For the real squaring function with real codomain, the range is all nonnegative real numbers. Squares cannot be negative, and every nonnegative y is reached by the real input square root of y. Both observations are needed for the exact range. Sine with real domain and codomain has range the closed interval from negative one to one. In each example, the codomain is larger than the range. A range claim should account both for impossible outputs and for why all the listed outputs really can occur.`
  },
  {
    slide: 36, chapter: "Injection",
    narration: `We classify functions using two independent properties. An injection, also called one-to-one, never sends distinct inputs to the same output. A surjection, also called onto, reaches every element of its codomain. A bijection has both properties. In terms of preimages, injection means at most one per codomain element; surjection means at least one; bijection means exactly one. Keep this separate from the original function requirement, which gives exactly one image to each domain element.`
  },
  {
    slide: 37, chapter: "Injection",
    narration: `The formal injection condition says that for all x and y in A, if x differs from y, then f of x differs from f of y. The diagram has distinct destinations for its three inputs, so there are no collisions. A codomain element can remain unused without violating injection. Thus injection concerns uniqueness of preimages, not coverage of the codomain. For an infinite domain we cannot inspect every arrow, so we use the quantified condition to build an algebraic proof.`
  },
  {
    slide: 38, chapter: "Injection",
    narration: `The contrapositive gives the usual injection proof: assume f of x equals f of y for arbitrary domain elements, and derive x equals y. This is equivalent to the definition. To disprove injection, negate the universal implication. Find two distinct domain elements with the same image. You must verify both that the inputs differ and that their outputs agree. Showing that one output has a preimage does not address injection, because the question is whether that output could have two different preimages.`
  },
  {
    slide: 39, chapter: "Injection",
    narration: `Consider f of x equals five x plus three from the real numbers to the real numbers. Take arbitrary real x and y, and suppose their images are equal. Then five x plus three equals five y plus three. Subtracting three yields five x equals five y, and dividing by the nonzero number five gives x equals y. Therefore the function is injective. The proof does not assume injectivity. It starts with equal outputs and shows that no distinct inputs could have produced them.`
  },
  {
    slide: 40, chapter: "Injection",
    narration: `For f of x equals x squared plus one on all real numbers, choose the inputs two and negative two. They are distinct, but both outputs equal five. This single collision disproves injection. Notice how the domain matters. If only positive real inputs were allowed, this particular pair would be unavailable, and the function would in fact be injective. Whenever you use a counterexample, check membership in the actual domain before treating the pair as decisive.`
  },
  {
    slide: 41, chapter: "Surjection and bijection",
    narration: `A function from A to B is surjective when every y in B has some preimage x in A. The order of quantifiers matters: first choose an arbitrary target y, then find an input that may depend on y. The diagram reaches all three codomain elements, even though two inputs share one of them. Such sharing is allowed in a surjection. The proof obligation is complete coverage of B, not uniqueness of the input used to reach each target.`
  },
  {
    slide: 42, chapter: "Surjection and bijection",
    narration: `Surjection is equivalent to saying the range equals the codomain. To prove it, show every codomain element is produced; the reverse containment already follows from being a function into that codomain. To disprove it, find one y in B that is unequal to f of x for every x in A. The witness is an unreachable output. This differs from disproving injection, where the witness consists of two inputs with equal outputs. Choosing the correct type of witness makes the proof much clearer.`
  },
  {
    slide: 43, chapter: "Surjection and bijection",
    narration: `Again take f of x equals five x plus three from real numbers to real numbers. Let y be an arbitrary real target. Solving y equals five x plus three suggests x equals y minus three, all divided by five. This candidate is real, so it belongs to the domain. Substituting it into f gives y exactly. We have constructed a valid preimage for every real target, so the function is onto. Solving for a candidate is the discovery step; verifying its domain and its image completes the proof.`
  },
  {
    slide: 44, chapter: "Surjection and bijection",
    narration: `For x squared plus one with real domain and real codomain, negative two is an unreachable target. If some real x mapped to negative two, then x squared plus one would equal negative two, giving x squared equal to negative three. A real square cannot be negative, so no such x exists. This proves the function is not onto the real numbers. Its actual range is all real numbers at least one. An unreachable witness must lie inside the specified codomain, as negative two does here.`
  },
  {
    slide: 45, chapter: "Surjection and bijection",
    narration: `A bijection is both injective and surjective. We proved both properties for five x plus three on the real numbers. The second example shows the role of the domain and codomain: x squared plus one maps positive real inputs bijectively onto real outputs greater than one. Equal outputs force equal positive inputs, proving injection. For any target y greater than one, the positive square root of y minus one is a valid preimage, proving surjection. As you review, turn each set or function definition into its quantified proof obligation, then choose either an arbitrary element argument or the correct counterexample.`
  }
];
