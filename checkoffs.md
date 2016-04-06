---
layout: default
title: "Lab Check-Off Questions"
permalink: labquestions/index.html
published: true
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
* [Lab 10](#lab10) (Week 7)
* [Lab 11](#lab11)
* [Lab 12](#lab12) (Week 8)
* [Lab 13](#lab13) (Week 9)
* [Lab 14](#lab14)
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

* Why should we make our own blocks? What's the point?
* Show us the `Draw Flower` block.

**More Self-Check Questions**

* What are some different ways to achieve repetition? Why would you use one way over another?
* How would you change the draw flower block so that the petals could be different shapes?

## Lab 3: Conditionals and Variables {#lab3}

**Required**

* Why are script variables useful? How do we create script variables?
* Show us the code for the `is _ between _ and _ ?` block.

**More Self-Check Questions**

* Describe the truth tables for A and B and C / A or B or C.
* What is the difference between if and if-else blocks?

---

# Week 3: Labs 4 and 5

## Lab 4: Functions {#lab4}

**Required**

* Name a few of the input types. Why is it important that we specify input types?
* How are global variables different from script variables?

**More Self-Check Questions**

* Why is the check block useful? And how does it work?
* Why is the broadcast block useful? Give an example of a good situation to use one.

## Lab 5: Lists 1 {#lab5}

**Required**

* Which blocks allow you to use use a function on an entire list "all at once"? What are their inputs and outputs?
* Show us your `expand _ ` block and explain how you used the `for each` block.

**More Self-Check Questions**

* Look back at the `swap` block. Why do you need a temp variable?
* How are lists different from variables? How do you create a temporary list for use in a block definition?
* When would you want to use a `for each` loop versus a higher order function? What's similar and different about them?

---

# Week 4: Lab 6 and 7

## Lab 6: Algorithms {#lab6}

**Required**

* What is an algorithm? Please give an example both in real life and from class.
* Please show both your “Find the number X in Unsorted List” and “Find the number X in Sorted List” blocks and describe the difference in the algorithms used.

**More Self-Check Questions**

* What is _memoization_? When is it useful?

## Lab 7: Algorithm Complexity {#lab7}

**Required**

* Please show me your Non-Gauss and Gauss `Add all numbers in`. Which was faster? Why?
* Of all the runtimes you have discovered thus far, can you rank them from “fastest” to “slowest”? Why is runtime important for the programs that we create?`

**More Self-Check Questions**

* What is the difference between “Worst-Case” and “Best Case” Runtimes when running the `Are the numbers of (LIST) distinct?` block? Why?
* Why are constant time algorithms so rare?
* Why are logarithmic time algorithms sought after?

---

# Week 5: Lab 8

## Lab 8: Finch Lab   {#lab8}
* You can get checked off for this lab as long as you show up to lab and work on it. No questions!

---

# Week 6: Labs 9 and 10

## Lab 9: Testing Code and 2048 {#lab9}

**Required**

* Please show me your tests for merge up and merge column.
* What is Test Driven Development?

**More Self-Check Questions**

* Explain how the test block works (its input, output, and how it transforms the input to the output).
* How would you write tests for map, keep, and combine using the test block? Try writing some of your own tests.

## Lab 10: Recursion {#lab10}

**Required**

* What defines a recursive block? What are the two necessary "cases" that a recursive block must consider? Name and define them.
* Please show me either your "crazy-tree" block or your "snowflake" block.

**More Self-Check Questions**

* Why is it important that the inputs to a recursive call be smaller than the original inputs to the function?
* Why is it important that the sprite face the same direction at the end of a recursive function as it faced initially?

---

# Week 7: Lab 11

## Lab 11: Recursive Reporters I {#lab11}

### Please note: This lab is _required_ to be submitted through bCourses.
### Go to this page to submit the lab online: [https://bcourses.berkeley.edu/courses/1408649/assignments/7511754][bcourses11]

[bcourses11]:  https://bcourses.berkeley.edu/courses/1408649/assignments/7511754

**Required**

* Why does odd numbered items need two base cases?
* Please show me your completed merge block.

**More Self-Check Questions**

* How would we implement memoization in a recursive block?
* Is recursion more powerful than iteration? Why/why not?

---

# Week 8: Lab 12

## Lab 12: Tic-Tac-Toe, Boards {#lab12}

### Go to this page to submit the lab online:
[bCourses](https://bcourses.berkeley.edu/courses/1408649/assignments/7531220)

**Required**

* Show your "ttt" block implementation. How did one of the questions we asked ourselves before starting tic-tac-toe help us design the program?
* Why did we have variables like "Size", "Start", and "Display Width" when designing our board?

**More Self-Check Questions**

* Show your neat end-game feature that you added to the maze game.

------

# Week 9: Lab 13

## Lab 13: Concurrency {#lab13}

**Required**

* Describe one pro and one con of the way that Snap! handles concurrency.
* What is the difference between determinism and nondeterminism, in the context of concurrency?
* What is deadlock? What is the race condition?

**More Self-Check Questions**

* Is it always true that splitting a task among 10 "workers" is better than splitting it among 5 "workers"?

---

# Week 11: Lab 14

## Lab 14: Lambdas and HOFs {#lab14}

### Go to bCourses to submit the lab online:
[bCourses](https://bcourses.berkeley.edu/courses/1408649/assignments/7567086)
Note the autograder requires you to use the "AUTOGRADER" sprite when clicking "Get Feedback", but otherwise you can do the same work as normal.

**Required**

* How can we use functions as data in Snap? What do the “call” and “run” blocks do, and what’s the difference between them?
* Explain your 'is _ pandigital?' block.
* Explain your 'min value of _ over all numbers in _'? How would we make a maximizing version of this block?

**More Self-Check Questions**

* Look at the "draw tree with size 'size' levels 'levels' line-type: 'type-of-line'. How does this differ from how we drew trees before? What does the 'type-of-line' argument allow us to do?
* What does the 'compose' block allow us to do with functions? What's the difference between 'compose (2 x _) (6 + _)' and 'compose (6 + _) (2 x _)'?

------

# Week 12: Lab 15 and 16

## Lab 15: Besides Blocks: Welcome to Python {#lab15}

**Required**

* What is the difference between "=" and "==" in python?
* How do you define a function in python?
* Show us the result of running the autograder.

**More Self-Check Questions**

* What does 0-indexing mean?
* Show how to open the Python interpreter and run a script.
* What is a directory?
* How do you make a directory, enter a directory, and check what is inside your current directory?

## Lab 16: Besides Blocks: Data Structures in Python {#lab16}

**Required**

* Name two similarities in syntax between Snap! and Python.  
* What things are mutable in both Snap!? In Python?
* Compare and contrast one of the HoFs in Python and Snap!.  

**More Self-Check Questions**

* Coming soon!

------

# Week 13: Lab 17 and Lab 18

## Lab 17: Internet {#lab17}

**Required**

* Coming soon!

**More Self-Check Questions**

* Coming soon!

## Lab 18: Besides Blocks: Text Processing in Python {#lab17}

**Required**

* Coming soon!

**More Self-Check Questions**

* Coming soon!

<!-- Keep the /div at the bottom -->
</div>
