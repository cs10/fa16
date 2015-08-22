---
layout: default
title: Lab Check-Off Questions
permalink: labquestions/index.html
---

{% include nav.html %}

{% include quicklinks.html %}

<script>
    {% include_relative assets/cs10.js %}
</script>

# Lab Check-Off Questions

<div class="page-section" markdown="1">

## Directions

**All lab check-off deadlines are at 11:59PM.**
(However, you need to get checked off by a TA or lab assistant, so you last chance to get checked off is during lab or office hours.)

To get checked off, you should prepare answers to the specific questions for each lab. You shouldn't feel compelled to memorize every single detail of lab. The goal here to make sure you're on track with CS10 and you should be comfortable with the higher level concepts for each question. For each lab the first questions are the biggest ideas, and the later questions are for your own benefit and review.

Note that you only need to get checked off for 1 lab each week! You get to pick which lab you'd like to get checked off for, and we encourage you to get checked off for whatever is the **most** challenging. You'll get credit for effort, and getting close to the answer, so this is a great way to check in with your TA and Lab Assistants.

**Remember:** Even if you miss a check-off deadline, you can still get 50% credit for any lab check off at any time during the semester.

</div>

---

<div class="page-section" markdown="1">

## Quick Links

* [Lab 1](#lab1) (Week 1)
* [Lab 2](#lab2)
* [Lab 3](#lab3) (Week 2)
* [Lab 4](#lab4)
* [Lab 5](#lab5)
* [Lab 6](#lab6) (Week 3)
* [Lab 7](#lab7)
* [Lab 8](#lab8) (Week 4)
* [Lab 9](#lab9)
* [Lab 10](#lab10) (Week 5)
* [Lab 11](#lab11) (Week 6)
* [Lab 12](#lab12)
* [Lab 13](#lab13) (Week 7)
* [Lab 14](#lab14) 
</div>

---

<div class="page-section" markdown="1">

# Week 1: Labs 1 and 2: No check-off needed!

## Lab 1: Welcome to Snap<em>!</em>   {#lab1}
No questions for this lab!

## Lab 2: Build Your Own Blocks {#lab2}

* Why should we make our own blocks?
* How do you make a block?
* How many different types of blocks are in Snap<em>!</em>? What do they do?
* Show us the `Draw a Star` exercise.
* Show us the `Draw Polygon` block.
* Show us the `Draw Flower` block.
* Make the bug dance!
* Name 3 different ways you can make a block repeat.
* What does the pick random block do? Give a scenario where this functionality could be useful.
* Why are booleans important?
* What are some of the booleans we have access to in Snap<em>!</em> and what do they do?
* What is the difference between `if` and `if-else`  blocks?
* What is the difference between reporter and predicate blocks?
* What is a script variable useful for? How do we initiate a script variable?
* Show us the code for the `letter grade _` block.
* Correctly answer the questions on the  “Self-test: Complex Booleans” page and show us.
* Show us the code for the ` is _ between _ and _ ?` block.
* For the Leap Year example, explain which code was easiest to read and which code was easiest to debug.

---

# Week 2: Labs 3, 4, and 5: due 7/6

## Lab 3: Functions  {#lab3}
* What was Mark’s problem with his `max` block?
* Name a few of the input types. Why is it important that we specify input types?
* Please show me your “sum of 2 smallest numbers” block or the “are any equal” block, and explain how you composed functions to write these blocks.
* What is a script variable useful for? How do we initiate a script variable?
* Please show some of your solutions to the buggy “sum the numbers between block.” Do they work now? What did you change?
* Please show your simplified tic-tac-toe board. Why did you organize it the way you did?
* Can I see your `valid-date` block? How is what you did here similar to simplifying the tic-tac-toe board?
* Why is the check block useful? And how does it work? Demonstrate please.
* How are global variables different from script variables?


## Lab 4: Finch Robots  {#lab4}

* Due to the hardware requirements of this lab, it will not count towards a check-off.

## Lab 5: Lists  {#lab5}

* What are lists? How are they represented in Snap? What are some operations you can perform on lists?
* How are lists different from variables? How are they similar? How do you create a temporary list for use in a block definition?
* Which blocks allow you to use a function on an entire list “all at once”? What are the different effects that they have? What are their domains and ranges?
* Demonstrate your `Acronym` (Initialism) block.
* Demonstrate your `Exaggerate` block.
* What is the difference between the `for` and `for each` blocks?
* Lets look at `swap`. Why do we need a temp variable?
* Why might global variable manipulation be useful in some situations? what drawbacks are there?

---

# Week 3: Labs 6 and 7: Due 7/13

## Lab 6: Algorithms and Algorithmic Complexity  {#lab6}

* What is an algorithm? Can you give an example of an algorithm that you use in your daily life? What about from an earlier lab?
* Show me your `find number in an unsorted list` block. Describe the algorithm that you used to solve this problem.
* Show me your `find number in a sorted list` block. What algorithm are you using in this block and how does it work?
* Why was the binary search technique so much faster than trying to find a number in an unsorted list? Is it actually faster when considering the time needed to sort the list initially?
* If the number of inputs, N, doubles, how would that change the Worst Case Running Time for `find number in unsorted list`?
* If the number of inputs, N, doubles, how would that change the Worst Case for `find number in sorted list`?
* How can we objectively measure which algorithm, sorted or unsorted, is faster. What kind of extra work is required for the sorted algorithm? Are there cases where unsorted might be faster?
* What is memoization? If you were able to implement it in the `find number in sorted list (memoized)` block, what makes memoization faster?
* In your experimental `Number-guessing` game, which algorithm did you find to be faster? Why? What type of search is `Higher/Lower` representing?
* What happened with the time it took for your computer to counter up the numbers between 1 and x when you started doubling the numbers? Tripling the numbers? What do you think would happen with the time I multiplied your top number by 8?
* Please show me your Non-Gauss and Gauss `Add all numbers in`.  Which was faster? Why?
* Please show me your `Are the numbers of (LIST) distinct?` block. What is the difference between "Worst-Case" and "Best Case" in terms of Runtime?
* Of all the runtimes you have discovered thus far, can you rank them from “fastest” to “slowest”? Why is runtime important for the programs that we create?`

## Lab 7: Trees and Fractals with Recursion  {#lab7}

* What is recursion? Why is it so powerful?
* What do you think infinite recursion is? How do you prevent infinite recursion from happening?
* What are some real-life examples of recursion?
* What is the difference between the base case and the recursive case?
* Please show me your `crazy-tree` block.
* Please show me your `snowflake` or `c-curve` block.

---

# Week 4: Labs 8 and 9: Due 7/20

## Lab 8: Recursive Reporters  {#lab8}

* Explain how the `plurals(words)` block works.
* Show me your recursive `exaggerate` block. Do you like the iterative or recursive version better? (1 pt. for correct opinion)
* Convince me that the recursive `pascal(row, column)` works (defend the base and recursive cases).
* Why does `odd numbered items` need two base cases?
* Show me your finished `merge` block.
* Explain how the `subsets` block works.

## Lab 9: Concurrency  {#lab9}

* How can you make parallel programs in Snap<em>!</em>?
* Why does adding more people in the card sorting example or more threads in a program sometimes slow the process down?
* When you run parallel code, are the chunks of code really executing at the exact same time?
* What are some issues that can occur in parallel programming?
* What is the difference between determinism and nondeterminism?
* In the `What are the possible values?` exercise, what were the possibles values of `finish` when you run the code nondeterministically?

---

# Week 5: Lab 10: Due 7/27

## Lab 10: The Internet and Tic-Tac-Toe

#### Internet: Required Questions

1. Of the shell commands traceroute, whois, and telnet, explain and demonstrate one of them. Why is the information they return useful?
2. What is the difference between latency and throughput? What shell command can you use to measure latency?
3. What is an information footprint, and what steps can you take to lessen your footprint in the future?

#### Internet: Self-Check Questions

* Pick a website of your choosing and get the page source. What language is the page source written in?
* How do you start a shell and what is the shell useful for?
* What is a Domain name?
* Try pinging a website's url. What does ping measure?

## Lab 11: Tic-Tac-Toe {#lab11}

#### Tic-Tac-Toe Required Questions
1. How are lists used to implement the tic-tac-toe board? Why does this strategy work? Would this strategy work even with a larger board?
2. Show your `appearances` or `substitute triple` block, and explain your implementation (You could be asked either, so be prepared for both!).
3. Show your `winning-square` or full `ttt` block (Again, you could be asked either, so be ready for both!).

#### Tic-Tac-Toe: Self-Check Questions
* What did you find to be the most pivotal block in your creation of the game? Show the code for this block, explain your implementation of it works, and explain how the game would have not worked without it.
* The lab mentioned a few core rules that are part of everyone's tic-tac-toe strategy (in the Program Structure and Strategy section), and thus encouraged them as part of your computer program. It went on to say “Humans don't always think alike about the in-between rules; we'll make suggestions later, after you finish the minimal assignment.”
Why do humans not always think alike about the “in-between rules”? Can you give an example of how two people might think differently about an “in-between rule” and explain the difficulties in implementing that in a program?
* When was it best to report positions for some of the tic-tac-toe blocks, and when was it more ideal to report actual letters (‘X’ or ‘O’)? Relate your explanations back to domain and range.

---

# Week 6: Labs 11 and 12: Due 8/3

## Lab 11:  Lambdas and HOFs {#lab12}

#### Required Questions

1. How can we use functions as data in Snap? What do the “call” and “run” blocks do, and what’s the difference between them?
2. Demonstrate your `list all factorions between __ and __ ` block.
3. Demonstrate your `is __ pandigital?` block.

#### Self-Check Questions

* How does the `compose` block work?


## Lab 12: Besides Blocks: Welcome to Python!  {#lab12}

#### Required Questions

1. What is the difference between the syntax of one equals sign (=) vs. a double equals sign (==) in Python?
2. What is 0-indexing, and why is it relevant to string manipulation in Python? Show how to create a substring from a string.
3. Run the "python virus.py run_tests" command to check that all the exercises work.

#### Self-Check Questions

* Show how to open the Python interpreter and run a script.
* What is a directory?
* How do you make a directory, enter a directory, and check what is inside your current directory?

---

# Week 7: Lab 13: Due 8/10

## Lab 13: Besides Blocks: Data Structures in Python  {#lab13}

#### Required Questions

1. Show that your PythonLab2.py file passes the tests for all 6 exercises.
2. What are the similarities and differences between lists and dictionaries? What are 'keys' and 'values' and how do they compare to numerical indices in lists?
3. How can you easily iterate through the items of a list? What about a dictionary?

#### Self-Check Questions

* What similarities do you notice between Snap! and Python? Differences?
* What is an iterable and iterator?
* What do Higher Order Functions look like in Python?

## Lab 14: TBD {#lab14}
---

---

</div>


