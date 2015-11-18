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

**Remember:** Even if you miss a check-off deadline, you can still get 50% credit for any lab check off at any time during the semester.

</div>

---

<div class="page-section" markdown="1">

## Quick Links

* [Lab 1](#lab1) (Week 1)
* [Lab 2](#lab2) (Week 2)
* [Lab 3](#lab3) 
* [Lab 4](#lab4) (Week 3)
* [Lab 5](#lab5)
* [Lab 6](#lab6) (Week 4)
* [Lab 7](#lab7) (Week 5)
* [Lab 8](#lab8) 
* [Lab 9](#lab9) (Week 6)
* [Lab 10](#lab10)(Week 7) 
* [Lab 11](#lab11) 
* [Lab 12](#lab12)
* [Lab 13](#lab13) 
* [Lab 14](#lab14) (Week 11)
* [Lab 15](#lab15)
* [Lab 16](#lab16) (Week 12)
* [Lab 17](#lab17)
* [Lab 17](#lab18)
</div>

---

<div class="page-section" markdown="1">

# Week 1: Lab 1: No check-off needed!

## Lab 1: Welcome to Snap<em>!</em>   {#lab1}
* No questions for this lab!

---

# Week 2: Labs 2 and 3

## Lab 2: Build Your Own Blocks {#lab2}

**Required**

* Why should we make our own blocks?
* Show us the `Draw Flower` block.

**More Self-Check Questions**

* What are some different ways to achieve repetition? Why would you use one way over another?

## Lab 3: Conditionals and Variables {#lab3}

**Required**

* Why are script variables useful? How do we create a script variable?
* Show us the code for the <code>is _ between _ and _ ?</code> block.

**More Self-Check Questions**

* What is the difference between <code>if</code> and <code>if-else</code> blocks?
* For the Leap Year example, explain which code was easiest to read and which code was easiest to debug.

------

#Week 3: Labs 4 and 5

## Lab 4: Functions {#lab4}

**Required** 

* Show and Explain your Valid-Date Block
* What is the difference between and global and script variable? What are the pros/cons of each?

**More Self-Check Questions**

* What are different ways to broadcast between sprites?
* Explain the bugs in each of the provided pieces of code for the "sum of numbers between __ and ___ block"

## Lab 5: Lists 1 {#lab5}

**Required**

* Which blocks allow you to use a function on an entire list “all at once”? What are their domains and ranges?
* What is the difference between the for and for each blocks?

**More Self-Check Questions**

* Lets look at <code>swap</code>. Why do we need a temp variable?
* What are lists? How are they represented in Snap? What are some operations you can perform on lists?
* How are lists different from variables? How are they similar? How do you create a temporary list for use in a block definition?
* Why might global variable manipulation be useful in some situations? what drawbacks are there?

#Week 4: Lab 6

## Lab 6: Algorithms {#lab6}

**Required**

* What is an algorithm? Please give an example both in real life and from class.  
* Please show both your "Find the number X in Unsorted List" and "Find the number X in Sorted List" blocks and describe the difference in the algorithms used.  

**More Self-Check Questions**

* What is memoization? When is it useful?  

#Week 5: Labs 7 and 8

## Lab 7: Algorithm Complexity {#lab7}

**Required**

* Please rank the runtimes you've covered in this lab from “fastest” to “slowest". For each, how does the program's input affect runtime? Why is runtime important for the programs that we create?
* Please show me your <code>Are the numbers of (LIST) distinct?</code> block. What is the difference between the "worst case" and “best case" scenarios for this block, in terms of Runtime?

**More Self-Check Questions**

* What happened with the time it took for your computer to counter up the numbers between 1 and x when you started doubling the numbers? Tripling the numbers?
* Between the Non-Gauss and Gauss method of adding numbers, which was faster? Why?

## Lab 8: Finch Lab   {#lab8}
* You can get checked off for this lab as long as you show up to lab and work on it. No questions!

#Week 6: Quest and Lab 9

## Lab 9: Testing Code and 2048 {#lab9}

**Required**

* Please show me your test for the <code>merge column</code> block. How should <code>merge column</code> behave for the following column: 0 4 2 2?
* Please show me your test for the <code>rotated row</code> block.

#Week 7: Labs 10 and 11

## Lab 10: Recursion {#lab10}

**Required**

* What is the difference between the base case and the recursive case?
* Show me your snowflake block (or C-curve…)

**More Self-Check Questions**

* What do you think infinite recursion is? How do you prevent infinite recursion from happening?

## Lab 11: Concurrency {#lab11}

**Required**

* How can you make parallel programs in Snap!?
* Why does adding more people in the card sorting example or more threads in a program sometimes slow the process down?
* What are some issues that can occur in parallel programming (name 2)?
* What is the difference between determinism and nondeterminism?

**More Self-Check Questions**

* If two separate scripts are run at the same time in Snap!, are they actually running at the same time?

#Week 8: Lab 12

## Lab 12: Recursive Reporters I {#lab12}

**Required**

* Why do we need two recursive calls for Pascal's Triangle? What is the runtime?
* Show me <code>ends-e</code> and <code>number</code>.

**More Self-Check Questions**

* Make sure you understand how merge and subsets work.

#Week 9: Lab 13

## Lab 13: Tic-Tac-Toe {#lab13}

**Required**

* How are lists used to implement the tic-tac-toe board? Why does this strategy work? Would this strategy work even with a larger board?
* Show your appearances or substitute triple block, and explain your implementation (You could be asked either, so be prepared for both!).

**More Self-Check Questions**

* Fully complete the winning-square and ttt blocks (Ask your TA to check if they are correct).
* When was it best to report positions for some of the tic-tac-toe blocks, and when was it more ideal to report actual letters (‘X’ or ‘O’)? Think about domain and range!

#Week 11: Lab 14 and 15

## Lab 14: Lambdas and HOFs {#lab14}

**Required**

* How can we use functions as data in Snap? What do the “call” and “run” blocks do, and what’s the difference between them?
* Demonstrate your list all factorions between __ and __ block.

**More Self-Check Questions**

* Demonstrate your is __ pandigital? block.
* How does the compose block work?

## Lab 15: Internet {#lab15}

**Required**

* Explain in your own words what an information footprint is.
* What is the difference between latency and throughput? What shell command can you use to measure latency?

**More Self-Check Questions**

* Demonstrate traceroute. Explain what information is being shown.
* Pick a website of your choosing and get the page source. What language is the page source written in?

#Week 12: Lab 16

##Lab 16: Besides Blocks: Welcome to Python {#lab16}

**Required**

* What is the difference between the syntax of one equals sign <code>=</code> vs. a double equals sign <code>==</code> in Python?
* What is 0-indexing, and why is it relevant to string manipulation and loops in Python?
* Run the “python virus.py run_tests” command to check that all the exercises work.

**More Self-Check Questions**

* Show how to create a substring from a string.
* Show how to open the Python interpreter and run a script.
* What is a directory?
* How do you make a directory, enter a directory, and check what is inside your current directory?
* 
#Week 13: Lab 17 and Lab 18

##Lab 17: Besides Blocks: Data Structures in Python {#lab17}

**Required**

* Show that your PythonLab2.py file passes the tests for all 6 exercises.
* What are the similarities and differences between lists and dictionaries? What are ‘keys’ and ‘values’ in Dictionaries and how do they compare to numerical indices in lists?
* What is an iterable? Give an example and tell your why it is useful that your example is an iterable.

**More Self-Check Questions**

* What similarities do you notice between Snap! and Python? Differences?
* What do Higher Order Functions look like in Python?

##Lab 18: Besides Blocks: Text Processing in Python {#lab17}

**Required**

* Show that your average_word_length function is able to properly compute the average_word_length of nietzsche.txt.

* Show how you'd change your top_n_words function so that it returned the least common n words.

**More Self-Check Questions**

* Why don't we have optional parameters in Snap!?

* 

<!-- Keep the /div at the bottom -->
</div>
