export default [
  {
    slide: 1, chapter: "Relations and representations",
    narration: `Welcome to Week Six of CS104: Relations. Last week, Cartesian products gave us ordered pairs, and functions assigned exactly one output to each input. A relation is more general: it records whichever pairs satisfy a chosen condition. We will describe relations, test their properties, and study equivalence relations that group objects into classes. We finish by using congruence classes to justify modular arithmetic and the familiar divisibility test based on the sum of a number's digits.`
  },
  {
    slide: 2, chapter: "Relations and representations",
    narration: `Our route has three sections. First, we represent relations with statements, ordered pairs, and arrow diagrams, and identify their domains and ranges. Second, we test reflexivity, symmetry, and transitivity, using proofs and counterexamples. A relation with all three properties is an equivalence relation. Third, we show how equivalence classes partition a set. Congruence modulo a positive integer supplies a central example, where infinitely many integers can be handled through finitely many remainder classes.`
  },
  {
    slide: 3, chapter: "Relations and representations",
    narration: `We begin with the definition of a relation. Think of two sets of possible objects and a condition that connects certain ordered pairs. Unlike a function, a relation may leave some objects unconnected or connect one object to several others. Our job is to specify exactly which pairs occur, without accidentally imposing the extra requirements that belong to functions.`
  },
  {
    slide: 4, chapter: "Relations and representations",
    narration: `The first example relates zero, one, and two to numbers from zero through four by divisibility. Under our definition, a divides b when b equals a times an integer. Thus zero divides zero, because zero equals zero times an integer, but zero divides no nonzero integer. One divides every integer, and two divides zero, two, and four in the target set. Divisibility here does not require dividing by zero. The second example records father and son pairs: Tom is paired with Alan and Bob, Dick with Carl, and Harry has no listed connection.`
  },
  {
    slide: 5, chapter: "Relations and representations",
    narration: `If R is a relation from A to B, we write a R b to mean that a is related to b. This is another way to write that the ordered pair a, b belongs to R. The order carries meaning: Tom is the father of Alan does not assert that Alan is the father of Tom. Familiar relations often have familiar symbols. For divisibility we use the vertical bar instead of R, so two divides four is a relation statement about the ordered pair two, four.`
  },
  {
    slide: 6, chapter: "Relations and representations",
    narration: `An arrow diagram draws one arrow for every related pair. For the divisibility example, zero has an arrow only to zero. One has arrows to all five target values. Two has arrows to zero, two, and four. That gives nine arrows in total. Multiple arrows may leave one source, and several sources may point to the same target. Neither feature is a problem for a relation. To check that the diagram is complete, test each candidate pair against the condition rather than guessing arrows from the picture.`
  },
  {
    slide: 7, chapter: "Relations and representations",
    narration: `Formally, a relation from A to B is any subset of the Cartesian product A times B. Each pair must have its first coordinate in A and second in B. The displayed relation contains a, zero; b, two; c, four; and a, two. Repeating the first coordinate a is allowed. If both coordinates are chosen from the same set, we call it a relation on that set. The example T is a relation on B because all its coordinates belong to B, even though some elements of B never appear.`
  },
  {
    slide: 8, chapter: "Relations and representations",
    narration: `Many mathematical statements define relations. Less than and equality give subsets of the real plane by selecting pairs satisfying x less than y or x equals y. Divisibility selects integer pairs m, n for which m divides n. Congruence modulo a fixed positive integer selects integer pairs whose difference is divisible by that modulus. Each description combines an underlying Cartesian product with a predicate. Keep the domains and any fixed parameter visible; changing them can change the properties of the relation.`
  },
  {
    slide: 9, chapter: "Domain and range",
    narration: `The domain of a relation contains the first coordinates that actually occur, and the range contains the second coordinates that actually occur. In the example R contains one, a; one, b; and three, a. Its domain is one and three, and its range is a and b. The ambient source set also contains two, but two has no outgoing arrow and is absent from the relation's domain. Similarly c is absent from the range. Membership in either projection requires at least one partner in the other set.`
  },
  {
    slide: 10, chapter: "Domain and range",
    narration: `Consider the relation defined by four x squared plus y squared equals sixteen. Its graph is an ellipse. For a real y to exist, sixteen minus four x squared must be nonnegative, so x lies between negative two and two. Every such x has a real y, for example the nonnegative square root of sixteen minus four x squared. Therefore the domain is the full closed interval from negative two to two. Similarly the range is negative four through four, including the endpoints. A relation's domain and range are projections of its graph onto the coordinate axes.`
  },
  {
    slide: 11, chapter: "Testing relation properties",
    narration: `Section six point two studies properties of a relation on one set A. We ask whether every element relates to itself, whether every connection can be reversed, and whether two successive connections require a direct one. These are universal conditions. A proof must address arbitrary elements, while a disproof needs one carefully chosen violation. The underlying set matters especially for reflexivity, because every member must be checked, including isolated elements.`
  },
  {
    slide: 12, chapter: "Testing relation properties",
    narration: `Reflexive means x is related to itself for every x in A. In an arrow diagram, every vertex needs a loop. Symmetric means that whenever x is related to y, y is related to x. Every arrow therefore needs its reverse. Transitive means that whenever x is related to y and y to z, x is related to z. Every two-step path needs the corresponding direct connection. The quantified variables need not be distinct. In particular, a path from x to y and back to x requires the loop from x to itself if the relation is transitive.`
  },
  {
    slide: 13, chapter: "Testing relation properties",
    narration: `Divisibility on the integers is reflexive because a equals a times one, so every a divides itself. It is not symmetric: one divides two, but two does not divide one. For transitivity, suppose a divides b and b divides c. Write b equals a k and c equals b l for integers k and l. Substituting gives c equals a times k l. Since k l is an integer, a divides c. This argument also handles zero because it uses multiplication rather than division by a possibly zero number.`
  },
  {
    slide: 14, chapter: "Testing relation properties",
    narration: `Define a relation on the rational numbers by declaring a related to b when a minus b is an integer. Reflexivity follows because a minus a equals zero, an integer. For symmetry, if a minus b is an integer, its negative b minus a is also an integer. For transitivity, if a minus b and b minus c are integers, their sum a minus c is an integer. Notice the repeated pattern: translate the relation into its defining condition, use a closure property of the integers, and translate back to the required relation statement.`
  },
  {
    slide: 15, chapter: "Testing relation properties",
    narration: `The claimed proof that symmetry and transitivity imply reflexivity is wrong. It begins by assuming that x is related to some y, but an arbitrary x may have no related partner. Symmetry and transitivity do not provide that missing existence. For a counterexample, take A containing one and two, and R containing only the pair one, one. It is symmetric and transitive, but it lacks the pair two, two, so it is not reflexive on A. The empty relation on a nonempty set is another counterexample: the conditional properties hold vacuously, while reflexivity fails.`
  },
  {
    slide: 16, chapter: "Equivalence relations",
    narration: `The table summarises familiar relations on their stated number systems. Less than is transitive, but not reflexive or symmetric. Equality has all three properties. Divisibility is reflexive and transitive, but not symmetric. Congruence modulo a positive integer has all three. For congruence, reflexivity uses a minus a equal to zero; symmetry uses the negative of a divisible difference; transitivity uses the sum of two divisible differences. A summary table should be supported by these definitions and short proofs, rather than memorised without the underlying reason.`
  },
  {
    slide: 17, chapter: "Equivalence relations",
    narration: `An equivalence relation is a relation on A that is reflexive, symmetric, and transitive. All three are required. Equality and congruence are examples from the table. Less than and divisibility are not. When a and b are related by an equivalence relation, we say they are equivalent with respect to that relation. This need not mean that they are literally the same object. For instance, one and four are different integers but are equivalent modulo three because their difference is divisible by three.`
  },
  {
    slide: 18, chapter: "Equivalence relations",
    narration: `Suppose each CS104 student has one recorded midterm grade. Relate two students when those grades are the same. Each student has the same grade as themself, proving reflexivity. If one student's grade equals another's, the equality reverses, proving symmetry. If the first and second grades agree and the second and third agree, the first and third agree, proving transitivity. Therefore this is an equivalence relation. The example groups students by the chosen attribute only; it makes no claim that students sharing a grade are identical in other respects.`
  },
  {
    slide: 19, chapter: "Equivalence classes",
    narration: `Section six point three asks what structure an equivalence relation creates. For any element a, collect all the elements related to a into its equivalence class. We will show that classes cannot overlap partially. They are either the same set or completely disjoint. This is what makes them suitable for grouping every element into exactly one block.`
  },
  {
    slide: 20, chapter: "Equivalence classes",
    narration: `For an equivalence relation R on S, the class of a is the set of all x in S for which x is related to a. The subscript R indicates which relation determines the class. In the displayed five-element example, look for pairs whose second coordinate is a. These are a, a and b, a, so the class of a contains a and b. Symmetry would let us inspect the first coordinate instead, but using the definition directly makes the reasoning explicit. The class is a set of elements, not a set of ordered pairs.`
  },
  {
    slide: 21, chapter: "Equivalence classes",
    narration: `The full calculation gives the same class for a and b, namely the set containing a and b. The classes of c, d, and e are all the set containing c, d, and e. There are five possible representatives but only two distinct classes. Do not count a class again just because it has a different representative. The phrase equivalence class presupposes an equivalence relation. For an arbitrary relation we can still collect related neighbours, but these sets need not have the equality-or-disjointness properties that justify the class terminology here.`
  },
  {
    slide: 22, chapter: "Equivalence classes",
    narration: `Return to the same-grade relation. The class of David contains every student whose grade equals David's grade. If David and Mary both have grade A, the class of David is the set of all students with grade A, and it is also the class of Mary. This is equality of two sets, not equality of the two people. Choosing another representative from a class changes its name but not its members. This distinction will be central when we calculate with congruence classes using different integer representatives.`
  },
  {
    slide: 23, chapter: "Why classes partition a set",
    narration: `There are three basic properties. Every a belongs to its own class, by reflexivity. Two elements are related exactly when their classes are equal. Unrelated elements have disjoint classes. Begin with one direction of the second property: suppose the class of a equals the class of b. Since a belongs to its own class, it also belongs to the class of b. By definition, a is related to b. Notice that the starting point a belongs to its class depends on reflexivity; it is not automatic for an arbitrary relation.`
  },
  {
    slide: 24, chapter: "Why classes partition a set",
    narration: `For the reverse direction, suppose a is related to b. Take an arbitrary x in the class of a. Then x is related to a, and transitivity with a related to b gives x related to b. Thus the class of a is a subset of the class of b. Symmetry gives b related to a, so the same argument proves the reverse inclusion. The classes are equal. This proof combines Week Five's two-inclusion method with the exact relation properties needed to move an arbitrary element from one class to the other.`
  },
  {
    slide: 25, chapter: "Why classes partition a set",
    narration: `Now suppose the classes of a and b are disjoint. If a were related to b, the property just proved would make their classes equal. But the class of a is nonempty because it contains a. Two equal nonempty sets cannot have empty intersection. This contradiction proves that a and b are unrelated. The nonempty condition is essential: equality alone would not contradict disjointness if both sets were empty. Reflexivity is again doing important work in the background.`
  },
  {
    slide: 26, chapter: "Why classes partition a set",
    narration: `For the other direction, prove the contrapositive: if the two classes share an element, then a is related to b. Choose x in their intersection. We have x related to a and x related to b. Symmetry turns the first relation into a related to x. Transitivity with x related to b then gives a related to b. Therefore, if a and b are unrelated, their classes must be disjoint. Combining the two directions shows that even one shared element forces two equivalence classes to be the same class.`
  },
  {
    slide: 27, chapter: "Partitions",
    narration: `The distinct equivalence classes form a partition of A. A partition is a collection of nonempty subsets that cover A and are pairwise disjoint. Reflexivity supplies coverage because each element belongs to its own class. It also guarantees each class is nonempty. The previous properties guarantee disjointness of distinct classes. Conversely, any partition defines an equivalence relation by relating elements exactly when they lie in the same block. This connection lets us switch between a relation described by pairs and a grouping described by sets.`
  },
  {
    slide: 28, chapter: "Partitions",
    narration: `How many equivalence relations exist on a set containing a, b, and c? Count its partitions. One partition has three singleton blocks. Three partitions have a pair and a singleton: a with b, a with c, or b with c. The final partition puts all three elements into one block. That gives five equivalence relations. For each partition, include every ordered pair whose two entries lie in the same block, including all diagonal pairs. Reordering the blocks or changing the representative does not create a new partition.`
  },
  {
    slide: 29, chapter: "Partitions",
    narration: `Equivalence relations let us work with groups of objects that behave the same for a chosen purpose. An infinite set can sometimes be replaced by finitely many classes, as happens with remainders modulo a fixed positive integer. This is a possibility, not a universal guarantee. Equality on the integers, for example, has infinitely many singleton classes. Also distinguish the number of classes from the number of elements in a class: congruence modulo three has only three classes, but each class contains infinitely many integers.`
  },
  {
    slide: 30, chapter: "Congruence classes and operations",
    narration: `For a positive modulus n, the congruence class of a contains all integers whose difference from a is divisible by n. Modulo three there are exactly three distinct classes. The class of zero contains all multiples of three. The class of one contains integers such as negative five, negative two, one, four, and seven. The class of two contains negative four, negative one, two, five, and eight. Every integer belongs to exactly one of these classes. In particular, negative one is in the class of two because their difference is negative three, a multiple of three.`
  },
  {
    slide: 31, chapter: "Congruence classes and operations",
    narration: `Define addition of classes by adding representatives, and multiplication by multiplying representatives. Modulo five, the class of one plus the class of three is the class of four. Replacing the representatives by six and eight gives the class of fourteen, which is the same class as four. For multiplication, one times three gives the class of three, while six times eight gives the class of forty-eight, again the same class as three. We must prove this agreement always happens. A well-defined operation cannot depend on which representative we happened to choose.`
  },
  {
    slide: 32, chapter: "Congruence classes and operations",
    narration: `Suppose a is congruent to b and c to d modulo n. Then a minus b and c minus d are multiples of n. Their sum shows that a plus c is congruent to b plus d. For products, write a c minus b d as a times c minus d, plus d times a minus b. Each term is divisible by n, so the whole difference is too. This proves multiplication is independent of representatives. Repeated multiplication also preserves congruence for every positive integer exponent. These results justify reducing representatives during a calculation instead of carrying large integers throughout.`
  },
  {
    slide: 33, chapter: "Divisibility by nine",
    narration: `Let S of a positive integer mean the sum of its decimal digits. The proposition says the number and its digit sum are congruent modulo nine. Consequently, the number is divisible by nine exactly when its digit sum is. For seven thousand three hundred nineteen, the digits sum to twenty. Since twenty is not divisible by nine, neither is the original number. Both have remainder two. The statement is stronger than a yes-or-no divisibility test because it identifies the same residue class. Next we explain why decimal place values preserve the digit sum modulo nine.`
  },
  {
    slide: 34, chapter: "Divisibility by nine",
    narration: `Expand seven thousand three hundred nineteen as seven times ten cubed, plus three times ten squared, plus one times ten, plus nine. Since ten is congruent to one modulo nine, every nonnegative power of ten is congruent to one. Using the addition and multiplication rules, the expansion is congruent to seven plus three plus one plus nine, which is twenty. The same reasoning works for any decimal expansion, so it proves the general digit-sum rule rather than just one example. We have moved from pairs to equivalence classes and then to useful arithmetic. In your review, justify each relation property separately and distinguish a representative from the class it names.`
  }
];
