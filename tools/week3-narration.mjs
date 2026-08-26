export default [
  {
    slide: 1,
    chapter: "Proof foundations",
    narration: `Welcome to Week Three of CS104: Method of Proof, Part One. We are moving from analysing logical forms to constructing mathematical arguments. A proof is a sequence of justified statements that explains why a claim must be true. Today we will study direct proof, counterexamples, proof by contrapositive, and proof by contradiction. We will also use congruence and the irrationality of square root of two as substantial examples. As you listen, watch the first move of each method. Choosing the right opening assumption is often the decision that makes the rest of a proof possible.`
  },
  {
    slide: 2,
    chapter: "Proof foundations",
    narration: `Here is our route. Section three point one introduces the language surrounding proofs: definitions, propositions, axioms, direct arguments, and counterexamples. Section three point two changes the direction of an implication through the contrapositive and uses logical equivalences to reshape conclusions. Section three point three assumes the failed case and derives a contradiction. Along the way, keep asking four questions. What is the domain? Which definition turns the hypothesis into usable algebra? What exact form must the conclusion have? And, if we use contradiction, which two statements are finally incompatible?`
  },
  {
    slide: 3,
    chapter: "Proof foundations",
    narration: `We begin with direct proofs and counterexamples. A direct proof establishes a conditional by moving from its hypothesis to its conclusion. A counterexample has the opposite purpose: it disproves a universal claim by locating one permitted case where the claimed property fails. Both methods rely on precision. A direct proof must justify every bridge. A counterexample must belong to the stated domain and must really make the original statement false.`
  },
  {
    slide: 4,
    chapter: "Proof foundations",
    narration: `Several kinds of mathematical statements play different roles. A proposition is a true mathematical statement supported by a proof. A particularly important proposition may be called a theorem. A lemma is a result proved mainly to support another theorem. Definitions and axioms are different. A definition fixes the precise meaning of a term; an axiom is accepted as a basic starting truth within the system. We do not prove a definition. We unpack it. And we do not repeatedly re-prove an axiom, but we must still respect its conditions when we use it.`
  },
  {
    slide: 5,
    chapter: "Proof foundations",
    narration: `Proposition three point one point one says that if x is an even integer, then x squared is divisible by four. This is a universal conditional statement. To prove it, we need the definitions of even integers and divisibility, basic facts about integers, and algebraic manipulation. Notice how the conclusion determines the finish line. Saying four divides x squared means we must eventually express x squared as four times some integer. The hypothesis tells us where to start: express the even integer x as two times some integer.`
  },
  {
    slide: 6,
    chapter: "Proof foundations",
    narration: `A mathematical definition gives a precise meaning that represents one object, property, or concept. An integer a is even if and only if there exists an integer n such that a equals two n. It is odd if and only if there exists an integer n such that a equals two n plus one. The phrase “there exists an integer” is essential. It introduces a witness whose integrality must be preserved. These definitions turn parity from a descriptive word into an equation that can be expanded, factored, and matched to another definition.`
  },
  {
    slide: 7,
    chapter: "Proof foundations",
    narration: `For integers m and n, we say m divides n if and only if there exists an integer q such that n equals m q. Three divides twelve because twelve equals three times four. Seven divides twenty-one because twenty-one equals seven times three. If m does not divide n, we write a vertical bar with a slash. We call m a divisor or factor of n, and n a multiple of m. Again, the integer witness matters. To prove divisibility, exhibit the quotient as an integer rather than merely reporting a decimal calculation.`
  },
  {
    slide: 8,
    chapter: "Proof foundations",
    narration: `Do we have to prove everything? No. A proof must start somewhere. Some statements have already been proved, and some basic properties are accepted without proof as axioms. Axioms do not make mathematics arbitrary. They declare the starting rules of the system so that later conclusions can be checked. When writing an elementary proof, familiar algebraic laws may remain in the background, but you must not use them outside their valid conditions. In particular, multiplication by an inverse requires that the number is nonzero.`
  },
  {
    slide: 9,
    chapter: "Proof foundations",
    narration: `The real numbers satisfy familiar axioms. Identity laws say x plus zero equals x and x times one equals x. Inverse laws give an additive inverse for every real number and a multiplicative inverse for every nonzero real number. Commutative and associative laws allow reordering and regrouping. The distributive law connects multiplication with addition. Proofs often use these rules so naturally that they become invisible. Careful reasoning means recognising which rule licenses a step, especially when cancellation or division is involved.`
  },
  {
    slide: 10,
    chapter: "Proof foundations",
    narration: `The integers are closed under addition and multiplication. If x and y are integers, then x plus y and x times y are also integers. These closure facts are accepted here as basic properties of the number system. Closure is often the quiet reason that a newly constructed quantity is a valid integer witness. If k is an integer, then k squared is an integer; if k and l are integers, then k plus l is an integer. A proof should make this clear whenever the conclusion depends on the witness staying inside the integers.`
  },
  {
    slide: 11,
    chapter: "Proof foundations",
    narration: `A set S is closed under an operation when applying the operation to any members a and b of S always produces another member of S. The integers are not closed under division because one divided by two is not an integer. Even integers are closed under addition: two k plus two l equals two times k plus l. Odd integers are not closed under addition because the sum of two odd integers is even. Try the questions on the slide by translating the set property into algebra. Closure is a universal claim, so one permitted failure is enough to refute it.`
  },
  {
    slide: 12,
    chapter: "Direct proof and counterexample",
    narration: `A direct proof establishes a conditional p implies q. It is a valid argument that starts with the hypothesis p and ends with the conclusion q. Between them, we use definitions, known properties, algebra, and earlier results. For a universal proposition, take an arbitrary object from the stated domain so that the reasoning does not depend on a special example. Do not assume the conclusion at the beginning. Instead, let its definition tell you the target form that your algebra must eventually produce.`
  },
  {
    slide: 13,
    chapter: "Direct proof and counterexample",
    narration: `Proposition three point one point six says: if a is an odd number, then a plus one is even. Let a be an arbitrary odd integer. By definition, a equals two n plus one for some integer n. Adding one gives a plus one equals two n plus two, which factors as two times n plus one. Since n plus one is an integer, a plus one is twice an integer. This matches the definition of even, so the conclusion follows. The proof is short because the hypothesis immediately provides a useful algebraic representation.`
  },
  {
    slide: 14,
    chapter: "Direct proof and counterexample",
    narration: `Now return to proposition three point one point one. Let x be an even integer. By definition, x equals two n for some integer n. Squaring gives x squared equals four n squared. Because n is an integer, n squared is also an integer. We have therefore written x squared as four times an integer. By the definition of divisibility, four divides x squared. Notice that the same equation performs two jobs: it carries out the algebra and presents the exact witness required by the conclusion.`
  },
  {
    slide: 15,
    chapter: "Direct proof and counterexample",
    narration: `A universal statement claims there are no exceptions, so one counterexample is enough to disprove it. Consider: for all real a and b, if a squared equals b squared, then a equals b. Choose a equal to one and b equal to negative one. Both are real, and their squares are equal, so the hypothesis is true. But one is not negative one, so the conclusion is false. This is a genuine counterexample. An example where the hypothesis is false would not work, because a conditional is not defeated unless its hypothesis is true and its conclusion false.`
  },
  {
    slide: 16,
    chapter: "Contrapositive and equivalence",
    narration: `Section three point two introduces proof by contrapositive. This method is useful when the original hypothesis does not reveal a path to the conclusion, but negating the conclusion produces a helpful definition or algebraic form. Because an implication and its contrapositive are logically equivalent, proving the alternative direction establishes the original proposition without weakening it.`
  },
  {
    slide: 17,
    chapter: "Contrapositive and equivalence",
    narration: `Suppose we want to prove that if n squared is even, then n is even. A direct attempt starts with n squared equals two k. But that equation does not expose n as twice an integer. Taking a square root gives an expression whose integrality is unknown, so the intended witness does not appear. This does not show that the proposition is false. It tells us that the direct direction is unhelpful. We should change to an equivalent statement whose hypothesis gives us a usable representation of n.`
  },
  {
    slide: 18,
    chapter: "Contrapositive and equivalence",
    narration: `The contrapositive of “if p, then q” is “if not q, then not p.” We reverse the two parts and negate both, and the meaning is preserved. For the parity proposition, the original says: if n squared is even, then n is even. Its contrapositive says: if n is odd, then n squared is odd. This direction is promising because oddness immediately lets us write n as two k plus one. Do not confuse the contrapositive with the converse, which reverses without negating, or the inverse, which negates without reversing.`
  },
  {
    slide: 19,
    chapter: "Contrapositive and equivalence",
    narration: `We prove proposition three point two point one by contrapositive. Assume n is not even; because n is an integer, n must be odd. Write n equals two k plus one for some integer k. Expanding the square gives four k squared plus four k plus one, which is two times the integer two k squared plus two k, plus one. Therefore n squared is odd. We have proved not q implies not p, so the original proposition follows: whenever n squared is even, n is even.`
  },
  {
    slide: 20,
    chapter: "Contrapositive and equivalence",
    narration: `Proposition three point two point two says: if three does not divide the product m n, then three divides neither m nor n. Its contrapositive is easier: if three divides m or three divides n, then three divides m n. If three divides m, write m equals three k. Then m n equals three times k n, so three divides the product. If three divides n, the argument is symmetric. The logical form “p or q implies r” is equivalent to the conjunction of “p implies r” and “q implies r,” which justifies checking the two branches.`
  },
  {
    slide: 21,
    chapter: "Contrapositive and equivalence",
    narration: `Logical equivalence can also reshape a conclusion containing “or.” Proposition three point two point three says that if a b equals zero, then a equals zero or b equals zero. Let p mean a b equals zero, q mean a equals zero, and r mean b equals zero. The form p implies q or r is equivalent to p and not q implies r. In plain language: if the product is zero and a is not zero, then b must be zero. Assuming one alternative is unavailable gives us a focused conclusion to prove.`
  },
  {
    slide: 22,
    chapter: "Contrapositive and equivalence",
    narration: `Let a and b be real numbers with a b equal to zero and a not equal to zero. Since a is nonzero, its multiplicative inverse one over a exists. Multiply both sides by that inverse. Associativity lets us group one over a with a, the inverse law turns that product into one, and the identity law leaves b. The right side remains zero. Hence b equals zero. The assumption a not equal to zero is not incidental—it is exactly what makes the cancellation legitimate.`
  },
  {
    slide: 23,
    chapter: "Contradiction and congruence",
    narration: `Section three point three introduces proof by contradiction. Instead of aiming directly for the conclusion, we assume the situation that would make the proposition false and show that this situation cannot exist. A strong contradiction proof states the conflicting facts explicitly rather than ending with the vague phrase “this is impossible.”`
  },
  {
    slide: 24,
    chapter: "Contradiction and congruence",
    narration: `Integers a and b are congruent modulo a positive integer m when m divides a minus b. Equivalently, a equals b plus m k for some integer k. Twenty-four is congruent to ten modulo seven because their difference is fourteen. Negative two is congruent to eight modulo five because their difference is negative ten. The notation a is not congruent to b means the divisibility condition fails. Proposition three point three point two restates the definition in equation form, which is often the form needed inside a proof.`
  },
  {
    slide: 25,
    chapter: "Contradiction and congruence",
    narration: `Test the two statements carefully. The first is false: take a equal to two and b equal to three. Their product is six, so it is congruent to zero modulo six, but neither factor is congruent to zero modulo six. A composite modulus can be split across factors. The second statement is also false because the domain includes the positive integer n equal to one. Modulo one, every pair of integers is congruent, so one is congruent to zero. Boundary cases and composite structures are common sources of counterexamples.`
  },
  {
    slide: 26,
    chapter: "Contradiction and congruence",
    narration: `For a fixed modulus, congruence is reflexive, symmetric, and transitive. It is reflexive because a minus a is zero, which every positive modulus divides. It is symmetric because divisibility of a minus b also gives divisibility of its negative, b minus a. It is transitive because adding the divisible differences a minus b and b minus c gives a minus c. These properties make congruence behave like equality within a fixed modulus, but the modulus must remain the same throughout the argument.`
  },
  {
    slide: 27,
    chapter: "Contradiction and congruence",
    narration: `To prove a universal conditional p of x implies q of x by contradiction, assume there is an x for which p is true and q is false. This is the negation of the universal implication. Then use both assumptions, together with definitions and known facts, until an impossibility appears. The contradiction may be p and not p, an integer being both even and odd, or a violation of an established condition. Once the failed case is impossible, the original universal statement must be true.`
  },
  {
    slide: 28,
    chapter: "Contradiction and congruence",
    narration: `Proposition three point three point four says there is no integer n such that two n is congruent to one modulo four. Suppose, for contradiction, that such an n exists. By the definition of congruence, two n equals one plus four k for some integer k. The left side is even. The right side is odd because four k is even and adding one makes it odd. An integer cannot be both even and odd. That parity conflict is the contradiction, so no such n exists.`
  },
  {
    slide: 29,
    chapter: "Contradiction and congruence",
    narration: `Let x and y be positive real numbers with x not equal to y. We prove x over y plus y over x is greater than two. Assume instead that the sum is at most two. Since x y is positive, multiplying by it preserves the inequality and gives x squared plus y squared at most two x y. Rearranging gives open parenthesis x minus y close parenthesis squared at most zero. A real square is nonnegative, so it must equal zero. Then x equals y, contradicting the hypothesis. Positivity justified both the fractions and the inequality step.`
  },
  {
    slide: 30,
    chapter: "Irrationality",
    narration: `We now prepare the classic proof that square root of two is irrational. An irrational number is a real number that is not rational. A rational number can be written as a quotient m over n of integers, with n positive. Equivalent fractions may represent the same rational value, so we will need a disciplined choice of representation. The contradiction will not be that a quotient exists; it will be that a quotient chosen in lowest terms is forced to have a common factor.`
  },
  {
    slide: 31,
    chapter: "Irrationality",
    narration: `An integer d is a common factor, or common divisor, of integers a and b when d divides both. Three is a common factor of nine and eighteen. Their common factors include plus or minus one, three, and nine. By contrast, eight and fifteen have no positive common factor greater than one. Common factors let us describe when a fraction can be reduced, and that idea becomes the invariant at the heart of the square-root proof.`
  },
  {
    slide: 32,
    chapter: "Irrationality",
    narration: `Every rational number has more than one quotient representation. Two thirds, four sixths, and six ninths all represent the same value. We say m over n is in lowest terms when m and n have no common factor greater than one. Choosing lowest terms is always possible for a rational number. This condition gives us something definite that later algebra cannot violate. If the algebra forces both m and n to be even, it will contradict the way the fraction was chosen.`
  },
  {
    slide: 33,
    chapter: "Irrationality",
    narration: `What is square root of two? It is the positive real number r such that r squared equals two. Saying that square root of two is irrational is therefore equivalent to the conditional statement: if r is a positive real number with r squared equal to two, then r is irrational. Writing the claim in this form separates the existence and defining equation of r from the property we must prove. We will keep r squared equals two and temporarily deny irrationality.`
  },
  {
    slide: 34,
    chapter: "Irrationality",
    narration: `Proposition three point three point eight states the claim formally. Let p of r mean r squared equals two, and let q of r mean r is irrational. To prove the implication by contradiction, assume there exists a positive real r for which p is true and q is false. In plain language, assume r squared equals two and r is rational. The rationality assumption lets us write r as an integer quotient in lowest terms, while the square equation will constrain that quotient.`
  },
  {
    slide: 35,
    chapter: "Irrationality",
    narration: `Write r as m over n in lowest terms, so m and n have no common factor greater than one. From r squared equals two, we get m squared equals two n squared. Thus m squared is even, and proposition three point two point one tells us m is even. Write m equals two k. Substitution gives four k squared equals two n squared, hence n squared equals two k squared. So n squared is even, and the same proposition tells us n is even. Therefore two divides both m and n. This contradicts the assumption that m over n was in lowest terms.`
  },
  {
    slide: 36,
    chapter: "Irrationality",
    narration: `The proof structure is worth reading carefully. We assumed both r squared equals two and a lowest-terms rational representation r equals m over n. The algebra forced the conclusion that m and n have common factor two. The contradiction concerns the lowest-terms condition. We are not claiming that a quotient with a common factor is irrational—four sixths is rational but reducible. Because every rational number has a lowest-terms representation, no alternative fraction can rescue the rationality assumption. Therefore square root of two is irrational.`
  },
  {
    slide: 37,
    chapter: "Irrationality",
    narration: `Contrapositive and contradiction are related but give us different working targets. For a contrapositive proof, assume not q and try to prove not p. For a contradiction proof of p implies q, assume both p and not q, then derive an impossibility. A contrapositive proof can be viewed as a contradiction proof if p is also present: deriving not p creates p and not p. In practice, choose the method whose assumptions reveal the most useful definitions and algebra, and state clearly which form you are proving.`
  },
  {
    slide: 38,
    chapter: "Irrationality",
    narration: `Finish with proposition three point three point nine: the sum of any rational number and any irrational number is irrational. Let r be rational and s be irrational. Suppose, for contradiction, that r plus s is rational. Rational numbers are closed under subtraction, so subtracting the rational number r from the rational number r plus s produces another rational number. But that difference is s. We have derived that s is rational, contradicting the hypothesis that s is irrational. Therefore r plus s is irrational. Try to write this proof yourself before checking the reasoning.`
  },
  {
    slide: 2,
    chapter: "Summary and next steps",
    narration: `Let us bring the methods together. Use direct proof when the hypothesis already gives a useful representation. Use a counterexample to disprove a universal claim by making its hypothesis true and conclusion false. Use contraposition when negating the conclusion exposes a definition you can manipulate. Use contradiction when the original hypothesis and the negated conclusion create constraints that cannot coexist. Throughout, define the domain, preserve integer witnesses, justify inverses and inequality operations, and name the exact contradiction. Complete the Week Three mastery check now, then explain aloud why each worked proposition used its chosen method.`
  }
];
