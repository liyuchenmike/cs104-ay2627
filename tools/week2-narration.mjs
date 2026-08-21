export default [
  {
    slide: 1,
    chapter: "From statements to predicates",
    narration: `Welcome back to CS104. In Part One, we treated complete statements as single units: p, q, and r. Now we open those statements and examine their internal structure. That shift lets us reason about objects, properties, and quantities. We will begin with predicates and single quantifiers, learn how to negate quantified claims precisely, compare statements containing two quantifiers, and finish with quantified arguments. Listen especially for the domain and the order of the quantifiers. Those two details often decide whether a mathematical sentence is true, false, or even meaningful.`
  },
  {
    slide: 2,
    chapter: "From statements to predicates",
    narration: `Here is our route. First, we turn expressions with variables into statements by attaching universal or existential quantifiers. Next, we study universal conditional statements, their negations, and the familiar contrapositive, converse, and inverse. Then we move to two variables, where quantifier order becomes crucial. Finally, we use rules of inference and diagrams to test quantified arguments. The ideas build in sequence: a quantified argument is only as clear as the quantified statements inside it. Keep asking three questions: what is the domain, which variables are bound, and what evidence would establish or refute the claim?`
  },
  {
    slide: 3,
    chapter: "From statements to predicates",
    narration: `Section two point one introduces predicates and quantified statements. A predicate is not yet a complete assertion because it contains one or more variables. A quantifier tells us how broadly the predicate must hold. Universal claims say the predicate holds for every allowed value. Existential claims say at least one allowed value works. This distinction is the foundation for definitions, specifications, and proofs. When a theorem begins with “for every integer” or a program requirement says “there exists an input,” it is using exactly this language.`
  },
  {
    slide: 4,
    chapter: "From statements to predicates",
    narration: `A predicate is a sentence containing variables. Before substitution, it is an open sentence rather than a true-or-false statement. Consider two x plus five y equals seven. If x is one and y is one, the equation becomes seven equals seven, which is true. If x is two and y is four, it becomes twenty-four equals seven, which is false. The predicate itself did not change; the substituted values did. This is why we write a predicate as a function-like expression such as p of x and y. It records a rule that produces a truth value once suitable values are supplied.`
  },
  {
    slide: 5,
    chapter: "From statements to predicates",
    narration: `We name predicates with letters and display their variables explicitly. Let p of n mean “n is an odd number.” Then p of two is a complete statement, and it is false. P of three is also a complete statement, and it is true. Showing the variable prevents us from confusing the rule with one particular instance. It also prepares us to quantify. We may ask whether p of n is true for every integer n, or whether it is true for at least one integer n. Always write down the domain as well: oddness makes sense over integers, while a different predicate may require real numbers, people, or objects on a board.`
  },
  {
    slide: 6,
    chapter: "One quantifier at a time",
    narration: `A quantifier states how many values must make a predicate true. “There are integers x and y such that two x plus five y equals seven” is existential: it asks us to find a successful pair. “For all integers x and y” is universal: it makes a much stronger claim about every pair. Attaching a quantifier binds the variables and turns the open predicate into a statement with a truth value. Notice that the same equation can appear in both sentences, but the quantifier changes the burden of proof completely. For an existential claim, one witness is enough. For a universal claim, every allowed case must work.`
  },
  {
    slide: 7,
    chapter: "One quantifier at a time",
    narration: `The universal quantifier is written as an upside-down A and read “for all.” Consider: for every real number x, x squared is greater than zero. To make that universal statement true, every real substitution must satisfy the inequality. But x equals zero gives zero squared greater than zero, which is false. One counterexample therefore refutes the entire universal claim. This example also shows why the domain matters. The variable is quantified over the real numbers, not over some convenient subset. Universal statements demand complete coverage, and a single permitted exception is decisive.`
  },
  {
    slide: 8,
    chapter: "One quantifier at a time",
    narration: `Universal quantifiers are often hidden in ordinary mathematical language. “The square of every real number is greater than zero” displays the quantifier. “The square of a real number is greater than zero” often intends the same universal reading, even though the word every is absent. Conditional phrasing can hide it too: “If x is real, then x squared is greater than zero” normally means this for every x in the surrounding universe. When translating, make the hidden quantifier explicit. Doing so exposes the counterexample x equals zero and prevents a vague sentence from slipping past careful analysis.`
  },
  {
    slide: 9,
    chapter: "One quantifier at a time",
    narration: `The existential quantifier is written as a backwards E and read “there exists.” The sentence here claims that there is an integer x whose square equals two. To establish an existential statement, we must produce at least one witness in the stated domain. No integer works: one squared is one, two squared is four, and negative integers give the same nonnegative squares. So this existential statement is false over the integers. If the domain were real numbers, it would be true because square root of two and negative square root of two are witnesses. The predicate stayed the same; the domain changed the truth value.`
  },
  {
    slide: 10,
    chapter: "One quantifier at a time",
    narration: `Existential language also appears in many disguises: “for some integer,” “at least one integer,” “we can find an integer,” or “the equation has an integer solution.” Each phrase asks for a witness. Be careful with the phrase “an integer.” In mathematics, it often means at least one, not exactly one. Also remember that proposing a candidate is not enough; the candidate must belong to the domain and satisfy the predicate. A real number such as square root of two cannot witness a claim quantified over integers. A good solution states the candidate, verifies domain membership, and substitutes it into the predicate.`
  },
  {
    slide: 11,
    chapter: "One quantifier at a time",
    narration: `Predicates can be connected by implication or biconditional inside a universal statement. “For every real x, if x is greater than two, then x squared is greater than four” has form: for all x, p of x implies q of x. The universal quantifier says the conditional must hold for every real x. Likewise, “for every real x, x equals zero if and only if two x equals zero” compares two predicates in both directions. In context, authors sometimes omit the quantifier and write only p of x implies q of x. Unless the domain is already clear, expand the sentence before reasoning so you know what every x is allowed to be.`
  },
  {
    slide: 12,
    chapter: "One quantifier at a time",
    narration: `This summary separates the two proof patterns. To show that there exists an x with p of x, find one eligible x and verify p. To show that for every x, p of x, take an arbitrary x from the domain and justify p without relying on special features. Refutation reverses those ideas. A universal statement is false when we find one counterexample. An existential statement is false only when we rule out every possible witness. These are not merely truth-table facts; they tell us what a proof must do. Witnesses support existence. Counterexamples defeat universality.`
  },
  {
    slide: 13,
    chapter: "One quantifier at a time",
    narration: `Let us apply the notation to a small world. The domain is the collection of objects on the board. Predicates describe shapes and colours, such as Triangle of x and Blue of x. A two-place predicate such as RightOf of x comma y describes a relationship between two objects. This finite model makes quantifiers concrete: “for every object” means inspect each named object, while “there exists an object” means locate at least one matching item. Before answering, read the board carefully and keep the domain fixed. Nothing outside the grid may be used as a witness or counterexample.`
  },
  {
    slide: 14,
    chapter: "One quantifier at a time",
    narration: `Now test the statements. A universal such as “for every t, if t is a triangle then t is blue” requires every triangle to be blue; one non-blue triangle refutes it. A biconditional requires both directions, so every blue object must also be a triangle. For an existential relation, identify a specific object and check both properties. For example, “there exists a square y with d to the right of y” needs one square positioned left of d. Work sentence by sentence. For universal claims, search strategically for counterexamples. For existential claims, search strategically for witnesses.`
  },
  {
    slide: 15,
    chapter: "Negating quantified claims",
    narration: `Negating a universal statement changes it into an existential statement with the predicate negated. “Not every real x has x squared greater than zero” means “there exists a real x whose square is not greater than zero.” The witness x equals zero proves the negation. In everyday language, the negation of “No politicians are honest” is not “All politicians are honest.” It is the weaker claim “Some politician is honest.” A negation needs only the situation that makes the original sentence false. Avoid swinging from one extreme universal claim to another.`
  },
  {
    slide: 16,
    chapter: "Negating quantified claims",
    narration: `Negating an existential statement changes it into a universal statement with the predicate negated. “There does not exist an integer x with x squared equal to two” becomes “for every integer x, x squared is not equal to two.” Similarly, the negation of “Some computer hackers are over forty” is “Every computer hacker is forty or under.” Saying merely “some hackers are forty or under” would not rule out the original witness. The reliable rule is: move the negation through the quantifier, switch exists with for all, and negate the predicate.`
  },
  {
    slide: 17,
    chapter: "Negating quantified claims",
    narration: `A universally quantified conditional deserves special care. Start with “for every person p, if p is blond then p has blue eyes.” To make this false, we need a particular person for whom the implication fails. An implication fails when its hypothesis is true and its conclusion false. So the negation is: there exists a blond person who does not have blue eyes. The same pattern applies to software: the negation of “every program over one hundred thousand lines contains a bug” is “there exists a program over one hundred thousand lines that contains no bug.” Switch the quantifier, then negate the conditional as p and not q.`
  },
  {
    slide: 18,
    chapter: "Negating quantified claims",
    narration: `Universal conditionals have the same three relatives as ordinary conditionals. The contrapositive reverses and negates the two predicates, and it is equivalent to the original. The converse reverses them without negating, and the inverse negates them without reversing. The converse and inverse are equivalent to each other but not generally to the original. The universal quantifier does not repair an invalid reversal. If every square is a rectangle, it follows that every non-rectangle is a non-square. It does not follow that every rectangle is a square, nor that every non-square is a non-rectangle.`
  },
  {
    slide: 19,
    chapter: "Negating quantified claims",
    narration: `Try the displayed example: for every real x, if x is greater than two, then x squared is greater than four. The contrapositive says: for every real x, if x squared is not greater than four, then x is not greater than two. The converse says: if x squared is greater than four, then x is greater than two; negative values such as minus three show that this is false. The inverse says: if x is not greater than two, then x squared is not greater than four; minus three refutes that as well. A good counterexample must satisfy the new hypothesis and falsify the new conclusion.`
  },
  {
    slide: 20,
    chapter: "Negating quantified claims",
    narration: `Necessary and sufficient conditions are simply ways of describing the direction of a quantified implication. If p of x implies s of x for every x, then p is sufficient for s: meeting p guarantees s. The same sentence says s is necessary for p: p cannot occur without s. The phrase “p only if s” also means p implies s. Keep the arrow anchored to the guarantee rather than the word order. A useful paraphrase is: whenever p holds, s must hold. That tells you immediately which predicate belongs in the hypothesis and which belongs in the conclusion.`
  },
  {
    slide: 21,
    chapter: "Negating quantified claims",
    narration: `Rewrite the statement about presidential age without the words necessary or sufficient. “Being at least thirty-five years old is necessary for being President of the United States” means: for every person x, if x is President of the United States, then x is at least thirty-five years old. The presidency predicate is the hypothesis; the age predicate is the required conclusion. The reverse statement would claim that every person aged thirty-five or older is president, which is obviously not intended. This simple plausibility check is useful after translating only-if and necessary-condition language.`
  },
  {
    slide: 22,
    chapter: "Multiple quantifiers",
    narration: `We now enter section two point two: statements with multiple quantifiers. With two variables, we must bind both variables to obtain a complete statement. The types of the quantifiers matter, but so does their order. Two universal quantifiers may be exchanged, and two existential quantifiers may be exchanged, without changing meaning. Mixed quantifiers are different. “For every y there exists an x” allows x to depend on y. “There exists an x for every y” demands one fixed x that works for all y. That dependency is the central idea of this section.`
  },
  {
    slide: 23,
    chapter: "Multiple quantifiers",
    narration: `Let p of x comma y mean x plus y equals zero over the real numbers. Four quantifier patterns are possible. “For all x and all y” is false because most pairs do not sum to zero. “For every y there exists an x” is true: choose x equal to negative y. “There exists an x such that for every y” is false: one fixed x cannot cancel every real y. “There exist x and y” is true; for example, zero and zero. The equation did not change. The quantifier structure changed what counts as success.`
  },
  {
    slide: 24,
    chapter: "Multiple quantifiers",
    narration: `A double universal statement claims p of x comma y for every pair in the two domains. To prove it, take arbitrary x and arbitrary y and reason generally. To refute it, one bad pair is enough. For example, x plus y equals zero is not true for all real x and y because x equals one and y equals one gives two. By contrast, the algebraic identity x squared minus y squared equals open parenthesis x plus y close parenthesis times open parenthesis x minus y close parenthesis is true for all real x and y. An identity survives every substitution.`
  },
  {
    slide: 25,
    chapter: "Multiple quantifiers",
    narration: `A double existential statement asks for at least one successful pair. To prove it, present both witnesses and verify the relation. For x plus y equals zero, x equals one and y equals minus one work. For the claim that there exist integers x and y with x less than y and x greater than y, no pair can work because the two inequalities contradict each other. To refute a double existential, we must show the relation is impossible for every pair. That is a much stronger task than failing to find an example quickly.`
  },
  {
    slide: 26,
    chapter: "Multiple quantifiers",
    narration: `In the first mixed pattern, for every y there exists an x such that p of x comma y. We may choose a different x for each y. For x plus y equals zero, choose x equal to negative y. For y equals x squared over the real numbers, the claim “for every real y there exists a real x with y equals x squared” is false because negative y values have no real square root. To refute this pattern, select one y for which no x can work. The outer universal tells us which value to challenge; the inner existential tells us that every possible response must fail.`
  },
  {
    slide: 27,
    chapter: "Multiple quantifiers",
    narration: `The other mixed pattern begins with existence: there exists an x such that for every y, p of x comma y. We must choose one fixed x before y varies. For x plus y equals zero over the reals, no fixed x works for every y. For x times y equals zero, x equals zero is a successful universal witness because zero times every real y is zero. To prove the statement, name the fixed x and then verify arbitrary y. Do not quietly choose a new x after seeing y; that would prove the previous quantifier order instead.`
  },
  {
    slide: 28,
    chapter: "Multiple quantifiers",
    narration: `The everyday example makes the distinction vivid. “For every boy, there is a girl who loves that boy” permits a different girl for each boy. “There is a girl who loves every boy” requires one particular girl connected to all boys. The second statement implies the first, because the same girl can serve as the witness for each boy. The first does not imply the second. This is a dependency question: may the existential witness depend on the universally chosen value? Read quantifiers left to right and imagine a game in which values are selected in that order.`
  },
  {
    slide: 29,
    chapter: "Multiple quantifiers",
    narration: `This first summary covers matching quantifiers. To show a double universal is true, check arbitrary x and arbitrary y. To show it false, find one counterexample pair. To show a double existential is true, find one witness pair. To show it false, rule out every pair. The proof and refutation patterns are dual. Universal claims are hard to prove but easy to refute; existential claims are easy to prove once a witness is found but harder to refute. Let the quantifier tell you what evidence to seek before you begin manipulating formulas.`
  },
  {
    slide: 30,
    chapter: "Multiple quantifiers",
    narration: `Now summarize the mixed cases. To prove “for every y there exists an x,” start with arbitrary y and construct a possibly y-dependent x. To refute it, find one y for which every x fails. To prove “there exists an x for every y,” present one fixed x and show it works for arbitrary y. To refute it, show that every proposed x has at least one defeating y. Notice the alternating response pattern. Negation will formalize exactly these proof games by switching each quantifier in place.`
  },
  {
    slide: 31,
    chapter: "Multiple quantifiers",
    narration: `To negate multiple quantifiers, move the negation inward one quantifier at a time. Each universal becomes existential, each existential becomes universal, and the order stays the same. The negation of “for every y there exists an x with p” is “there exists a y such that for every x, not p.” That says one y defeats all possible x choices. The negation of “there exists an x for every y with p” is “for every x there exists a y with not p.” That says every proposed fixed x can be defeated by some y. These forms match the refutation strategies we just described.`
  },
  {
    slide: 32,
    chapter: "Multiple quantifiers",
    narration: `Negate the displayed integer statement carefully. The original says: for every integers x and y, if x plus y equals zero, then there exists an integer z such that z squared equals x squared minus y squared. Negation begins by changing the outer universal pair into an existential pair. Then negate the conditional: keep x plus y equals zero true, and negate the conclusion. Negating the inner existence gives “for every integer z, z squared is not equal to x squared minus y squared.” The complete negation therefore asserts a particular pair x and y satisfying the hypothesis for which no integer z satisfies the equation.`
  },
  {
    slide: 33,
    chapter: "Quantified arguments",
    narration: `Section two point three turns quantified statements into arguments. We extend familiar propositional rules by instantiating universal claims at particular objects and, when justified, generalizing from arbitrary objects. We will also use set-style diagrams to search for countermodels. The definition of validity has not changed: an argument is invalid if there is a possible situation in which every premise is true and the conclusion is false. Diagrams are useful because they let us construct or rule out such situations without listing a large truth table.`
  },
  {
    slide: 34,
    chapter: "Quantified arguments",
    narration: `Universal direct implication combines a universal conditional with a fact about one object. From “for every x, if p of x then q of x” and p of a, we may conclude q of a. The ordinary direct-implication pattern appears after we instantiate x with a. For example, all even integers have even squares. If a is an even integer, then a squared is even. The universal premise licenses the substitution, and the second premise activates the conditional. Check both: the object must be in the quantified domain, and it must satisfy the hypothesis.`
  },
  {
    slide: 35,
    chapter: "Quantified arguments",
    narration: `Universal contrapositive implication works similarly. From “for every x, p of x implies q of x” and not q of a, conclude not p of a. If every human being is mortal and Zeus is not mortal, then Zeus is not human. The argument form is valid even if its subject is fictional. What matters is that the same particular object a appears in the second premise and conclusion. This rule is not the inverse error. We deny the conclusion q and infer denial of the hypothesis p; we do not deny p and infer denial of q.`
  },
  {
    slide: 36,
    chapter: "Quantified arguments",
    narration: `Universal transitivity chains two quantified conditionals over a common domain. If every p-object is a q-object, and every q-object is an r-object, then every p-object is an r-object. For an arbitrary x, p of x gives q of x by the first premise, and q of x gives r of x by the second. Because x was arbitrary, the conclusion holds universally. Watch for mismatched domains or variables. A chain is only legitimate when the intermediate predicate refers to the same object under compatible quantification.`
  },
  {
    slide: 37,
    chapter: "Quantified arguments",
    narration: `A diagram can represent a universal categorical statement. “All integers are rational numbers” means the set of integers lies entirely inside the set of rational numbers. Any point inside the integer circle is automatically inside the rational circle. This spatial containment mirrors universal implication: integer of n implies rational of n. Diagrams do not replace definitions, but they make valid moves visible and help us search for counterexamples. When testing an argument, draw only what the premises force. Do not add relationships merely because they seem plausible.`
  },
  {
    slide: 38,
    chapter: "Quantified arguments",
    narration: `Consider the argument: all human beings are mortal; Felix is mortal; therefore Felix is a human being. The first premise places the human set inside the mortal set. The second places Felix somewhere in the mortal set. But it does not force Felix into the human subset. To test validity, we try to satisfy the premises while falsifying the conclusion. Place Felix in the mortal region but outside the human region. If that arrangement is allowed, we have a countermodel and the argument is invalid. This is the quantified form of affirming the conclusion, also called the converse error.`
  },
  {
    slide: 39,
    chapter: "Quantified arguments",
    narration: `The completed diagram shows the countermodel. The human circle remains inside the mortal circle, so the universal premise is true. Felix is inside the mortal circle, so the particular premise is true. Felix is outside the human circle, making the conclusion false. True premises with a false conclusion are possible; therefore the argument is invalid. Notice that we are not claiming Felix really is not human. We are showing that the premises alone do not guarantee that he is human. Validity is about what must follow, not what happens to be true in the intended world.`
  },
  {
    slide: 40,
    chapter: "Quantified arguments",
    narration: `Now consider: no polynomial functions have horizontal asymptotes; this function has a horizontal asymptote; therefore this function is not polynomial. The two categories are disjoint. The particular function lies in the horizontal-asymptote set, so it cannot lie in the polynomial set. No diagram can make both premises true and the conclusion false. This is a valid contrapositive pattern. Translating the first premise helps: if a function is polynomial, then it does not have a horizontal asymptote. The second premise denies that conclusion, so we deny the polynomial hypothesis.`
  },
  {
    slide: 41,
    chapter: "Quantified arguments",
    narration: `The converse error has form: every p is q; a is q; therefore a is p. The SMU example says all SMU students are smart, Sam is smart, therefore Sam is an SMU student. The premises permit many smart people who are not SMU students, so the conclusion does not follow. In a diagram, the SMU set is inside the smart set, and Sam can sit in the smart region outside SMU. Whenever you see the conclusion reverse the original implication, pause and ask whether membership in the larger category really forces membership in the smaller one.`
  },
  {
    slide: 42,
    chapter: "Quantified arguments",
    narration: `The inverse error has form: every p is q; a is not p; therefore a is not q. From all SMU students being smart and Sam not being an SMU student, it does not follow that Sam is not smart. Sam may belong to the smart set for another reason. The valid contrapositive would begin with Sam not being smart and conclude Sam is not an SMU student. Keep the two errors distinct: the converse affirms q to infer p, while the inverse denies p to infer not q. Neither move is guaranteed by p implies q.`
  },
  {
    slide: 2,
    chapter: "Summary and next steps",
    narration: `Let us bring the pieces together. Predicates become statements when variables are assigned or quantified. Universal claims demand every case and fall to one counterexample; existential claims need one witness and fail only when every candidate is ruled out. Negation switches each quantifier and negates the final predicate. With mixed quantifiers, order controls whether a witness may depend on an earlier choice. Quantified inference instantiates universal rules at particular objects, while diagrams expose possible countermodels and familiar converse or inverse errors. Complete the Week Two mastery check now. When an answer surprises you, identify the domain, read the quantifiers from left to right, and state exactly what would count as a witness or counterexample.`
  }
];
